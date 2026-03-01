const problems = [
  {
    title: "Builders Forced to Chase Revenue",
    description:
      "The most talented builders spend more time fundraising and chasing revenue than doing their best work.",
  },
  {
    title: "Building Without Signal",
    description:
      "Protocol developers build in isolation without knowing what real people actually want or need.",
  },
  {
    title: "Nothing Gets Recycled",
    description:
      "When startups fail, the talent, tools, and hard-won knowledge disappear. Nothing is recovered or reused.",
  },
  {
    title: "No Business Model for Connectors",
    description:
      "Educators, researchers, and community connectors create enormous value but have no sustainable way to fund their work.",
  },
];

export default function Problem() {
  return (
    <section className="bg-cream-alt py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-16">
          The Problem
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-cream rounded-xl p-8 border border-dark/5"
            >
              <h3 className="font-heading text-xl mb-3">{p.title}</h3>
              <p className="text-dark/70 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
