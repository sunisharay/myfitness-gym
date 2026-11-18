import { useEffect, useState } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import SplitText from './SplitText';
import Reveal from './Reveal';
import Button from './Button';
import { PLANS, SITE } from '../data/content';

const emptyForm = { name: '', email: '', phone: '', plan: '', message: '' };

export default function Contact({ plan }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // 'idle' | 'demo'

  // When a visitor clicks "Join Now" on a plan, preselect it here.
  useEffect(() => {
    if (plan) setForm((f) => ({ ...f, plan }));
  }, [plan]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    /* ------------------------------------------------------------------
       INTEGRATION REQUIRED
       This site has no backend. Replace this block with a call to your
       form service (Formspree, EmailJS, Netlify Forms, your own API…).
       The collected values are in `form`. See README → "Connecting the forms".
       ------------------------------------------------------------------ */
    setStatus('demo');
  };

  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappMessage,
  )}`;

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-head">
          <div>
            <Reveal as="p" className="eyebrow">
              07 — Contact
            </Reveal>
            <SplitText
              id="contact-title"
              className="display section-title"
              text="BEGIN YOUR TRANSFORMATION."
              highlight={['TRANSFORMATION.']}
            />
          </div>
          <Reveal as="p" className="lead" delay={0.1}>
            Book a tour, ask about memberships or speak to a coach. We reply within one
            working day.
          </Reveal>
        </header>

        <div className="contact">
          <Reveal className="contact__info" y={50}>
            <ul className="info-list">
              <li>
                <MapPin size={20} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3>Location</h3>
                  <p>
                    {SITE.address[0]}
                    <br />
                    {SITE.address[1]}
                  </p>
                </div>
              </li>
              <li>
                <Clock size={20} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3>Business hours</h3>
                  <table className="hours">
                    <tbody>
                      {SITE.hours.map((row) => (
                        <tr key={row.days}>
                          <th scope="row">{row.days}</th>
                          <td>{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li>
                <Phone size={20} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a>
                  </p>
                </div>
              </li>
              <li>
                <Mail size={20} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </p>
                </div>
              </li>
            </ul>

            <Button href={whatsappHref} variant="outline" icon={MessageCircle}>
              Chat on WhatsApp
            </Button>
            {SITE.showPlaceholderNotes && (
              <p className="note">
                * Placeholder number. Set <code>whatsappNumber</code> in{' '}
                <code>src/data/content.js</code>.
              </p>
            )}

            <div className="map">
              {SITE.mapEmbedUrl ? (
                <iframe
                  title="MYFITNESS GYM location map"
                  src={SITE.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="map__placeholder">
                  <MapPin size={28} strokeWidth={1.4} aria-hidden="true" />
                  <p>Google Maps embed placeholder</p>
                  <small>
                    Paste your embed URL into <code>mapEmbedUrl</code> in{' '}
                    <code>src/data/content.js</code>.
                  </small>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal className="contact__formwrap" delay={0.1} y={50}>
            <form className="form" onSubmit={handleSubmit} aria-labelledby="form-title">
              <h3 id="form-title" className="display form__title">
                Send us a message
              </h3>

              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+00 000 000 0000"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="plan">I am interested in</label>
                <select id="plan" name="plan" value={form.plan} onChange={update('plan')}>
                  <option value="">General enquiry</option>
                  {PLANS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} membership
                    </option>
                  ))}
                  <option value="Personal training">Personal training</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us about your goals…"
                />
              </div>

              <Button type="submit" icon={Send}>
                Send Message
              </Button>

              {status === 'demo' && (
                <p className="form__status" role="status">
                  Demo only — nothing was sent. Connect a form service to receive messages (see
                  README).
                </p>
              )}
              {SITE.showPlaceholderNotes && status !== 'demo' && (
                <p className="note">
                  * Backend integration required: this form does not send messages yet.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
