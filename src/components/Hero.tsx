'use client';

import { motion } from 'framer-motion';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => (
  <section
    id="hero"
    className="
      relative flex flex-col items-center justify-center
      pb-20 pt-36 md:pt-44 px-6 bg-neutral-100 text-gray-900
    "
  >
    {/* Background Grid */}
    <div
      className="
        absolute inset-0 -z-10
        bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),
                  linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
        bg-[size:44px_44px]
      "
    />

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        text-4xl md:text-6xl leading-tight font-extrabold
        text-center max-w-3xl
      "
    >
      {heroDetails.headingEnglish}
    </motion.h1>

    <p className="
      mt-4 text-lg md:text-xl text-center text-gray-700
      max-w-xl
    ">
      {heroDetails.subheadingEnglish}
    </p>

    <a
      href="#search"
      className="
        mt-10 rounded-full border border-gray-400 bg-white
        px-7 py-3 font-medium text-black shadow-sm
        hover:bg-gray-50 transition
      "
    >
      Search Available Hotels
    </a>
  </section>
);

export default Hero;
