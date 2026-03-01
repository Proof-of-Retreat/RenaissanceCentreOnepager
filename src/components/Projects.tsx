import ImagePlaceholder from "./ImagePlaceholder";

const projects = [
  {
    name: "Scenius",
    description: "Daily progress-sharing tool that creates accountability and enables serendipitous collaboration across the builder network.",
  },
  {
    name: "Pomodoro",
    description: "Shared focus and productivity tool that lets builders work together in synchronized deep-work sessions.",
  },
  {
    name: "Zuwell",
    description: "Wellness and wellbeing tool designed to help builders maintain sustainable work practices and mental health.",
  },
  {
    name: "Juli",
    description: "Project details coming soon. An emerging tool from the cohort addressing a key community need.",
  },
  {
    name: "Transcripts",
    description: "Meeting and conversation transcription tool that captures and preserves knowledge from community discussions.",
  },
  {
    name: "Showcase",
    description: "Demo and portfolio platform for builders to present their work and attract collaborators and supporters.",
  },
  {
    name: "Villedge Tech",
    description: "Community technology platform. Visit villedge.tech for more details.",
    isEmbed: true,
  },
  {
    name: "Popup Research",
    description: "Coordination and governance research studying how pop-up cities and builder communities self-organize.",
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
            <div
              key={project.name}
              className="bg-cream-alt rounded-xl overflow-hidden border border-dark/5"
            >
              {project.isEmbed ? (
                <div className="aspect-video border-2 border-dashed border-dark/20 bg-dark/5 flex items-center justify-center">
                  <span className="text-dark/40 text-sm text-center px-4">
                    Villedge Tech: embedded webpage preview
                  </span>
                </div>
              ) : (
                <ImagePlaceholder
                  label={`${project.name}: screenshot or icon`}
                  aspect="video"
                />
              )}
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2">{project.name}</h3>
                <p className="text-dark/70 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
