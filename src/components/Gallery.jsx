import { motion, useReducedMotion } from 'framer-motion';
import SmartImage from './SmartImage';
import SplitText from './SplitText';
import Reveal, { EASE } from './Reveal';
import { GALLERY } from '../data/content';

function Tile({ item, index }) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      className={`tile tile--${index + 1}`}
      initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, delay: (index % 3) * 0.1, ease: EASE }}
    >
      <div className="media tile__media">
        <SmartImage
          id={item.id}
          alt={`${item.label} at MYFITNESS GYM`}
          sizes="(max-width: 900px) 50vw, 33vw"
          label={item.label}
        />
      </div>
      <figcaption className="tile__caption">
        <span>{String(index + 1).padStart(2, '0')}</span> {item.label}
      </figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section section--charcoal"
      aria-labelledby="gallery-title"
    >
      <div className="container">
        <header className="section-head">
          <div>
            <Reveal as="p" className="eyebrow">
              06 — Gallery
            </Reveal>
            <SplitText
              id="gallery-title"
              className="display section-title"
              text="INSIDE THE CLUB."
              highlight={['CLUB.']}
            />
          </div>
          <Reveal as="p" className="lead" delay={0.1}>
            Iron, light and intent. A look at the spaces and sessions that define MYFITNESS
            GYM.
          </Reveal>
        </header>

        <div className="gallery">
          {GALLERY.map((item, i) => (
            <Tile key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
