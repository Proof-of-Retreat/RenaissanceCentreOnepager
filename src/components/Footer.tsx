const TELEGRAM_LINK = "https://t.me/+placeholder";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo / Brand */}
          <div>
            <div className="w-32 h-12 border-2 border-dashed border-cream/20 rounded flex items-center justify-center mb-4">
              <span className="text-cream/40 text-xs">Logo</span>
            </div>
            <p className="text-cream/60 text-sm">
              A new institution for a world in transition.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="font-heading text-sm mb-4 text-cream/80">
                Projects
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
                    href="#"
                    className="hover:text-cream transition-colors"
                  >
                    Scenius
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4 text-cream/80">
                Community
              </h4>
              <ul className="space-y-2 text-sm text-cream/50">
                <li>
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/30 text-sm">
          &copy; {new Date().getFullYear()} Renaissance Centre
        </div>
      </div>
    </footer>
  );
}
