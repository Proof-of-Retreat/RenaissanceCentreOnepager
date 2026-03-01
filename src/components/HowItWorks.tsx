const steps = [
  {
    icon: "🎯",
    title: "Select a Cohort",
    description: "Curate a group of complementary builders with diverse skills and shared values.",
  },
  {
    icon: "💰",
    title: "Provide Runway",
    description: "UBI-style funding removes financial distraction so builders can focus on their best work.",
  },
  {
    icon: "📡",
    title: "Build in Public via Scenius",
    description: "Daily progress sharing creates accountability and enables serendipitous collaboration.",
  },
  {
    icon: "🔓",
    title: "Open Source by Default",
    description: "All work is open source. Knowledge compounds and nothing gets lost when directions change.",
  },
  {
    icon: "🏠",
    title: "Co-locate Periodically",
    description: "Regular residencies at Proof of Retreat in Vietnam deepen relationships and accelerate work.",
  },
  {
    icon: "📊",
    title: "Study the Model",
    description: "Publish findings as research to create a replicable playbook for funding builders.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream-alt py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-heading text-xl mb-3">{step.title}</h3>
              <p className="text-dark/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
