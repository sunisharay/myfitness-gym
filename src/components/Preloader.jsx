import { useEffect, useState } from 'react';
import { animate, motion, useReducedMotion } from 'framer-motion';
import Logo from './Logo';

/** Full-screen intro: logo, gold progress line, then the curtain lifts away. */
export default function Preloader({ onDone }) {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: reduce ? 0.6 : 2.2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => window.setTimeout(onDone, reduce ? 100 : 350),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <motion.div
      className="preloader"
      role="status"
      aria-live="polite"
      aria-label="Loading MYFITNESS GYM"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: reduce ? 0.2 : 0.95, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader__inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo height={64} className="preloader__logo" />
        </motion.div>

        <div className="preloader__bar" aria-hidden="true">
          <span
            className="preloader__fill"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>

        <div className="preloader__meta" aria-hidden="true">
          <span>Discipline · Strength · Transformation</span>
          <span className="preloader__count">{String(progress).padStart(3, '0')}</span>
        </div>
      </div>
    </motion.div>
  );
}
