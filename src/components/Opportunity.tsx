const TELEGRAM_LINK = "https://t.me/proofofretreat/283";

export default function Opportunity() {
  return (
    <section className="bg-cream-alt py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-dark/80 mb-12">
          <p>
            We believe the next interesting things, the software worth
            using, the stories worth reading, the ideas worth spreading,
            will be made by people who were free enough to make them right.
          </p>

          <p>We&rsquo;re trying to become those people.</p>

          <p>
            We&rsquo;re doing it on a beach in Vietnam, with a film crew, in
            public, with your help.
          </p>

          <p className="font-heading italic text-3xl md:text-4xl text-dark">
            Come watch.
          </p>
        </div>

        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold hover:bg-gold-hover text-dark font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Join the Studio
        </a>
      </div>
    </section>
  );
}
