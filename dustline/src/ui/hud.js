/**
 * The little bit of interface there is: a word when you pull something off,
 * an occasional note when you find somewhere, the title card, and a tiny
 * speedometer that fades when you stop touching anything.
 */
export function createHud() {
  const trick = document.querySelector('#trick');
  const hint = document.querySelector('#hint');
  const speed = document.querySelector('#speed');
  const intro = document.querySelector('#intro');
  let hintTimer = 0;
  let trickTimer = 0;
  let hidden = false;

  return {
    trick(text, sub = '') {
      if (!trick) return;
      trick.innerHTML = `<b>${text}</b>${sub ? `<small>${sub}</small>` : ''}`;
      trick.classList.remove('pop');
      void trick.offsetWidth;
      trick.classList.add('pop');
      trickTimer = 1.6;
    },
    hint(text, seconds = 2.5) {
      if (!hint) return;
      hint.textContent = text;
      hint.style.opacity = '1';
      hintTimer = seconds;
    },
    hideIntro() {
      intro?.classList.add('gone');
      setTimeout(() => intro && (intro.style.display = 'none'), 600);
    },
    toggle() {
      hidden = !hidden;
      document.body.classList.toggle('nohud', hidden);
      return !hidden;
    },
    setSound(on) {
      document.querySelector('#soundBtn')?.classList.toggle('off', !on);
    },
    update(dt, car) {
      if (hintTimer > 0) {
        hintTimer -= dt;
        if (hintTimer <= 0 && hint) hint.style.opacity = '0';
      }
      if (trickTimer > 0) {
        trickTimer -= dt;
        if (trickTimer <= 0) trick?.classList.remove('pop');
      }
      if (speed) speed.textContent = `${Math.round(Math.abs(car.forwardSpeed) * 3.6)}`;
    },
  };
}
