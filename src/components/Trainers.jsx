import SmartImage from './SmartImage';
import SplitText from './SplitText';
import Reveal from './Reveal';
import { TRAINERS } from '../data/content';

export default function Trainers() {
  return (
    <section id="trainers" className="section" aria-labelledby="trainers-title">
      <div className="container">
        <header className="section-head">
          <div>
            <Reveal as="p" className="eyebrow">
              03 — Trainers
            </Reveal>
            <SplitText
              id="trainers-title"
              className="display section-title"
              text="COACHES WHO LIFT THE STANDARD."
              highlight={['STANDARD.']}
            />
          </div>
          <Reveal as="p" className="lead" delay={0.1}>
            Certified, experienced and relentlessly invested in your progress. Meet the team
            behind every personal best.
          </Reveal>
        </header>

        <ul className="trainers">
          {TRAINERS.map((trainer, i) => (
            <Reveal as="li" key={trainer.name} delay={i * 0.1} y={50}>
              <article className="trainer">
                <div className="trainer__photo media">
                  <SmartImage
                    id={trainer.image}
                    alt={`${trainer.name}, ${trainer.role}`}
                    sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    label={trainer.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  />
                  <span className="trainer__years">
                    <strong>{trainer.years}</strong> yrs
                  </span>
                </div>
                <div className="trainer__info">
                  <h3 className="display trainer__name">{trainer.name}</h3>
                  <p className="trainer__role">{trainer.role}</p>
                  <p className="trainer__note">{trainer.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
