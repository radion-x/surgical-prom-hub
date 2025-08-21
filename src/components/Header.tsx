import { Stethoscope, Activity, ExternalLink } from 'lucide-react';

export default function Header() {
  return (
  <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <Stethoscope className="w-8 h-8" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Professor Aaron Buckland — PROMs Hub</h1>
              <p className="text-blue-100 text-lg">
                Patient‑Reported Outcome Measures for spine and musculoskeletal care
              </p>
            </div>
          </div>
          <a
            href="https://aaronbuckland.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center space-x-2 btn-primary text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition"
            aria-label="Visit Professor Aaron Buckland website"
          >
            <span>Visit aaronbuckland.com</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-5 h-5 text-blue-200" aria-hidden="true" />
            <h2 className="text-lg font-semibold">Patient‑Reported Outcomes Suite</h2>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            Direct access to PROMs commonly used in Prof. Buckland’s practice: ODI, EQ‑5D‑3L/5L,
            CPCHILD, VAS‑SSRAA, and SRS‑22r. These measures support shared decision‑making, track
            recovery, and document quality‑of‑life changes throughout care.
          </p>
        </div>
      </div>
    </header>
  );
}
