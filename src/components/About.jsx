import SmartImage from './SmartImage';
import SplitText from './SplitText';
import Reveal from './Reveal';
import Counter from './Counter';
import { HIGHLIGHTS, IMAGES, STATS } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__media" y={60}>
          <div className="about__main media">
            <SmartImage
              id={IMAGES.aboutMain}
              alt="Spacious premium gym floor with rows of barbells and racks"
              sizes="(max-width: 900px) 100vw, 50vw"
              label="The Floor"
            />
          </div>
          <div className="about__second media">
            <SmartImage
              id={IMAGES.aboutSecond}
              alt="Athlete training with focus in the gym"
              sizes="(max-width: 900px) 45vw, 22vw"
              label="Train"
            />
          </div>
          <div className="about__badge" aria-hidden="true">
            <span>EST.</span>
            <strong>2012</strong>
          </div>
        </Reveal>

        <div className="about__copy">
          <Reveal as="p" className="eyebrow">
            01 — About
          </Reveal>
          <SplitText
            id="about-title"
            className="display section-title"
            text="MORE THAN A GYM. A LIFESTYLE."
            highlight={['LIFESTYLE.']}
          />
          <Reveal as="p" className="lead" delay={0.15}>
            MYFITNESS GYM is a private athletic club for people who treat training as a craft.
            Every detail, from the calibrated iron on the floor to the coaches beside you, is
            designed to remove excuses and raise your standard.
          </Reveal>

          <ul className="highlights">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} className="highlight" delay={0.1 * i}>
                <span className="highlight__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} className="stat" delay={0.08 * i} y={30}>
              <dt className="stat__label">{stat.label}</dt>
              <dd className="display stat__value">
                <Counter to={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
