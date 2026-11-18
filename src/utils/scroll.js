const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Smoothly scroll to a section by id (instant when the user prefers reduced motion). */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
  try {
    window.history.replaceState(null, '', `#${id}`);
  } catch {
    /* history may be unavailable in sandboxed iframes — ignore */
  }
}

/**
 * onClick helper for in-page anchors. Runs an optional callback first
 * (e.g. close the mobile menu) and then scrolls once layout has settled.
 */
export function handleAnchor(event, id, after) {
  event.preventDefault();
  if (after) after();
  window.setTimeout(() => scrollToId(id), after ? 60 : 0);
}
