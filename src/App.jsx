import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Experience from './components/Experience';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('');

  // Lock scrolling while the preloader is on screen.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <AnimatePresence>
        {loading && <Preloader key="preloader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar ready={!loading} />

      <main id="main">
        <Hero ready={!loading} />
        <About />
        <Programs />
        <Experience />
        <Trainers />
        <Membership onSelectPlan={setSelectedPlan} />
        <Testimonials />
        <Gallery />
        <Contact plan={selectedPlan} />
      </main>

      <Footer />
    </>
  );
}
