export default function TheAsk() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading italic text-4xl md:text-5xl text-center mb-16">
          The Ask
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What we need */}
          <div className="bg-cream-alt rounded-xl p-8 border border-dark/5">
            <h3 className="font-heading text-2xl mb-6">What We Need</h3>
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
                <span>Living costs covered so builders can focus full-time</span>
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

          {/* What funders get */}
          <div className="bg-cream-alt rounded-xl p-8 border border-dark/5">
            <h3 className="font-heading text-2xl mb-6">What Funders Get</h3>
            <ul className="space-y-4 text-dark/80">
              <li className="flex gap-3">
                <span className="text-gold text-xl leading-none">•</span>
                <span>
                  <strong>Real-time visibility</strong> into progress via Scenius
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold text-xl leading-none">•</span>
                <span>
                  <strong>Published research</strong> on builder coordination and
                  governance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold text-xl leading-none">•</span>
                <span>
                  <strong>First access</strong> to a high-signal builder network
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
    </section>
  );
}
