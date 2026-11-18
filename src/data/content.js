/* ==========================================================================
   MYFITNESS GYM — central content file
   Everything you are likely to edit (prices, contact details, copy, photos)
   lives here. Items marked PLACEHOLDER must be replaced before launch.
   ========================================================================== */

import {
  Dumbbell,
  TrendingUp,
  UserCheck,
} from 'lucide-react';

/* ---------- Site-wide settings ---------- */
export const SITE = {
  name: 'MYFITNESS GYM',

  // PLACEHOLDER — digits only, with country code, no "+" or spaces (e.g. 919876543210).
  whatsappNumber: '910000000000',
  whatsappMessage: 'Hello MYFITNESS GYM, I would like to know more about memberships.',

  // PLACEHOLDER contact details
  phone: '+00 000 000 0000',
  email: 'hello@myfitnessgym.example',
  address: ['Your Street Address', 'Your City, Postal Code'],
  hours: [
    { days: 'Monday – Friday', time: '05:00 – 23:00' },
    { days: 'Saturday', time: '06:00 – 21:00' },
    { days: 'Sunday', time: '07:00 – 20:00' },
  ],

  // Paste the "src" URL from Google Maps → Share → Embed a map.
  // While empty, a clearly labelled placeholder panel is shown instead.
  mapEmbedUrl: '',

  // PLACEHOLDER social profile URLs
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
    twitter: 'https://twitter.com/',
  },

  // Set to false before launch to hide the "placeholder / integration required" notes.
  showPlaceholderNotes: true,

  // Currency symbol used by the membership cards.
  currency: '₹',
};

/* ---------- Navigation ---------- */
export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'trainers', label: 'Trainers' },
  { id: 'membership', label: 'Membership' },
  { id: 'contact', label: 'Contact' },
];

/* ---------- Images ----------
   Unsplash photo IDs. URLs are built with `unsplash()` below.
   If you want to swap a photo, replace just the ID (the part after "photo-").
   Any image that fails to load automatically falls back to a branded dark panel. */
export const unsplash = (id, width = 1200, quality = 72) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;

export const srcSetFor = (id, widths = [480, 800, 1200, 1800, 2400]) =>
  widths.map((w) => `${unsplash(id, w)} ${w}w`).join(', ');

export const IMAGES = {
  hero: '1517836357463-d25dfeac3438',
  aboutMain: '1593079831268-3381b0db4a77',
  aboutSecond: '1581009146145-b5ef050c2e1e',
  experience: '1549060279-7e168fcee0c2',
};

/* ---------- About ---------- */
export const HIGHLIGHTS = [
  {
    icon: UserCheck,
    title: 'Expert Coaching',
    text: 'Certified coaches who program, correct and push every rep with precision.',
  },
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    text: 'Competition-grade racks, plates and machines, maintained to the last bolt.',
  },
  {
    icon: TrendingUp,
    title: 'Personal Transformation',
    text: 'Measured progress, honest feedback and a plan built around your goals.',
  },
];

// PLACEHOLDER numbers — replace with your real figures.
export const STATS = [
  { value: 2500, suffix: '+', label: 'Active members' },
  { value: 40, suffix: '+', label: 'Certified coaches' },
  { value: 120, suffix: '+', label: 'Weekly sessions' },
  { value: 12, suffix: '', label: 'Years of excellence' },
];

/* ---------- Programs ---------- */
export const PROGRAMS = [
  {
    title: 'Strength Training',
    text: 'Barbell fundamentals and progressive overload for raw, lasting power.',
    image: '1534438327276-14e5300c3a48',
  },
  {
    title: 'Personal Training',
    text: 'One-to-one coaching engineered around your body, schedule and goals.',
    image: '1571019613454-1cb2f99b2d8b',
  },
  {
    title: 'HIIT & Conditioning',
    text: 'High-intensity intervals that build engine, grit and fast fat loss.',
    image: '1599058917212-d750089bc07e',
  },
  {
    title: 'Cardio Training',
    text: 'Elite cardio floor with guided zones for endurance and heart health.',
    image: '1507398941214-572c25f4b1dc',
  },
  {
    title: 'Functional Fitness',
    text: 'Movement-first training for mobility, balance and everyday strength.',
    image: '1518611012118-696072aa579a',
  },
  {
    title: 'Weight Training',
    text: 'Free weights and plate-loaded stations for focused muscle building.',
    image: '1546483875-ad9014c88eba',
  },
];

