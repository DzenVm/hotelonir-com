const CTA: React.FC = () => (
  <section id="cta" className="my-24">
    <div className="relative mx-auto max-w-4xl rounded-3xl bg-black text-white px-8 py-16 text-center shadow-xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Zarezerwuj hotel z kasynem — bez ryzyka
      </h2>

      <p className="mx-auto max-w-2xl text-gray-300 text-lg">
        Wybierz obiekt z legalną salą gier, sprawdź dostępność i zarezerwuj bez prowizji. Bezpiecznie, wygodnie, po polsku.
      </p>

      <a
        href="#search"
        className="inline-block mt-10 rounded-full bg-white px-8 py-3 font-semibold text-black shadow hover:bg-gray-100 transition"
      >
        Wyszukaj teraz
      </a>
    </div>
  </section>
);

export default CTA;
