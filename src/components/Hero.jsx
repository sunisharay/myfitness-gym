import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SmartImage from './SmartImage';
import SplitText from './SplitText';
import Button from './Button';
import { IMAGES } from '../data/content';
import { handleAnchor } from '../utils/scroll';

/** Floating gold emblem: concentric plates around the brand "M". */
function GoldAccent({ reduce }) {
  return (
    <motion.div
      className="hero__accent"
      aria-hidden="true"
      animate={reduce ? undefined : { y: [0, -22, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 400 400" fill="none" stroke="#D6AE65">
        <polygon
          points="120,10 280,10 390,120 390,280 280,390 120,390 10,280 10,120"
          strokeWidth="1.4"
        />
        <g className="hero__accent-spin">
          <polygon
            points="135,40 265,40 360,135 360,265 265,360 135,360 40,265 40,135"
            strokeWidth="1"
            strokeDasharray="3 11"
          />
        </g>
        <circle cx="200" cy="200" r="118" strokeWidth="1" opacity="0.55" />
        <polyline
          points="130,262 130,150 200,222 270,150 270,262"
          strokeWidth="12"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
        />
        <line x1="130" y1="292" x2="270" y2="292" strokeWidth="4" />
        <circle cx="200" cy="108" r="5" fill="#D6AE65" stroke="none" />
      </svg>
    </motion.div>
  );
}

export default function Hero({ ready }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const fadeUp = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: ready || reduce ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="home" ref={ref} className="hero" aria-labelledby="hero-title">
      <motion.div className="hero__media media" style={reduce ? undefined : { y: mediaY }}>
        <SmartImage
          id={IMAGES.hero}
          alt="Athlete performing a heavy barbell lift inside a dark luxury gym"
          priority
          label="MYFITNESS GYM"
        />
      </motion.div>
      <div className="hero__overlay" aria-hidden="true" />
      <GoldAccent reduce={reduce} />

      <motion.div
        className="container hero__content"
        style={reduce ? undefined : { y: contentY, opacity: fade }}
      >
        <motion.p className="eyebrow" {...fadeUp(0.1)}>
          Elite Athletic Club
        </motion.p>

        <SplitText
          as="h1"
          id="hero-title"
          className="display hero__title"
          text="BUILD YOUR STRONGEST SELF."
          highlight={['STRONGEST', 'SELF.']}
          trigger={ready}
          delay={0.2}
          stagger={0.1}
        />

        <motion.p className="hero__tagline" {...fadeUp(0.9)}>
          Discipline. Strength. Transformation.
        </motion.p>

        <motion.div className="hero__ctas" {...fadeUp(1.1)}>
          <Button href="#membership">Explore Memberships</Button>
          <Button href="#about" variant="outline" icon={ChevronDown}>
            Discover More
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        className="hero__scroll"
        href="#about"
        aria-label="Scroll to the About section"
        onClick={(e) => handleAnchor(e, 'about')}
        {...fadeUp(1.5)}
      >
        <span className="hero__scroll-line" aria-hidden="true" />
        <span>Scroll</span>
      </motion.a>
    </section>
  );
}
