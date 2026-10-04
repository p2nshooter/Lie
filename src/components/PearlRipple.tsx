'use client';

import { useEffect } from 'react';

/**
 * Pearl basins (docs/ADSENSE-BLUEPRINT.md §4): touching a menu item sends a
 * ring across the water from the exact point of contact. One delegated
 * listener, a span that removes itself, nothing when motion is reduced.
 */
export function PearlRipple() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onDown = (e: PointerEvent) => {
      const link = (e.target as HTMLElement | null)?.closest('.pearl-nav a') as HTMLElement | null;
      if (!link) return;
      const r = link.getBoundingClientRect();
      const ring = document.createElement('span');
      ring.className = 'pearl-ring';
      ring.setAttribute('aria-hidden', 'true');
      ring.style.setProperty('--rx', `${e.clientX - r.left}px`);
      ring.style.setProperty('--ry', `${e.clientY - r.top}px`);
      link.appendChild(ring);
      ring.addEventListener('animationend', () => ring.remove(), { once: true });
    };
    document.addEventListener('pointerdown', onDown, { passive: true });
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);
  return null;
}
