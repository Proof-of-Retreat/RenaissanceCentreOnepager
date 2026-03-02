const perks = [
  {
    icon: "\uD83D\uDCE1",
    title: "Follow the work as it happens",
    description:
      "Weekly updates, demos, and dispatches from inside the studio. Watch projects evolve from first idea to finished thing.",
  },
  {
    icon: "\uD83D\uDCAC",
    title: "Telegram + Scenius community access",
    description:
      "Talk to the people making it. Give feedback. Ask questions. Propose collabs. Our coordination happens in public and you\u2019re invited in.",
  },
  {
    icon: "\uD83D\uDD13",
    title: "Early access to everything we ship",
    description:
      "Software, writing, art: you see it before anyone else. Some of it will only ever exist for people inside.",
  },
  {
    icon: "\uD83C\uDFAC",
    title: "Be part of the film",
    description:
      "We\u2019re documenting this whole experiment. As a patron, you\u2019re part of the story.",
  },
  {
    icon: "\u2728",
    title: "The feeling of funding something real",
    description:
      "Not a startup chasing an exit. Not content optimised for engagement. Something made by people who believe the world deserves better things in it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream-alt py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-4">
          What You Get
        </h2>
        <p className="text-center text-dark/60 text-lg mb-16">
          You&rsquo;re not donating. You&rsquo;re getting a seat in the room.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk) => (
            <div key={perk.title} className="text-center">
              <div className="text-4xl mb-4">{perk.icon}</div>
              <h3 className="font-heading text-xl mb-3">{perk.title}</h3>
              <p className="text-dark/70 leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
