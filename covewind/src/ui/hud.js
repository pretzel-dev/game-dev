/**
 * The smallest HUD that still tells you what you need: speed, height, power.
 *
 * It fades out when you stop touching anything, so most of the time the screen
 * is just island.
 */
const IDLE_AFTER = 6;

export function createHud({ actions = {} } = {}) {
  const el = {
    speed: document.querySelector('#speed'),
    alt: document.querySelector('#alt'),
    power: document.querySelector('#power'),
    hint: document.querySelector('#hint'),
    hud: document.querySelector('#hud'),
    keyhints: document.querySelector('#keyhints'),
    tools: document.querySelector('#tools'),
    intro: document.querySelector('#intro'),
    sound: document.querySelector('#soundBtn'),
    throttleFill: document.querySelector('#throttleFill'),
    throttle: document.querySelector('#throttle'),
  };

  let hintTimer = 0;
  let visible = true;
  let idle = 0;
  let refresh = 0;
  let lastHint = '';

  const wire = (selector, action) => {
    const node = document.querySelector(selector);
    if (!node || !action) return;
    node.addEventListener('click', (event) => {
      event.preventDefault();
      action();
    });
  };
  wire('#cameraBtn', actions.camera);
  wire('#lightBtn', actions.light);
  wire('#photoBtn', actions.photo);
  wire('#soundBtn', actions.sound);

  function hint(text, seconds = 2.4) {
    if (!el.hint) return;
    // Don't interrupt an identical message that is already on screen.
    if (text === lastHint && hintTimer > 0) {
      hintTimer = Math.max(hintTimer, seconds);
      return;
    }
    lastHint = text;
    el.hint.textContent = text;
    el.hint.style.opacity = visible ? '1' : '0';
    hintTimer = seconds;
  }

  function toggle() {
    visible = !visible;
    const opacity = visible ? '' : '0';
    el.hud.style.opacity = visible ? '.94' : '0';
    if (el.keyhints) el.keyhints.style.opacity = visible ? '.68' : '0';
    if (el.tools) el.tools.style.opacity = visible ? '1' : '0';
    if (!visible && el.hint) el.hint.style.opacity = opacity;
    return visible;
  }

  function setSound(on) {
    if (!el.sound) return;
    el.sound.classList.toggle('off', !on);
    el.sound.textContent = on ? '♪' : '♪̸';
  }

  function update(dt, flight, activity) {
    if (hintTimer > 0) {
      hintTimer -= dt;
      if (hintTimer <= 0 && el.hint) el.hint.style.opacity = '0';
    }

    // Idle fade: the UI gets out of the way when you are just flying.
    idle = activity > IDLE_AFTER ? Math.min(idle + dt, 2) : 0;
    document.body.classList.toggle('idle', visible && idle > 0.2 && hintTimer <= 0);

    refresh -= dt;
    if (refresh > 0) return;
    refresh = 0.1;

    el.speed.textContent = `${Math.round(flight.speed)} kt`;
    el.alt.textContent = `${Math.round(Math.max(0, flight.pos.y))} m`;
    el.power.textContent = `${Math.round(flight.throttle * 100)}%${flight.boosting ? ' ⚡' : ''}`;
    if (el.throttleFill) el.throttleFill.style.height = `${Math.max(8, flight.throttle * 92)}%`;
    if (el.throttle) el.throttle.setAttribute('aria-valuenow', String(Math.round(flight.throttle * 100)));
  }

  function hideIntro() {
    if (!el.intro) return;
    el.intro.style.opacity = '0';
    setTimeout(() => {
      el.intro.style.display = 'none';
    }, 500);
  }

  return { hint, toggle, update, setSound, hideIntro, get visible() { return visible; } };
}
