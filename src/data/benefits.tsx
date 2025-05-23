// src/data/benefits.ts
import {
  FiMapPin,
  FiSearch,
  FiCalendar,
  FiCheckCircle,
  FiPercent,
  FiThumbsUp,
  FiLock,
  FiCreditCard,
  FiShield,
} from 'react-icons/fi';
import { IBenefit } from '@/types';

export const benefits: IBenefit[] = [
  {
    title: 'Locate Gaming-Enabled Hotels Instantly',
    description:
      'Skip endless browsing—our search engine surfaces only properties with in-house gaming lounges for a clear, unified view.',
    bullets: [
      {
        title: 'Major Cities, One Platform',
        description:
          'Warsaw, Gdańsk, Katowice and beyond—no extra filters needed.',
        icon: <FiMapPin size={26} />,
      },
      {
        title: 'Smart Auto-Suggestions',
        description:
          'Type the first letters and get spot-on recommendations immediately.',
        icon: <FiSearch size={26} />,
      },
      {
        title: 'Flexible Date Selection',
        description:
          'Choose anything from a weekend getaway to an extended stay with ease.',
        icon: <FiCalendar size={26} />,
      },
    ],
    imageSrc: '/images/mockup-search.webp',
  },
  {
    title: 'Transparent Deals You Can Trust',
    description:
      'Every venue is verified and price/promotional details are always up to date.',
    bullets: [
      {
        title: 'Licensed Gaming Venues Only',
        description:
          'We partner exclusively with properties holding valid entertainment permits.',
        icon: <FiCheckCircle size={26} />,
      },
      {
        title: 'Exclusive Offers & Bonuses',
        description:
          'Welcome perks, complimentary tokens, and room rates lower than standard booking sites.',
        icon: <FiPercent size={26} />,
      },
      {
        title: 'Real Guest Feedback',
        description:
          'Ratings and reviews submitted by travelers who’ve actually stayed.',
        icon: <FiThumbsUp size={26} />,
      },
    ],
    imageSrc: '/images/mockup-compare.webp',
  },
  {
    title: 'Book with Complete Peace of Mind',
    description:
      'Industry-standard compliance and instant confirmation guarantee a secure reservation.',
    bullets: [
      {
        title: 'Bank-Grade Encryption',
        description:
          'All personal data is protected by secure HTTPS connections.',
        icon: <FiLock size={26} />,
      },
      {
        title: 'Trusted Payment Methods',
        description:
          'Visa, Mastercard, BLIK, Apple Pay—pick your preferred option.',
        icon: <FiCreditCard size={26} />,
      },
      {
        title: '24/7 Fraud Monitoring',
        description:
          'Automated systems detect and block suspicious activity around the clock.',
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: '/images/mockup-secure.webp',
  },
];
