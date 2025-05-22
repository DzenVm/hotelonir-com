'use client';

import Link from 'next/link';
import { FaDice } from 'react-icons/fa';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Logo + opis */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FaDice className="w-6 h-6 text-brand-red" />
            <span className="text-xl font-semibold">
              HotelsKasynohall
            
            </span>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            {footerDetails.subheading}
          </p>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Kontakt</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-sm text-gray-300 hover:text-white"
            >
              Email: {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-sm text-gray-300 hover:text-white mt-2"
            >
              Telefon: {footerDetails.telephone}
            </a>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm px-6">
        <p>
          &copy; {new Date().getFullYear()} {siteDetails.siteName}. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
