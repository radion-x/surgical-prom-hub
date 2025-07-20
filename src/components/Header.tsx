import { Stethoscope, Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <Stethoscope className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Medical Assessment Hub</h1>
            <p className="text-blue-100 text-lg">Digital Assessment Tools for Healthcare Professionals</p>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-5 h-5 text-blue-200" />
            <h2 className="text-lg font-semibold">Comprehensive Patient Assessment Suite</h2>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            Access a centralized collection of validated, digital versions of recognized medical assessments. 
            These tools help doctors and surgeons evaluate patient outcomes, track recovery progress, and make 
            informed clinical decisions across various specialties including orthopedics, spine surgery, and general health assessment.
          </p>
        </div>
      </div>
    </header>
  );
}
