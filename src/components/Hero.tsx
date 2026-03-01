const TELEGRAM_LINK = "https://t.me/+placeholder";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-cream/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="font-heading italic text-5xl md:text-7xl leading-tight mb-8">
          A New Institution for a World in Transition
        </h1>
        <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          You already know something is wrong. The best builders you know are
          stuck chasing funding, grinding through accelerators, or burning out
          in silence. What if we gave them the space to do their best work?
        </p>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold hover:bg-gold-hover text-dark font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Join Our Community
        </a>
      </div>
    </section>
  );
}
