"use client";

import { useState } from "react";

type Props = {
  triggerClassName?: string;
};

const forms = [
  { id: "surgery-consent", title: "Surgery Consent" },
  { id: "paediatric-opt-out-ssraa", title: "Paediatric Opt Out (SSRAA)" },
  { id: "participant-opt-out-ssraa-adult", title: "Participant Opt Out (SSRAA Adult)" },
];

export default function ConsentFormsModal({ triggerClassName }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          "inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-3 py-2 rounded-md shadow-sm transition"
        }
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="consent-forms-modal"
      >
        <span>Consent forms</span>
      </button>

      {open && (
        <div
          id="consent-forms-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Select a form</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 px-2 py-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-3">
              {forms.map((f) => (
                <a
                  key={f.id}
                  href={`/consent/${f.id}`}
                  className="block rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition p-4"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{f.title}</p>
                      <p className="text-sm text-gray-500">Fill out online and sign digitally</p>
                    </div>
                    <span className="text-emerald-600">Start →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
