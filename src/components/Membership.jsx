import { Check } from 'lucide-react';
import SplitText from './SplitText';
import Reveal from './Reveal';
import Button from './Button';
import { PLANS, SITE } from '../data/content';

export default function Membership({ onSelectPlan }) {
  return (
    <section
      id="membership"
      className="section section--charcoal"
      aria-labelledby="membership-title"
    >
      <div className="container">
        <header className="section-head section-head--center">
          <Reveal as="p" className="eyebrow eyebrow--center">
            04 — Membership
          </Reveal>
          <SplitText
            id="membership-title"
            className="display section-title"
            text="CHOOSE YOUR LEVEL."
            highlight={['LEVEL.']}
          />
          <Reveal as="p" className="lead" delay={0.1}>
            No joining theatre. Pick the plan that matches your ambition and start training
            this week.
          </Reveal>
        </header>

        <ul className="plans">
          {PLANS.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.id}
              delay={i * 0.12}
              y={60}
              className={`plan ${plan.featured ? 'plan--featured' : ''}`}
            >
              {plan.featured && <span className="plan__badge">Most popular</span>}
              <h3 className="display plan__name">{plan.name}</h3>
              <p className="plan__blurb">{plan.blurb}</p>

              <p className="plan__price">
                <span className="plan__currency">{SITE.currency}</span>
                <span className="display plan__amount">{plan.price.toLocaleString('en-US')}</span>
                <span className="plan__period">{plan.period}</span>
              </p>

              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} strokeWidth={2.4} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.featured ? 'dark' : 'outline'}
                onClick={() => onSelectPlan(plan.name)}
                aria-label={`Join now — ${plan.name} plan`}
              >
                Join Now
              </Button>
            </Reveal>
          ))}
        </ul>

        {SITE.showPlaceholderNotes && (
          <p className="note">
            * Placeholder pricing. Edit prices and benefits in <code>src/data/content.js</code>{' '}
            (<code>PLANS</code>).
          </p>
        )}
      </div>
    </section>
  );
}
