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
    title: 'Szybka rezerwacja hoteli z kasynem',
    description:
      'HotelsKasynoHall.top umożliwia błyskawiczne znalezienie luksusowych hoteli z legalnymi kasynami w największych polskich miastach.',
    bullets: [
      {
        title: 'Ogólnopolska baza lokalizacji',
        description: 'Warszawa, Kraków, Gdańsk, Wrocław i inne – wszystkie dostępne w jednym miejscu.',
        icon: <FiMapPin size={26} />,
      },
      {
        title: 'Wyszukiwanie intuicyjne',
        description:
          'System podpowiada popularne destynacje już po kilku znakach.',
        icon: <FiSearch size={26} />,
      },
      {
        title: 'Elastyczne daty pobytu',
        description: 'Szybkie ustawienie terminu dzięki inteligentnemu wyborowi dat.',
        icon: <FiCalendar size={26} />,
      },
    ],
    imageSrc: '/images/mockup-search.webp',
  },
  {
    title: 'Porównuj i wybieraj najlepsze oferty',
    description:
      'Zobacz aktualne ceny, dostępność pokoi i dodatkowe bonusy kasynowe — wszystko w jednym interfejsie.',
    bullets: [
      {
        title: 'Tylko sprawdzone obiekty',
        description:
          'Wszystkie hotele przeszły weryfikację i posiadają licencjonowane kasyna.',
        icon: <FiCheckCircle size={26} />,
      },
      {
        title: 'Oferty specjalne',
        description:
          'Zniżki dla nowych użytkowników, darmowe żetony i pakiety VIP.',
        icon: <FiPercent size={26} />,
      },
      {
        title: 'Autentyczne recenzje graczy',
        description:
          'Opinie zweryfikowanych gości z doświadczeniem w obiektach kasynowych.',
        icon: <FiThumbsUp size={26} />,
      },
    ],
    imageSrc: '/images/mockup-compare.webp',
  },
  {
    title: 'Zarezerwuj bezpiecznie i bez prowizji',
    description:
      'Gwarantujemy najwyższy poziom zabezpieczeń oraz błyskawiczne potwierdzenia rezerwacji.',
    bullets: [
      {
        title: 'Szyfrowane połączenia SSL',
        description:
          'Twoje dane są chronione na każdym etapie – od wyszukiwania po płatność.',
        icon: <FiLock size={26} />,
      },
      {
        title: 'Bezpieczne formy płatności',
        description:
          'Karta, BLIK, Apple Pay – płatności przetwarzane zgodnie z normami PCI.',
        icon: <FiCreditCard size={26} />,
      },
      {
        title: 'Całodobowy monitoring',
        description:
          'System analizuje transakcje i natychmiast blokuje podejrzane działania.',
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: '/images/mockup-secure.webp',
  },
];
