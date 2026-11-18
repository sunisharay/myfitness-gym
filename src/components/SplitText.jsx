import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from './Reveal';

/**
 * Staggered word-by-word headline reveal (each word rises out of a mask).
 *
 * - `highlight`: array of words (case-insensitive) rendered in gold.
 * - `trigger`: leave undefined to reveal on scroll; pass a boolean to control manually
 *   (used by the hero so it waits for the preloader to finish).
 */
export default function SplitText({
  text,
  as = 'h2',
  id,
  className = '',
  delay = 0,
  stagger = 0.08,
  highlight = [],
  trigger,
}) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  const isGold = (word) =>
    highlight.some((h) => h.toLowerCase() === word.toLowerCase());

  if (reduce) {
    const Plain = as;
    return (
      <Plain id={id} className={className}>
        {words.map((word, i) => (
          <span key={i} className={isGold(word) ? 'gold' : undefined}>
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Plain>
    );
  }

  const Tag = motion[as];
  const mode =
    trigger === undefined
      ? { whileInView: 'show', viewport: { once: true, margin: '-60px' } }
      : { animate: trigger ? 'show' : 'hidden' };

  return (
    <Tag
      id={id}
      className={className}
      aria-label={text}
      initial="hidden"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...mode}
    >
      {words.map((word, i) => (
        <span key={i} className="word-mask" aria-hidden="true">
          <motion.span
            className={`word ${isGold(word) ? 'gold' : ''}`}
            variants={{
              hidden: { y: '115%' },
              show: { y: '0%', transition: { duration: 0.95, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
