/**
 * Photo mode: one button hides the interface, stops the clock for the
 * aeroplane and hands you an orbit around it. The island keeps living — the
 * gulls, the sea and the laundry all carry on — so a photograph still has
 * something moving in it.
 *
 * The shutter saves a PNG straight from the canvas, no server involved.
 */
export function createPhotoMode({ rig, hud, onChange } = {}) {
  const root = document.querySelector('#photo');
  const flash = document.querySelector('#flash');
  let active = false;
  let pending = false;

  function set(next, planePosition) {
    if (next === active) return active;
    active = next;
    document.body.classList.toggle('photo', active);
    root?.setAttribute('aria-hidden', String(!active));
    rig.setPhoto(active, planePosition);
    onChange?.(active);
    if (!active) hud?.hint('Back to flying', 1.4);
    return active;
  }

  const toggle = (planePosition) => set(!active, planePosition);

  /** Ask for a capture; it happens straight after the next render. */
  function capture() {
    pending = true;
  }

  /**
   * Must be called in the same frame as the render, before the browser
   * clears the drawing buffer.
   */
  function flush(renderer) {
    if (!pending) return;
    pending = false;
    try {
      renderer.domElement.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        link.href = url;
        link.download = `covewind-${stamp}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
      }, 'image/png');
    } catch {
      hud?.hint('This browser would not let me save the picture', 2.4);
      return;
    }
    if (flash) {
      flash.style.transition = 'none';
      flash.style.opacity = '0.85';
      requestAnimationFrame(() => {
        flash.style.transition = 'opacity .45s ease';
        flash.style.opacity = '0';
      });
    }
  }

  document.querySelector('#shutter')?.addEventListener('click', capture);
  document.querySelector('#photoExit')?.addEventListener('click', () => set(false));

  return {
    get active() {
      return active;
    },
    set,
    toggle,
    capture,
    flush,
  };
}
