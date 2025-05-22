'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
          Pytania, które często słyszymy
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Jeśli coś Cię nurtuje przed rezerwacją — sprawdź poniżej. Zebraliśmy najczęstsze odpowiedzi w jednym miejscu.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={question}
                className="rounded-lg border border-gray-300 bg-gray-50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-gray-900 hover:bg-gray-100 transition"
                >
                  <span className="font-medium">{question}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">
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
