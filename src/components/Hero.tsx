'use client';

import { motion } from 'framer-motion';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => (
  <section
    id="hero"
    className="
      uniq-relative uniq-flex uniq-flex-col uniq-items-center uniq-justify-center
      uniq-pb-20 uniq-pt-36 md:uniq-pt-44 uniq-px-6 uniq-bg-neutral-100 uniq-text-gray-900
    "
  >
    {/* Background Grid */}
    <div
      className="
        uniq-absolute uniq-inset-0 uniq--z-10
        uniq-bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),
                  linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
        uniq-bg-[size:44px_44px]
      "
    />

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        uniq-text-4xl md:uniq-text-6xl uniq-leading-tight uniq-font-extrabold
        uniq-text-center uniq-max-w-3xl
      "
    >
      {heroDetails.headingEnglish}
    </motion.h1>

    <p className="
      uniq-mt-4 uniq-text-lg md:uniq-text-xl uniq-text-center uniq-text-gray-700
      uniq-max-w-xl
    ">
      {heroDetails.subheadingEnglish}
    </p>

    <a
      href="#search"
      className="
        uniq-mt-10 uniq-rounded-full uniq-border uniq-border-gray-400 uniq-bg-white
        uniq-px-7 uniq-py-3 uniq-font-medium uniq-text-black uniq-shadow-sm
        uniq-hover:uniq-bg-gray-50 uniq-transition
      "
    >
      Search Available Hotels
    </a>
  </section>
);

export default Hero;
