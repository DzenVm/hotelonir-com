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
    <section id="search" className="mt-20 lg:mt-32 mb-20 lg:mb-32">
      <div className="mx-auto max-w-4xl rounded-xl bg-white/90 backdrop-blur p-8 shadow-lg border border-gray-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black">
          Reserve Your Perfect Stay in Poland
        </h2>
        <p className="mt-2 mb-8 text-center text-gray-700">
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
          className="grid gap-4 sm:grid-cols-3"
        >
          {/* City or Region */}
          <label className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-3 bg-white">
            <MapPin size={20} className="text-brand-red" />
            <input
              required
              type="text"
              placeholder="City or Region"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 outline-none text-black placeholder-gray-500"
            />
          </label>

          {/* Check-in Date */}
          <label className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-3 bg-white">
            <CalendarDays size={20} className="text-brand-red" />
            <input
              required
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="flex-1 outline-none text-black"
            />
          </label>

          {/* Check-out Date */}
          <label className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-3 bg-white">
            <CalendarDays size={20} className="text-brand-red" />
            <input
              required
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="flex-1 outline-none text-black"
            />
          </label>

          {/* Adults */}
          <label className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-3 bg-white">
            <Users size={20} className="text-brand-red" />
            <input
              required
              type="number"
              min={1}
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              placeholder="Adults"
              className="flex-1 outline-none text-black placeholder-gray-500"
            />
          </label>

          {/* Children */}
          <label className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-3 bg-white">
            <Baby size={20} className="text-brand-red" />
            <input
              type="number"
              min={0}
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
              placeholder="Children"
              className="flex-1 outline-none text-black placeholder-gray-500"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              rounded-lg bg-black px-6 py-3 font-semibold 
              text-white shadow hover:bg-gray-900 transition 
              w-full
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
