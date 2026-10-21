/**
 * The little bit of interface: the big button's picture and words, a happy
 * banner when you find treasure, the King's speech bubble, a hint now and
 * then, and the menu card (where you choose your colours and see your
 * treasures).
 */
const ACT_ICONS = {
  sit: '🪨',
  throne: '👑',
  ride: '🐬',
  leap: '⤴',
  stand: '🌊',
};

export function createHud() {
  const actBtn = document.querySelector('#actBtn');
  const actIcon = document.querySelector('#actIcon');
  const actText = document.querySelector('#actText');
  const twirlBtn = document.querySelector('#twirlBtn');
  const pop = document.querySelector('#pop');
  const hint = document.querySelector('#hint');
  const speech = document.querySelector('#speech');
  const intro = document.querySelector('#intro');
  let hintTimer = 0;
  let popTimer = 0;
  let speechTimer = 0;
  let lastAct = null;

  return {
    /** Show what the big button will do (or hide it). */
    action(a, riding) {
      const key = a ? a.kind + a.label : null;
      if (key !== lastAct) {
        lastAct = key;
        actBtn?.classList.toggle('on', !!a);
        if (a) {
          actIcon.textContent = ACT_ICONS[a.kind] ?? '✦';
          actText.textContent = a.label;
        }
      }
      twirlBtn?.classList.toggle('letgo', !!riding);
    },
    pop(text, sub = '') {
      if (!pop) return;
      pop.innerHTML = `<b>${text}</b>${sub ? `<small>${sub}</small>` : ''}`;
      pop.classList.remove('pop');
      void pop.offsetWidth;
      pop.classList.add('pop');
      popTimer = 3;
    },
    say(text, seconds = 4) {
      if (!speech) return;
      speech.textContent = text;
      speech.classList.add('on');
      speechTimer = seconds;
    },
    hint(text, seconds = 3.5) {
      if (!hint) return;
      hint.textContent = text;
      hint.style.opacity = '1';
      hintTimer = seconds;
    },
    showIntro() {
      if (!intro) return;
      intro.style.display = '';
      void intro.offsetWidth;
      intro.classList.remove('gone');
    },
    hideIntro() {
      intro?.classList.add('gone');
      setTimeout(() => {
        if (intro?.classList.contains('gone')) intro.style.display = 'none';
      }, 520);
    },
    setSound(on) {
      document.querySelector('#soundBtn')?.classList.toggle('off', !on);
    },
    setMusic(on) {
      document.querySelector('#musicBtn')?.classList.toggle('off', !on);
    },
    update(dt) {
      if (hintTimer > 0 && (hintTimer -= dt) <= 0 && hint) hint.style.opacity = '0';
      if (popTimer > 0 && (popTimer -= dt) <= 0) pop?.classList.remove('pop');
      if (speechTimer > 0 && (speechTimer -= dt) <= 0) speech?.classList.remove('on');
    },
  };
}
