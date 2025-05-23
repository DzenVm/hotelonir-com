'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="uniq-py-24 uniq-bg-white uniq-border-t uniq-border-gray-200">
      <div className="uniq-mx-auto uniq-max-w-4xl uniq-px-6">
        <h2 className="uniq-text-3xl sm:uniq-text-4xl uniq-font-bold uniq-text-center uniq-text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="uniq-mt-2 uniq-text-center uniq-text-gray-600">
          Got questions before booking? Find concise answers to our most common inquiries below.
        </p>

        <div className="uniq-mt-10 uniq-space-y-4">
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={question}
                className="uniq-rounded-lg uniq-border uniq-border-gray-300 uniq-bg-gray-50 uniq-overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="
                    uniq-flex uniq-w-full uniq-items-center uniq-justify-between
                    uniq-px-5 uniq-py-4 uniq-text-left uniq-text-gray-900
                    uniq-hover:uniq-bg-gray-100 uniq-transition
                  "
                >
                  <span className="uniq-font-medium">{question}</span>
                  <ChevronDown
                    size={20}
                    className={`
                      uniq-transition-transform uniq-text-gray-500
                      ${isOpen ? 'uniq-rotate-180' : ''}
                    `}
                  />
                </button>

                {isOpen && (
                  <div className="uniq-px-5 uniq-pb-5 uniq-text-gray-700 uniq-text-sm uniq-leading-relaxed">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
