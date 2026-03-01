import ImagePlaceholder from "./ImagePlaceholder";

const proofPoints = [
  {
    title: "Proof of Retreat",
    description: "A working pop-up city in Vietnam, already hosting builders and running programs.",
    image: "Photo of Proof of Retreat co-living space",
  },
  {
    title: "Scenius",
    description: "A daily progress-sharing tool already in active use by the builder community.",
    image: "Screenshot of Scenius app interface",
  },
  {
    title: "Shared Productivity Tools",
    description: "Pomodoro timers, AI coordination tools, and workflow systems already built and used daily.",
    image: "Screenshot of shared productivity tools",
  },
  {
    title: "Active Builder Community",
    description: "10-15 builders already collaborating, sharing progress, and shipping together.",
    image: "Photo of builders collaborating",
  },
  {
    title: "Working Prototypes",
    description: "Multiple working prototypes and research outputs already produced by the cohort.",
    image: "Screenshots of working prototypes",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="bg-cream-alt rounded-xl overflow-hidden border border-dark/5"
            >
              <ImagePlaceholder label={point.image} aspect="video" />
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2">{point.title}</h3>
                <p className="text-dark/70 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
