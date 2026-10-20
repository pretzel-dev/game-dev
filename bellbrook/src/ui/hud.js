/**
 * The little bit of interface: the call banner at the top ("Fire at the
 * bakery!"), a big happy word when a fire goes out, a hint now and then,
 * an arrow at the edge of the screen pointing to the fire when it's out of
 * sight, and the title card.
 */
export function createHud() {
  const call = document.querySelector('#call');
  const callIcon = document.querySelector('#callIcon');
  const callText = document.querySelector('#callText');
  const pop = document.querySelector('#pop');
  const hint = document.querySelector('#hint');
  const arrow = document.querySelector('#arrow');
  const intro = document.querySelector('#intro');
  let hintTimer = 0;
  let popTimer = 0;

  return {
    call(kind, text) {
      if (!call) return;
      if (!text) {
        call.classList.remove('on');
        return;
      }
      callIcon.className = kind === 'cat' ? 'cat' : 'fire';
      callText.textContent = text;
      call.classList.remove('on');
      void call.offsetWidth;
      call.classList.add('on');
    },
    pop(text, sub = '') {
      if (!pop) return;
      pop.innerHTML = `<b>${text}</b>${sub ? `<small>${sub}</small>` : ''}`;
      pop.classList.remove('pop');
      void pop.offsetWidth;
      pop.classList.add('pop');
      popTimer = 2.4;
    },
    hint(text, seconds = 3) {
      if (!hint) return;
      hint.textContent = text;
      hint.style.opacity = '1';
      hintTimer = seconds;
    },
    /** Point at a spot off the edge of the screen (screen x, y), or hide. */
    arrow(show, x = 0, y = 0, angle = 0, kind = 'fire') {
      if (!arrow) return;
      arrow.style.opacity = show ? '1' : '0';
      if (show) {
        arrow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle}rad)`;
        arrow.dataset.kind = kind;
      }
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
    setButton(id, on) {
      document.querySelector(id)?.classList.toggle('on', !!on);
    },
    setSound(on) {
      document.querySelector('#soundBtn')?.classList.toggle('off', !on);
    },
    update(dt) {
      if (hintTimer > 0) {
        hintTimer -= dt;
        if (hintTimer <= 0 && hint) hint.style.opacity = '0';
      }
      if (popTimer > 0) {
        popTimer -= dt;
        if (popTimer <= 0) pop?.classList.remove('pop');
      }
    },
  };
}
