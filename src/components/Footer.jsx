import { useState } from 'react';
import { ArrowUp, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { NAV_LINKS, SITE } from '../data/content';
import { handleAnchor } from '../utils/scroll';

const SOCIALS = [
  { label: 'Instagram', icon: Instagram, href: SITE.social.instagram },
  { label: 'Facebook', icon: Facebook, href: SITE.social.facebook },
  { label: 'YouTube', icon: Youtube, href: SITE.social.youtube },
  { label: 'X (Twitter)', icon: Twitter, href: SITE.social.twitter },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    /* INTEGRATION REQUIRED: send `email` to your newsletter provider
       (Mailchimp, ConvertKit, Brevo…). Currently UI only. */
    setSent(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" aria-label="MYFITNESS GYM — back to top" onClick={(e) => handleAnchor(e, 'home')}>
              <Logo height={52} />
            </a>
            <p>
              A private athletic club for people who train with purpose. Discipline. Strength.
              Transformation.
            </p>
            <ul className="socials">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`MYFITNESS GYM on ${label}`}
                  >
                    <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <h2 className="footer__heading">Explore</h2>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => handleAnchor(e, link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__news">
            <h2 className="footer__heading">Newsletter</h2>
            <p>Training notes, class updates and member offers. No spam.</p>
            <form className="newsletter" onSubmit={subscribe}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSent(false);
                }}
              />
              <Button type="submit" variant="gold">
                Subscribe
              </Button>
            </form>
            {sent && (
              <p className="form__status" role="status">
                Demo only — no email was stored. Connect a newsletter service to go live.
              </p>
            )}
            {SITE.showPlaceholderNotes && !sent && (
              <p className="note">* Integration required: newsletter form is UI only.</p>
            )}
          </div>
        </div>

        <p className="footer__giant" aria-hidden="true">
          MYFITNESS
        </p>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} MYFITNESS GYM. All rights reserved.</p>
          <a
            className="to-top"
            href="#home"
            onClick={(e) => handleAnchor(e, 'home')}
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
