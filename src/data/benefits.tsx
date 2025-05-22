import {
  FiMapPin,
  FiSearch,
  FiCalendar,
  FiThumbsUp,
  FiPercent,
  FiCheckCircle,
  FiLock,
  FiCreditCard,
  FiShield,
} from 'react-icons/fi';

import { IBenefit } from '@/types';

export const benefits: IBenefit[] = [
  {
    title: 'Hotel z kasynem? Znajdziesz go w minutę',
    description:
      'Nie trać czasu na przeglądanie wielu stron. Nasza wyszukiwarka pokazuje tylko hotele z kasynami — w jednym, czytelnym widoku.',
    bullets: [
      {
        title: 'Największe miasta, jeden system',
        description: 'Warszawa, Gdańsk, Katowice i więcej – bez zbędnego filtrowania.',
        icon: <FiMapPin size={26} />,
      },
      {
        title: 'Podpowiedzi na start',
        description:
          'Wpisz pierwsze litery i od razu zobacz najtrafniejsze propozycje.',
        icon: <FiSearch size={26} />,
      },
      {
        title: 'Daty dopasowane do Ciebie',
        description: 'Prosty wybór zakresu – od weekendu po dłuższy pobyt.',
        icon: <FiCalendar size={26} />,
      },
    ],
    imageSrc: '/images/mockup-search.webp',
  },
  {
    title: 'Sprawdź oferty bez ściemy',
    description:
      'Każdy obiekt został zweryfikowany, a informacje o cenach i promocjach są zawsze aktualne.',
    bullets: [
      {
        title: 'Tylko licencjonowane hotele',
        description:
          'Współpracujemy wyłącznie z obiektami posiadającymi legalne kasyna.',
        icon: <FiCheckCircle size={26} />,
      },
      {
        title: 'Promocje i korzyści',
        description:
          'Bonusy powitalne, żetony w pakiecie, pokoje w cenach niższych niż na bookingach.',
        icon: <FiPercent size={26} />,
      },
      {
        title: 'Prawdziwe opinie graczy',
        description:
          'Oceny wystawione przez osoby, które rzeczywiście odwiedziły dane miejsce.',
        icon: <FiThumbsUp size={26} />,
      },
    ],
    imageSrc: '/images/mockup-compare.webp',
  },
  {
    title: 'Rezerwacja w 100% bezpieczna',
    description:
      'Gwarantujemy zgodność z normami branżowymi i szybkie potwierdzenie każdej rezerwacji.',
    bullets: [
      {
        title: 'Szyfrowanie klasy bankowej',
        description:
          'Twoje dane nie opuszczają bezpiecznego połączenia HTTPS.',
        icon: <FiLock size={26} />,
      },
      {
        title: 'Zaufane płatności',
        description:
          'Visa, Mastercard, BLIK, Apple Pay – wybierz preferowaną formę rozliczenia.',
        icon: <FiCreditCard size={26} />,
      },
      {
        title: 'Stały nadzór nad transakcjami',
        description:
          'Automatyczne wykrywanie prób oszustwa działa non stop.',
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: '/images/mockup-secure.webp',
  },
];
