// Host-in-browser multiplayer over WebRTC (PeerJS for the handshake only).
//
// The host's browser runs the whole game, AIs included. Guests send orders
// ("launch 3 from A to B") and receive the game state a few times a second.
// A room code is the host's peer id, so nothing else needs a server.

import Peer from 'peerjs';

const PREFIX = 'perihelion-v1-';
const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
export const MAX_SEATS = 3;
// ?peer=host:port points at a self-hosted PeerJS server (for testing);
// by default the free public PeerJS cloud does the handshake.
const custom = new URLSearchParams(location.search).get('peer');
const OPTS = custom
  ? { host: custom.split(':')[0], port: Number(custom.split(':')[1] || 9000), path: '/', secure: false, debug: 0 }
  : { debug: 0 };

export const makeCode = () => Array.from({ length: 5 }, () => LETTERS[(Math.random() * LETTERS.length) | 0]).join('');

/**
 * Host a room. `on` receives: open(code), seats(seats), cmd(seat, cmd),
 * error(text), left(seat).
 * Seats: [{ kind: 'human' | 'ai', name, conn?, online, difficulty? }]; seat 0 is the host.
 */
export function hostRoom(name, on) {
  const code = makeCode();
  const peer = new Peer(PREFIX + code, OPTS);
  const seats = [{ kind: 'human', name, online: true }];
  let started = false;
  const pub = () => seats.map((s) => ({ kind: s.kind, name: s.name, online: s.online, difficulty: s.difficulty }));
  const send = (conn, msg) => { try { if (conn && conn.open) conn.send(msg); } catch { /* ignore */ } };
  const room = {
    code,
    seats,
    get started() { return started; },
    broadcast(msg) { for (const s of seats) if (s.conn) send(s.conn, msg); },
    sendTo(i, msg) { send(seats[i]?.conn, msg); },
    lobby() { for (const [i, s] of seats.entries()) if (s.conn) send(s.conn, { t: 'lobby', seats: pub(), you: i, code }); on.seats(pub()); },
    addAI(difficulty) {
      if (started || seats.length >= MAX_SEATS) return;
      seats.push({ kind: 'ai', name: `AI · ${difficulty}`, online: true, difficulty });
      room.lobby();
    },
    remove(i) {
      if (started || i === 0 || !seats[i]) return;
      const [s] = seats.splice(i, 1);
      if (s.conn) { send(s.conn, { t: 'kicked' }); setTimeout(() => s.conn.close(), 200); }
      room.lobby();
    },
    start() { started = true; },
    close() { peer.destroy(); },
  };
  peer.on('open', () => on.open(code));
  peer.on('error', (e) => on.error(e.type === 'unavailable-id' ? 'Code clash, try again' : `Connection problem (${e.type})`));
  peer.on('connection', (conn) => {
    conn.on('data', (msg) => {
      if (msg.t === 'hello') {
        // Rejoining mid-game with the same name takes the old seat back.
        let i = seats.findIndex((s, j) => j !== 0 && s.kind === 'human' && s.name === msg.name && !s.online);
        if (i < 0 && started) { send(conn, { t: 'full', why: 'Game already started' }); return; }
        if (i < 0) {
          if (seats.length >= MAX_SEATS) { send(conn, { t: 'full', why: 'Room is full' }); return; }
          seats.push({ kind: 'human', name: uniqueName(seats, msg.name) });
          i = seats.length - 1;
        }
        Object.assign(seats[i], { conn, online: true });
        conn.seat = i;
        room.lobby();
        if (started) on.rejoin(i);
      } else if (msg.t === 'cmd' && conn.seat !== undefined) {
        on.cmd(conn.seat, msg.cmd);
      }
    });
    conn.on('close', () => {
      const i = seats.findIndex((s) => s.conn === conn);
      if (i < 0) return;
      if (!started) { seats.splice(i, 1); room.lobby(); return; }
      seats[i].online = false;
      seats[i].conn = null;
      room.lobby();
      on.left(i);
    });
  });
  return room;
}

function uniqueName(seats, name) {
  let n = name || 'Player';
  let k = 2;
  while (seats.some((s) => s.name === n)) n = `${name} ${k++}`;
  return n;
}

/** Join a room by code. `on` receives every message from the host, plus error(text) and closed(). */
export function joinRoom(code, name, on) {
  const peer = new Peer(OPTS);
  let conn = null;
  const room = {
    send(msg) { try { if (conn && conn.open) conn.send(msg); } catch { /* ignore */ } },
    close() { peer.destroy(); },
  };
  peer.on('open', () => {
    conn = peer.connect(PREFIX + code.toUpperCase(), { reliable: true });
    const timer = setTimeout(() => { if (!conn.open) on.error('No game found with that code'); }, 9000);
    conn.on('open', () => { clearTimeout(timer); room.send({ t: 'hello', name }); });
    conn.on('data', (msg) => on.message(msg));
    conn.on('close', () => on.closed());
  });
  peer.on('error', (e) => on.error(e.type === 'peer-unavailable' ? 'No game found with that code' : `Connection problem (${e.type})`));
  return room;
}
