import { Mail, Shield, Info } from 'lucide-react';

export default function Footer() {
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
              A centralized platform providing digital access to validated medical assessment tools 
              used by healthcare professionals for patient evaluation and outcome measurement.
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
                <span>Total Assessments:</span>
                <span className="text-white font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span>Categories:</span>
                <span className="text-white font-medium">7</span>
              </div>
              <div className="flex justify-between">
                <span>Body Systems:</span>
                <span className="text-white font-medium">4</span>
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
              These assessment tools are designed for use by qualified healthcare professionals. 
              Please ensure proper training and validation before clinical implementation.
            </p>
            <div className="text-xs text-gray-400">
              <p>© 2025 Medical Assessment Hub</p>
              <p>For educational and clinical use</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Digital assessment tools for modern healthcare • 
            Built with precision for clinical excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
