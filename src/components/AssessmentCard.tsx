import { Assessment } from '@/data/assessments';
import { ExternalLink, Activity, Heart, User } from 'lucide-react';

interface AssessmentCardProps {
  assessment: Assessment;
}

export default function AssessmentCard({ assessment }: AssessmentCardProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Joint Function':
      case 'Joint Awareness':
        return <Activity className="w-6 h-6 text-blue-600" />;
      case 'Quality of Life':
        return <Heart className="w-6 h-6 text-red-500" />;
      case 'Clinical Assessment':
        return <User className="w-6 h-6 text-green-600" />;
      default:
        return <Activity className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getIcon(assessment.category)}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {assessment.name}
              </h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                {assessment.abbreviation}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {assessment.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-xs font-medium text-gray-500">Body Part:</span>
            {assessment.bodyPart.map((part, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {part}
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-600">
            <span className="font-medium">Purpose:</span> {assessment.purpose}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
            {assessment.category}
          </span>
          <a
            href={assessment.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200"
          >
            <span>Access Tool</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
