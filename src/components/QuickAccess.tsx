"use client";

import { assessments } from '@/data/assessments';
import { Activity, Heart, User, ExternalLink } from 'lucide-react';

function iconFor(category: string) {
  switch (category) {
    case 'Spine Outcomes':
      return <Activity className="w-4 h-4 text-blue-700" aria-hidden="true" />;
    case 'Quality of Life':
      return <Heart className="w-4 h-4 text-rose-700" aria-hidden="true" />;
    case 'Pediatric Outcomes':
      return <User className="w-4 h-4 text-violet-700" aria-hidden="true" />;
    default:
      return <Activity className="w-4 h-4 text-blue-700" aria-hidden="true" />;
  }
}

function chipClass(category: string) {
  switch (category) {
    case 'Spine Outcomes':
      return 'ring-blue-200 hover:ring-blue-300 bg-blue-50';
    case 'Quality of Life':
      return 'ring-rose-200 hover:ring-rose-300 bg-rose-50';
    case 'Pediatric Outcomes':
      return 'ring-violet-200 hover:ring-violet-300 bg-violet-50';
    default:
      return 'ring-gray-200 hover:ring-gray-300 bg-gray-50';
  }
}

export default function QuickAccess() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 mb-6">
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-800">Quick access</h3>
        <span className="text-xs text-gray-500">Open a PROM directly</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {assessments.map((a) => (
          <a
            key={a.id}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between rounded-lg px-3 py-2 ring-1 transition ${chipClass(a.category)}`}
            aria-label={`Open ${a.abbreviation} — ${a.name}`}
          >
            <div className="flex items-center gap-2 min-w-0">
              {iconFor(a.category)}
              <span className="shrink-0 text-xs font-semibold text-gray-900 bg-white/70 border border-gray-200 rounded px-1.5 py-0.5">
                {a.abbreviation}
              </span>
              <span className="truncate text-sm text-gray-800">{a.name}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-700" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
