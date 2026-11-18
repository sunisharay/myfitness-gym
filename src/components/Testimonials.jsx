import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SplitText from './SplitText';
import Reveal from './Reveal';
import { TESTIMONIALS } from '../data/content';

const total = TESTIMONIALS.length;

function Stars({ rating }) {
  return (
    <div className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          strokeWidth={1.6}
          className={i < rating ? 'star is-on' : 'star'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [[index, direction], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = (step) =>
    setPage(([current]) => [(current + step + total) % total, step]);
  const goTo = (target) =>
    setPage(([current]) => [target, target > current ? 1 : -1]);

  // Gentle autoplay — paused on hover/focus and disabled for reduced motion.
  useEffect(() => {
    if (paused || reduce) return undefined;
    const timer = window.setInterval(() => paginate(1), 7000);
    return () => window.clearInterval(timer);
  }, [paused, reduce, index]);

  const item = TESTIMONIALS[index];
  const shift = reduce ? 0 : 70;

  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-title">
      <div className="container testimonials">
        <div className="testimonials__head">
          <Reveal as="p" className="eyebrow">
            05 — Testimonials
          </Reveal>
          <SplitText
            id="testimonials-title"
            className="display section-title"
            text="VOICES OF THE CLUB."
            highlight={['CLUB.']}
          />

          <div className="slider-controls">
            <button
              type="button"
              className="icon-btn"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
            <span className="slider-count" aria-hidden="true">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div
          className="testimonials__stage"
          role="group"
          aria-roledescription="carousel"
          aria-label="Member testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.figure
              key={index}
              className="testimonial"
              custom={direction}
              variants={{
                enter: (d) => ({ opacity: 0, x: d >= 0 ? shift : -shift }),
                center: { opacity: 1, x: 0 },
                exit: (d) => ({ opacity: 0, x: d >= 0 ? -shift : shift }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduce ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              drag={reduce ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              style={{ touchAction: 'pan-y' }}
              onDragEnd={(_, { offset, velocity }) => {
                if (Math.abs(offset.x) > 80 || Math.abs(velocity.x) > 500) {
                  paginate(offset.x < 0 ? 1 : -1);
                }
              }}
              aria-live="polite"
            >
              <Quote className="testimonial__mark" size={44} strokeWidth={1.2} aria-hidden="true" />
              <Stars rating={item.rating} />
              <blockquote className="testimonial__quote">{item.quote}</blockquote>
              <figcaption className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">
                  {item.name[0]}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="dots" role="tablist" aria-label="Choose testimonial">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                className={`dot ${i === index ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
