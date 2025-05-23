const CTA: React.FC = () => (
  <section id="cta" className="my-24">
    <div className="relative mx-auto max-w-4xl rounded-3xl bg-gradient-135 text-white px-8 py-16 text-center shadow-pop">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 leading-snug">
        Reserve Your Stay at a Gaming-Fueled Boutique Hotel
      </h2>

      <p className="mx-auto max-w-2xl text-base text-gray-200">
        Discover venues with in-house gaming halls, check real-time availability, and book instantly—no hidden fees, just seamless service.
      </p>

      <a
        href="#search"
        className="
          inline-block mt-10 rounded-full bg-white 
          px-8 py-3 font-medium text-black shadow-soft-lg
          hover:bg-gray-100 transition
        "
      >
        Search Available Hotels
      </a>
    </div>
  </section>
);

export default CTA;
