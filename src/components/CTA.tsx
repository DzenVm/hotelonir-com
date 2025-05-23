const CTA: React.FC = () => (
  <section id="cta" className="uniq-my-24">
    <div className="uniq-relative uniq-mx-auto uniq-max-w-4xl uniq-rounded-3xl uniq-bg-gradient-135 uniq-text-white uniq-px-8 uniq-py-16 uniq-text-center uniq-shadow-pop">
      <h2 className="uniq-text-3xl sm:uniq-text-4xl md:uniq-text-5xl uniq-font-display uniq-mb-4 uniq-leading-snug">
        Reserve Your Stay at a Gaming-Fueled Boutique Hotel
      </h2>

      <p className="uniq-mx-auto uniq-max-w-2xl uniq-text-base uniq-text-gray-200">
        Discover venues with in-house gaming halls, check real-time availability, and book instantly—no hidden fees, just seamless service.
      </p>

      <a
        href="#search"
        className="
          uniq-inline-block uniq-mt-10 uniq-rounded-full uniq-bg-white 
          uniq-px-8 uniq-py-3 uniq-font-medium uniq-text-black uniq-shadow-soft-lg
          uniq-hover:uniq-bg-gray-100 uniq-transition
        "
      >
        Search Available Hotels
      </a>
    </div>
  </section>
);

export default CTA;
