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
        <div className="rounded-xl overflow-hidden border border-dark/5">
          <img
            src="/images/cohort.JPG"
            alt="The Cohort at Proof of Retreat 2026"
            className="w-full"
          />
        </div>
        <p className="text-center text-dark/60 mt-4 text-sm italic">
          Proof of Retreat 2026
        </p>
      </div>
    </section>
  );
}