/* ---------- Trainers ----------
   PLACEHOLDER names, bios and photos — replace with your real coaching team. */
export const TRAINERS = [
  {
    name: 'Arjun Mehra',
    role: 'Head Coach — Strength & Power',
    years: 12,
    note: 'Former national-level powerlifter. Specialist in barbell technique.',
    image: '1567013127542-490d757e51fc',
  },
  {
    name: 'Sofia Laurent',
    role: 'Performance & Mobility',
    years: 9,
    note: 'Movement screening, injury prevention and athletic longevity.',
    image: '1571019614242-c5c5dee9f50b',
  },
  {
    name: 'Marcus Cole',
    role: 'HIIT & Conditioning',
    years: 10,
    note: 'Builds engine and discipline through relentless, smart intervals.',
    image: '1594737625785-a6cbdabd333c',
  },
  {
    name: 'Priya Nair',
    role: 'Personal Training & Nutrition',
    years: 8,
    note: 'Body-composition programs with sustainable nutrition coaching.',
    image: '1548690312-e3b507d8c110',
  },
];

/* ---------- Membership ----------
   PLACEHOLDER PRICING — edit `price` and `features` freely.
   Set `featured: true` on the plan you want highlighted. */
export const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 1999,
    period: '/ month',
    blurb: 'Full access to the training floor.',
    features: [
      'Gym floor access, 6am – 10pm',
      'Cardio and weight zones',
      'Locker and shower facilities',
      'Introductory orientation session',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 3499,
    period: '/ month',
    blurb: 'Coaching and classes for serious progress.',
    featured: true,
    features: [
      '24/7 club access',
      'Unlimited HIIT and functional classes',
      'Monthly body-composition review',
      'Personalised training program',
      'Guest pass, 2 per month',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 5999,
    period: '/ month',
    blurb: 'The complete, fully coached experience.',
    features: [
      'Everything in Pro',
      '4 personal training sessions monthly',
      'Nutrition and recovery planning',
      'Priority booking and private lockers',
      'Towel service and recovery lounge',
    ],
  },
];

/* ---------- Testimonials ---------- (PLACEHOLDER quotes — replace with real members) */
export const TESTIMONIALS = [
  {
    quote:
      'The standard here is on another level. Coaching is precise, the floor is immaculate, and I have never been this strong.',
    name: 'Rohan K.',
    role: 'Member for 3 years',
    rating: 5,
  },
  {
    quote:
      'I joined for a six-week goal and stayed for the culture. Everyone trains with purpose, and it rubs off on you.',
    name: 'Ananya S.',
    role: 'Pro member',
    rating: 5,
  },
  {
    quote:
      'My trainer rebuilt my technique from the ground up. Pain-free lifts and a new personal best every month.',
    name: 'Daniel R.',
    role: 'Elite member',
    rating: 5,
  },
  {
    quote:
      'Premium without the pretence. Great equipment, great people, and the classes genuinely push me past my limits.',
    name: 'Meera T.',
    role: 'Member for 1 year',
    rating: 4,
  },
];

/* ---------- Gallery ---------- */
export const GALLERY = [
  { id: '1540497077202-7c8a3999166f', label: 'Strength floor' },
  { id: '1526506118085-60ce8714f8c5', label: 'Free weights' },
  { id: '1558611848-73f7eb4001a1', label: 'Back day' },
  { id: '1605296867304-46d5465a13f1', label: 'Equipment hall' },
  { id: '1576678927484-cc907957088c', label: 'Coached session' },
  { id: '1554284126-aa88f22d8b74', label: 'Training zone' },
  { id: '1550345332-09e3ac987658', label: 'Plate room' },
];
