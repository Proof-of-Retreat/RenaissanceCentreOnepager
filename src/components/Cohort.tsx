const members = [
  {
    name: "Connector & Educator",
    role: "Knowledge Layer",
    description: "Bridges communities, curates knowledge, and ensures insights flow across the network.",
  },
  {
    name: "Eric Miki",
    role: "Open-Source Mapping Dev",
    description: "Building Hypermaps, open-source spatial infrastructure for the decentralized web.",
  },
  {
    name: "Milos",
    role: "Creative Technologist",
    description: "Blends design and engineering to prototype tools at the intersection of culture and technology.",
  },
  {
    name: "Jimin Lee",
    role: "Pop-up City Researcher",
    description: "Studying coordination, governance, and community patterns in pop-up city environments.",
  },
  {
    name: "Aleksandar Abu Samra",
    role: "Community Architect",
    description: "Designs the social infrastructure and community systems that hold the network together.",
  },
  {
    name: "Booga",
    role: "Rapid Prototyper",
    description: "Turns ideas into working prototypes fast, shipping tools the community uses daily.",
  },
];

export default function Cohort() {
  return (
    <section className="bg-cream-alt py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-4">
          The Cohort
        </h2>
        <p className="text-center text-dark/60 mb-16 text-lg">
          The people building this future.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-cream rounded-xl p-8 border border-dark/5 text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-dark/20 bg-dark/5 mx-auto mb-4 flex items-center justify-center">
                <span className="text-dark/30 text-xs">Photo</span>
              </div>
              <h3 className="font-heading text-xl mb-1">{member.name}</h3>
              <p className="text-gold-hover font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-dark/70 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
