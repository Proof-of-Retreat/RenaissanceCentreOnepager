const TELEGRAM_LINK = "https://t.me/proofofretreat/283";

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
          We&rsquo;re building things the world needs.
          <br />
          Not because anyone paid us to.
        </h1>
        <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Renaissance Centre is a studio of artists, engineers, researchers, and
          writers working on what they actually believe in, and building
          it in public.
        </p>
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
