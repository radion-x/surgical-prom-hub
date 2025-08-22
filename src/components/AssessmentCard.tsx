import { Assessment } from '@/data/assessments';
import { ExternalLink, Activity, Heart, User, Clock, ListOrdered, Ruler } from 'lucide-react';

interface AssessmentCardProps {
  assessment: Assessment;
}

export default function AssessmentCard({ assessment }: AssessmentCardProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Spine Outcomes':
        return <Activity className="w-6 h-6 text-blue-600" aria-hidden="true" />;
      case 'Neck Outcomes':
        return <Activity className="w-6 h-6 text-emerald-600" aria-hidden="true" />;
      case 'Quality of Life':
        return <Heart className="w-6 h-6 text-rose-600" aria-hidden="true" />;
      case 'Pediatric Outcomes':
        return <User className="w-6 h-6 text-violet-600" aria-hidden="true" />;
      default:
        return <Activity className="w-6 h-6 text-blue-600" aria-hidden="true" />;
    }
  };

  const getCategoryChip = (category: string) => {
    switch (category) {
      case 'Spine Outcomes':
        return 'bg-blue-50 text-blue-700 border border-blue-100';
      case 'Neck Outcomes':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
      case 'Quality of Life':
        return 'bg-rose-50 text-rose-700 border border-rose-100';
      case 'Pediatric Outcomes':
        return 'bg-violet-50 text-violet-700 border border-violet-100';
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
      <div className="p-6 flex flex-col h-full">
        {/* Header row: icon + title + abbreviation */}
        <div className="flex items-center gap-3 mb-3 min-h-[2.5rem]">
          {getIcon(assessment.category)}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base md:text-lg font-semibold text-gray-900">
              {assessment.name}
            </h3>
            <span
              className="bg-blue-100 text-blue-800 text-[11px] md:text-xs font-medium px-2 py-0.5 rounded"
              aria-label={`Abbreviation ${assessment.abbreviation}`}
            >
              {assessment.abbreviation}
            </span>
          </div>
        </div>

        {/* Description with a min-height to normalize card heights */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[3.75rem]">
          {assessment.description}
        </p>

  <div className="mb-4">
          {/* Optional details row */}
          {(assessment.items || assessment.timeToComplete || assessment.scoreRange) && (
            <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-700">
              {assessment.items && (
                <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                  <ListOrdered className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" />
                  <span className="font-medium">{assessment.items}</span>
                  <span className="text-gray-500">items</span>
                </span>
              )}
              {assessment.timeToComplete && (
                <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                  <Clock className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" />
                  <span className="text-gray-600">{assessment.timeToComplete}</span>
                </span>
              )}
              {assessment.scoreRange && (
                <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                  <Ruler className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" />
                  <span className="text-gray-600">{assessment.scoreRange}</span>
                </span>
              )}
            </div>
          )}
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
          <div className="text-xs text-gray-700">
            <span className="font-medium">Purpose:</span> {assessment.purpose}
          </div>
        </div>

  {/* Bottom row pinned to bottom for even alignment */}
  <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100 mt-auto">
          <span className={`text-xs px-2 py-1 rounded ${getCategoryChip(assessment.category)}`}>
            {assessment.category}
          </span>
          <a
            href={assessment.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 btn-primary text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-sm"
            aria-label={`Open ${assessment.abbreviation} PROM`}
          >
            <span>Open PROM</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
