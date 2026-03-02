export default function Footer() {
  return (
    <footer className="bg-dark text-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo / Brand */}
          <div>
            <img src="/images/footer_logo.png" alt="Renaissance Centre" className="h-12 mb-4" />
            <p className="text-cream/60 text-sm">
              An open creative studio. Everything we build goes into the commons.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="font-heading text-sm mb-4 text-cream/80">
                Community
              </h4>
              <ul className="space-y-2 text-sm text-cream/50">
                <li>
                  <a
                    href="https://proofofretreat.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Proof of Retreat
                  </a>
                </li>
                <li>
                  <a
                    href="https://scenius.work/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Scenius
                  </a>
                </li>
                <li>
                  <a
                    href="https://showtime.villedge.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Showtime
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4 text-cream/80">
                Bots
              </h4>
              <ul className="space-y-2 text-sm text-cream/50">
                <li>
                  <a
                    href="https://t.me/PoR_pomodoro_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Pomodoro
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/ZuWell_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    ZuWell
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/PoR_transcripts_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Transcript
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/PoR_Juli_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Juli
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4 text-cream/80">
                Projects
              </h4>
              <ul className="space-y-2 text-sm text-cream/50">
                <li>
                  <a
                    href="https://cartographers.world/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Cartographers
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cxrtisxl/h1v3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    H1v3
                  </a>
                </li>
                <li>
                  <a
                    href="https://jackiechain.world/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Jackie Chain
                  </a>
                </li>
                <li>
                  <a
                    href="https://thouartofficial.com/research/popupcities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Thou Art Research
                  </a>
                </li>
                <li>
                  <a
                    href="https://hypermaps.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Hypermaps
                  </a>
                </li>
                <li>
                  <a
                    href="https://innermost-life.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Innermost Life
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/30 text-sm">
          &copy; 2026 Renaissance Centre
        </div>
      </div>
    </footer>
  );
}
