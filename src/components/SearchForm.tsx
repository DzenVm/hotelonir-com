'use client';

import { useState } from 'react';
import { MapPin, CalendarDays, Users, Baby } from 'lucide-react';

const SearchForm: React.FC = () => {
  const [city, setCity] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <section id="search" className="uniq-mt-20 lg:uniq-mt-32 uniq-mb-20 lg:uniq-mb-32">
      <div className="uniq-mx-auto uniq-max-w-4xl uniq-rounded-xl uniq-bg-white/90 uniq-backdrop-blur uniq-p-8 uniq-shadow-lg uniq-border uniq-border-gray-300">
        <h2 className="uniq-text-2xl sm:uniq-text-3xl uniq-font-bold uniq-text-center uniq-text-black">
          Reserve Your Perfect Stay in Poland
        </h2>
        <p className="uniq-mt-2 uniq-mb-8 uniq-text-center uniq-text-gray-700">
          Search accommodations with in-house gaming lounges—from Warsaw to Sopot. Compare rates, reviews, and availability all in one place.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const query = new URLSearchParams({
              city,
              dateFrom,
              dateTo,
              adults: adults.toString(),
              children: children.toString(),
            }).toString();
            window.location.href = `/results?${query}`;
          }}
          className="uniq-grid uniq-gap-4 sm:uniq-grid-cols-3"
        >
          {/* City or Region */}
          <label className="uniq-flex uniq-items-center uniq-gap-2 uniq-border uniq-border-gray-400 uniq-rounded-lg uniq-px-4 uniq-py-3 uniq-bg-white">
            <MapPin size={20} className="uniq-text-brand-red" />
            <input
              required
              type="text"
              placeholder="City or Region"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="uniq-flex-1 uniq-outline-none uniq-text-black uniq-placeholder-gray-500"
            />
          </label>

          {/* Check-in Date */}
          <label className="uniq-flex uniq-items-center uniq-gap-2 uniq-border uniq-border-gray-400 uniq-rounded-lg uniq-px-4 uniq-py-3 uniq-bg-white">
            <CalendarDays size={20} className="uniq-text-brand-red" />
            <input
              required
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="uniq-flex-1 uniq-outline-none uniq-text-black"
            />
          </label>

          {/* Check-out Date */}
          <label className="uniq-flex uniq-items-center uniq-gap-2 uniq-border uniq-border-gray-400 uniq-rounded-lg uniq-px-4 uniq-py-3 uniq-bg-white">
            <CalendarDays size={20} className="uniq-text-brand-red" />
            <input
              required
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="uniq-flex-1 uniq-outline-none uniq-text-black"
            />
          </label>

          {/* Adults */}
          <label className="uniq-flex uniq-items-center uniq-gap-2 uniq-border uniq-border-gray-400 uniq-rounded-lg uniq-px-4 uniq-py-3 uniq-bg-white">
            <Users size={20} className="uniq-text-brand-red" />
            <input
              required
              type="number"
              min={1}
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              placeholder="Adults"
              className="uniq-flex-1 uniq-outline-none uniq-text-black uniq-placeholder-gray-500"
            />
          </label>

          {/* Children */}
          <label className="uniq-flex uniq-items-center uniq-gap-2 uniq-border uniq-border-gray-400 uniq-rounded-lg uniq-px-4 uniq-py-3 uniq-bg-white">
            <Baby size={20} className="uniq-text-brand-red" />
            <input
              type="number"
              min={0}
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
              placeholder="Children"
              className="uniq-flex-1 uniq-outline-none uniq-text-black uniq-placeholder-gray-500"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              uniq-rounded-lg uniq-bg-black uniq-px-6 uniq-py-3 uniq-font-semibold 
              uniq-text-white uniq-shadow uniq-hover:uniq-bg-gray-900 uniq-transition 
              uniq-w-full
            "
          >
            Search Hotels
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
