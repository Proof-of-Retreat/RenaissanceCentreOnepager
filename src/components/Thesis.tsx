const categories = [
  {
    title: "Software",
    description:
      "AI tools, mapping infrastructure, community platforms , built the way we believe software should be built: open, thoughtful, and not optimised for your attention.",
  },
  {
    title: "Writing",
    description:
      "Novels, comics, essays, research , written slowly, in public, shaped by the people reading along.",
  },
  {
    title: "Art & Film",
    description:
      "A documentary crew is capturing everything. The conversations, the breakthroughs, the dead ends, the shared meals where ideas change shape. You\u2019ll see it as it happens.",
  },
  {
    title: "Ideas",
    description:
      "Some of us are just reading, thinking, and writing about it. That\u2019s allowed here. The best things often start that way.",
  },
];

export default function Thesis() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-4">
          What We&rsquo;re Making
        </h2>
        <p className="text-center text-dark/60 text-lg mb-16">
          Real projects. Right now.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-cream-alt rounded-xl p-8 border border-dark/5"
            >
              <h3 className="font-heading text-xl mb-3">{cat.title}</h3>
              <p className="text-dark/70 leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
