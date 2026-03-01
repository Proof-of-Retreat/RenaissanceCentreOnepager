import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renaissance Centre: A New Institution for a World in Transition",
  description:
    "Fund 10-15 high-signal builders for 12-24 months. Remove financial distraction. Let them do their best work.",
};

const TELEGRAM_LINK = "https://t.me/proofofretreat/283";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-dark/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-heading text-xl italic">
              Renaissance Centre
            </span>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-hover text-dark font-semibold px-5 py-2 rounded-full text-sm transition-colors"
            >
              Join Our Community
            </a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
