'use client';

import Link from 'next/link';
import { FaDice } from 'react-icons/fa';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
  return (
    <footer className="uniq-bg-neutral-900 uniq-text-white uniq-pt-12 uniq-pb-6">
      <div className="uniq-max-w-7xl uniq-w-full uniq-mx-auto uniq-px-6 uniq-grid uniq-grid-cols-1 md:uniq-grid-cols-2 uniq-gap-10">
        {/* Logo + description */}
        <div>
          <Link href="/" className="uniq-flex uniq-items-center uniq-gap-2">
            <FaDice className="uniq-w-6 uniq-h-6 uniq-text-brand-red" />
            <span className="uniq-text-xl uniq-font-semibold">
              {siteDetails.siteName}
            </span>
          </Link>
          <p className="uniq-mt-4 uniq-text-sm uniq-text-gray-400">
            {footerDetails.subheadingEnglish}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uniq-text-lg uniq-font-semibold uniq-mb-3">Contact</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="uniq-block uniq-text-sm uniq-text-gray-300 uniq-hover:uniq-text-white"
            >
              Email: {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="uniq-block uniq-text-sm uniq-text-gray-300 uniq-hover:uniq-text-white uniq-mt-2"
            >
              Phone: {footerDetails.telephone}
            </a>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="uniq-mt-10 uniq-text-center uniq-text-gray-500 uniq-text-sm uniq-px-6">
        <p>
          &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
