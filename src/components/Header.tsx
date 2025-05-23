'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaDice } from 'react-icons/fa';
import Container from './Container';

const navItems = [
  { text: 'Why Choose Us', url: '#benefits' },
  { text: 'FAQs', url: '#faq' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="uniq-fixed uniq-top-0 uniq-left-0 uniq-right-0 uniq-z-50 uniq-bg-white/90 uniq-backdrop-blur uniq-border-b uniq-border-gray-200">
      <Container className="!uniq-px-4">
        <nav className="uniq-flex uniq-justify-between uniq-items-center uniq-py-3 md:uniq-py-5">
          {/* Logo */}
          <Link href="/" className="uniq-flex uniq-items-center uniq-gap-2">
            <FaDice className="uniq-text-brand-red uniq-w-6 uniq-h-6" />
            <span className="uniq-font-bold uniq-text-xl uniq-tracking-tight uniq-text-gray-900">
              HotelOnir
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="uniq-hidden md:uniq-flex uniq-space-x-6">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="uniq-text-sm uniq-font-medium uniq-text-gray-700 uniq-hover:uniq-text-brand-red uniq-transition"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#search"
                className="uniq-text-sm uniq-bg-brand-red uniq-text-white uniq-px-5 uniq-py-2 uniq-rounded-full uniq-shadow uniq-hover:uniq-bg-red-600 uniq-transition"
              >
                Find Hotel
              </Link>
            </li>
          </ul>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:uniq-hidden uniq-text-brand-red uniq-focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <HiOutlineXMark className="uniq-w-6 uniq-h-6" />
            ) : (
              <HiBars3 className="uniq-w-6 uniq-h-6" />
            )}
            <span className="uniq-sr-only">Menu</span>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="uniq-transition uniq-duration-200 uniq-ease-out"
        enterFrom="uniq-opacity-0 uniq-scale-95"
        enterTo="uniq-opacity-100 uniq-scale-100"
        leave="uniq-transition uniq-duration-150 uniq-ease-in"
        leaveFrom="uniq-opacity-100 uniq-scale-100"
        leaveTo="uniq-opacity-0 uniq-scale-95"
      >
        <div id="mobile-menu" className="md:uniq-hidden uniq-bg-white uniq-border-t uniq-border-gray-200">
          <ul className="uniq-flex uniq-flex-col uniq-px-6 uniq-py-4 uniq-space-y-3">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="uniq-block uniq-text-sm uniq-text-gray-800 uniq-hover:uniq-text-brand-red"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#search"
                onClick={() => setIsOpen(false)}
                className="uniq-block uniq-text-center uniq-bg-brand-red uniq-text-white uniq-py-2 uniq-rounded-full uniq-font-medium"
              >
                Search Hotels
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
