const TELEGRAM_LINK = "https://t.me/proofofretreat/283";

export default function Opportunity() {
  return (
    <section className="bg-cream-alt py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading italic text-4xl md:text-5xl mb-8">
          The Opportunity
        </h2>

        <p className="text-lg md:text-xl text-dark/80 leading-relaxed mb-6">
          The bottleneck isn&rsquo;t technology. It&rsquo;s coordination.
          The builders exist. The ideas exist. What&rsquo;s missing is the
          structure to bring them together and the runway to let them focus.
        </p>

        <blockquote className="border-l-4 border-gold pl-6 italic text-lg text-dark/70 text-left max-w-2xl mx-auto mb-12">
          &ldquo;We are building a place for them to find each other. A place
          where the best builders in the world can think clearly, work
          together, and build what matters.&rdquo;
        </blockquote>

        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold hover:bg-gold-hover text-dark font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Join Us
        </a>
      </div>
    </section>
  );
}
