import { Mail, Shield, Info, ExternalLink } from 'lucide-react';
import { assessments, categories } from '@/data/assessments';

export default function Footer() {
  const totalAssessments = assessments.length;
  const totalCategories = Math.max(0, categories.length - 1); // exclude "All"
  const bodySystems = new Set(assessments.flatMap((a) => a.bodyPart)).size;
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Info className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">About</h3>
            </div>
            <p className="text-sm leading-relaxed">
              This hub provides streamlined access to patient‑reported outcome measures (PROMs)
              used in the clinical practice of Professor Aaron Buckland. It supports consistent,
              efficient collection of outcomes to guide patient‑centered spine care.
            </p>
          </div>

          {/* Assessment Count */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Available Tools</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Total PROMs:</span>
                <span className="text-white font-medium">{totalAssessments}</span>
              </div>
              <div className="flex justify-between">
                <span>Categories:</span>
                <span className="text-white font-medium">{totalCategories}</span>
              </div>
              <div className="flex justify-between">
                <span>Body Systems:</span>
                <span className="text-white font-medium">{bodySystems}</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Information</h3>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              These PROMs are intended for use within clinical pathways and research. Ensure
              appropriate consent and data governance in your setting.
            </p>
            <a
              href="https://aaronbuckland.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 text-sm"
            >
              <span>aaronbuckland.com</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <div className="text-xs text-gray-400">
              <p>© 2025 Professor Aaron Buckland</p>
              <p>For clinical and educational use</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">Patient‑Reported Outcomes • Built for efficient, high‑quality spine care</p>
        </div>
      </div>
    </footer>
  );
}
