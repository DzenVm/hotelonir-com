'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaDice } from 'react-icons/fa';
import Container from './Container';

const navItems = [
  { text: 'Dlaczego warto', url: '#benefits' },
  { text: 'Najczęstsze pytania', url: '#faq' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <Container className="!px-4">
        <nav className="flex justify-between items-center py-3 md:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <FaDice className="text-brand-red w-6 h-6" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              HotelsKasynohall
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-sm font-medium text-gray-700 hover:text-brand-red transition"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#search"
                className="text-sm bg-brand-red text-white px-5 py-2 rounded-full shadow hover:bg-red-600 transition"
              >
                Znajdź hotel
              </Link>
            </li>
          </ul>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden text-brand-red focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
            <span className="sr-only">Menu</span>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-gray-800 hover:text-brand-red"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#search"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-brand-red text-white py-2 rounded-full font-medium"
              >
                Szukaj hoteli
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
