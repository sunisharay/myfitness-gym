import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SmartImage from './SmartImage';
import SplitText from './SplitText';
import Reveal from './Reveal';
import Button from './Button';
import { IMAGES } from '../data/content';

export default function Experience() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="experience"
      ref={ref}
      className="experience"
      aria-labelledby="experience-title"
    >
      <motion.div className="experience__media media" style={reduce ? undefined : { y }}>
        <SmartImage
          id={IMAGES.experience}
          alt="Dramatically lit gym with barbells and plates in the shadows"
          label="Push Beyond"
        />
      </motion.div>
      <div className="experience__overlay" aria-hidden="true" />

      <div className="container experience__content">
        <Reveal as="p" className="eyebrow eyebrow--center">
          The Experience
        </Reveal>
        <SplitText
          id="experience-title"
          className="display experience__title"
          text="PUSH BEYOND LIMITS."
          highlight={['LIMITS.']}
        />
        <Reveal as="p" className="lead experience__text" delay={0.2}>
          Low light. Heavy iron. A room full of people who refuse to quit. This is where
          ordinary sessions turn into personal records.
        </Reveal>
        <Reveal delay={0.3}>
          <Button href="#membership">Start Today</Button>
        </Reveal>
      </div>
    </section>
  );
}
