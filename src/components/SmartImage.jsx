import { useEffect, useRef, useState } from 'react';
import { srcSetFor, unsplash } from '../data/content';

/**
 * Responsive, lazy-loaded Unsplash image with a graceful fallback.
 * - Builds a srcSet so phones download small files and desktops get sharp ones.
 * - Fades in once loaded (dark background shows while loading).
 * - If the image ever fails, a branded dark panel is rendered instead of a broken icon.
 * Place inside a `.media` wrapper (position: relative; overflow: hidden).
 */
export default function SmartImage({
  id,
  alt,
  sizes = '100vw',
  priority = false,
  label = 'MYFITNESS GYM',
  className = '',
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  // Handle images that finished loading before React attached the onLoad handler.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, []);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <span>{label}</span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      className={`smart-img ${loaded ? 'is-loaded' : ''} ${className}`}
      src={unsplash(id, 1200)}
      srcSet={srcSetFor(id)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  );
}
