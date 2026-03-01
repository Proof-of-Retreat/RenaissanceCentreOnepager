const mainProjects = [
  {
    title: "Proof of Retreat",
    description: "A working pop-up city in Vietnam, already hosting builders and running programs.",
    image: "/images/ProofOfRetreat.jpg",
    link: "https://proofofretreat.me/",
  },
  {
    title: "Scenius",
    description: "A daily progress-sharing tool already in active use by the builder community.",
    image: "/images/Scenius.png",
    link: "https://scenius.work/",
  },
  {
    title: "Showtime",
    description: "A platform for builders to showcase their work and connect with supporters.",
    image: "/images/Showtime.png",
    link: "https://showtime.villedge.tech/",
  },
];

const bots = [
  {
    title: "Pomodoro",
    description: "Shared focus and productivity sessions, both in-person and online.",
    link: "https://t.me/PoR_pomodoro_bot",
  },
  {
    title: "ZuWell",
    description: "Collecting feedback on quality of life during popup cities.",
    link: "https://t.me/ZuWell_bot",
  },
  {
    title: "Transcript",
    description: "Community tool for transcribing in-person meetings.",
    link: "https://t.me/PoR_transcripts_bot",
  },
  {
    title: "Juli",
    description: "The onboarding agent and first interface with Proof of Retreat.",
    link: "https://t.me/PoR_Juli_bot",
  },
];

export default function WhatExists() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-4">
          What Already Exists
        </h2>
        <p className="text-center text-dark/60 mb-16 text-lg">
          We&rsquo;re not starting from zero. This is already happening.
        </p>

        {/* Main projects: 3 full-width tiles */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {mainProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream-alt rounded-xl overflow-hidden border border-dark/5 hover:border-gold transition-colors block"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2">{project.title}</h3>
                <p className="text-dark/70 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Telegram bots: 4 smaller tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {bots.map((bot) => (
            <a
              key={bot.title}
              href={bot.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream-alt rounded-xl border border-dark/5 hover:border-gold transition-colors block p-6 text-center"
            >
              <h3 className="font-heading text-lg mb-2 flex items-center justify-center gap-2">
                <img src="/images/Telegram-Logo.png" alt="Telegram" className="w-5 h-5" />
                {bot.title}
              </h3>
              <p className="text-dark/70 leading-relaxed text-xs">
                {bot.description}
              </p>
            </a>
          ))}
        </div>

        {/* Villedge Tech embed */}
        <div className="rounded-xl overflow-hidden border border-dark/5">
          <div className="bg-cream-alt px-6 py-3 border-b border-dark/5">
            <h3 className="font-heading text-lg">Villedge Tech</h3>
          </div>
          <iframe
            src="https://villedge.tech/"
            title="Villedge Tech"
            className="w-full h-[500px] bg-white"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
