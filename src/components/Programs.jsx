import { ArrowUpRight } from 'lucide-react';
import SmartImage from './SmartImage';
import SplitText from './SplitText';
import Reveal from './Reveal';
import { PROGRAMS } from '../data/content';
import { handleAnchor } from '../utils/scroll';

export default function Programs() {
  return (
    <section id="programs" className="section section--charcoal" aria-labelledby="programs-title">
      <div className="container">
        <header className="section-head">
          <div>
            <Reveal as="p" className="eyebrow">
              02 — Programs
            </Reveal>
            <SplitText
              id="programs-title"
              className="display section-title"
              text="TRAIN WITH PURPOSE."
              highlight={['PURPOSE.']}
            />
          </div>
          <Reveal as="p" className="lead" delay={0.1}>
            Six disciplines, one standard. Choose a path, or combine them under a coach who
            builds the program around you.
          </Reveal>
        </header>

        <ul className="programs">
          {PROGRAMS.map((program, i) => (
            <Reveal
              as="li"
              key={program.title}
              className="program"
              delay={(i % 3) * 0.12}
              y={60}
            >
              <article className="program__card">
                <div className="media program__media">
                  <SmartImage
                    id={program.image}
                    alt={`${program.title} at MYFITNESS GYM`}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    label={program.title}
                  />
                </div>
                <div className="program__shade" aria-hidden="true" />
                <div className="program__body">
                  <span className="program__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="display program__title">{program.title}</h3>
                  <p className="program__text">{program.text}</p>
                  <a
                    className="program__link"
                    href="#contact"
                    onClick={(e) => handleAnchor(e, 'contact')}
                  >
                    Enquire <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
