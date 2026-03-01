const projects = [
  {
    name: "Cartographers",
    description: "Scouting the countries of tomorrow. A guide for investors seeking opportunities in emerging nation-building projects like charter cities.",
    link: "https://cartographers.world/",
    image: "/images/cartographers.png",
  },
  {
    name: "Thou Art Popup City Research",
    description: "Studying temporary, intentional gatherings that accelerate collaboration on frontier tech, science, and coordination systems.",
    link: "https://thouartofficial.com/research/popupcities",
    image: "/images/ThouArt.jpg",
  },
  {
    name: "H1v3",
    description: "A ticket-based runtime where AI agents collaborate as a team. Agents delegate, specialize, and solve problems together through structured work units.",
    link: "https://github.com/cxrtisxl/h1v3",
    image: "/images/h1v3.jpg",
  },
  {
    name: "Jackie Chain",
    description: "An animated series where Jackie Chain and his team of allies set out on a journey to find Blockfather, the mastermind behind the biggest crypto scams of the century.",
    link: "https://jackiechain.world/",
    image: "/images/jackiechain.jpg",
  },
  {
    name: "Hypermaps",
    description: "The TCP/IP for places. A global point-of-interest data commons, shifting from proprietary data hoarding to open, shared geospatial information.",
    link: "https://hypermaps.org/",
    image: "/images/hypermaps.png",
  },
  {
    name: "Innermost Life",
    description: "A scroll-driven cinematic narrative experience, combining interactive storytelling with immersive visuals.",
    link: "https://innermost-life.vercel.app/",
    image: "/images/InnermostLife.png",
  },
];

export default function Projects() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-4">
          The Projects
        </h2>
        <p className="text-center text-dark/60 mb-16 text-lg">
          What the cohort is building right now.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream-alt rounded-xl overflow-hidden border border-dark/5 hover:border-gold transition-colors block"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2">{project.name}</h3>
                <p className="text-dark/70 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
