const tiers = [
  {
    name: "Follower",
    price: "$5",
    description:
      "Full dispatch access. Weekly updates from inside the studio. You see the work as it happens.",
  },
  {
    name: "Patron",
    price: "$20",
    description:
      "Everything above, plus Telegram + Scenius community access. Talk to the people making it.",
  },
  {
    name: "Supporter",
    price: "$60",
    description:
      "Everything above, plus early access to all shipped work: software, writing, art. All before public release.",
  },
  {
    name: "Founding Patron",
    price: "$150",
    description:
      "Everything above, plus your name in the credits of the documentary. You made this possible. We\u2019ll make sure people know it.",
  },
];

export default function TheAsk() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Patron Tiers */}
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-4">
          The Ask
        </h2>
        <p className="text-center text-dark/60 text-lg mb-16">
          Pick a tier. Fund the work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-cream-alt rounded-xl p-8 border border-dark/5 flex flex-col"
            >
              <h3 className="font-heading text-xl mb-1">{tier.name}</h3>
              <p className="text-dark font-heading text-3xl mb-4">
                {tier.price}
                <span className="text-base text-dark/40 font-body">/mo</span>
              </p>
              <p className="text-dark/70 leading-relaxed text-sm">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        {/* Larger Partners */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading italic text-2xl md:text-3xl text-center mb-12">
            For Larger Partners
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-cream-alt rounded-xl p-8 border border-dark/5">
              <h4 className="font-heading text-2xl mb-6">What We Need</h4>
              <ul className="space-y-4 text-dark/80">
                <li className="flex gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span>
                    <strong>10-15 builders</strong> funded for{" "}
                    <strong>12-24 months</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span>
                    Living costs covered so builders can focus full-time
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span>Infrastructure: tools, hosting, shared resources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span>Co-location residencies at Proof of Retreat</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream-alt rounded-xl p-8 border border-dark/5">
              <h4 className="font-heading text-2xl mb-6">What Funders Get</h4>
              <ul className="space-y-4 text-dark/80">
                <li className="flex gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span>
                    <strong>Real-time visibility</strong> into progress via
                    Scenius
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span>
                    <strong>Published research</strong> on builder coordination
                    and governance
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span>
                    <strong>First access</strong> to a high-signal builder
                    network
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold text-xl leading-none">•</span>
                  <span>
                    A <strong>replicable playbook</strong> for funding builders
                    worldwide
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
