const reasons = [
  {
    title: "Not Starting from Zero",
    description: "The community, tools, and relationships already exist. This is about scaling what works.",
  },
  {
    title: "Talent Recycling",
    description: "When a project pivots, the people, code, and insights stay in the network. Nothing is wasted.",
  },
  {
    title: "Built-in Accountability",
    description: "Scenius creates daily visibility into progress. Funders and builders see real work, not pitch decks.",
  },
  {
    title: "Scalable & Replicable",
    description: "The model is designed to be studied and replicated. Fund one cohort, publish the playbook, inspire many.",
  },
  {
    title: "Research Value",
    description: "Every cohort generates publishable research on coordination, governance, and builder productivity.",
  },
];

export default function WhyItWorks() {
  return (
    <section className="bg-cream-alt py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-16">
          Why It Works
        </h2>
        <div className="space-y-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="flex gap-4 items-start bg-cream rounded-xl p-6 border border-dark/5"
            >
              <span className="text-gold font-heading text-2xl leading-none mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-lg mb-1">{reason.title}</h3>
                <p className="text-dark/70 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
