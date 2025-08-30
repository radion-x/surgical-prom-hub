"use client";

import { useMemo, useState } from "react";
import SignaturePad from "../../../components/SignaturePad";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const FORM_DEFS: Record<string, { title: string; fields: Array<{ name: string; label: string; type?: string; required?: boolean }> }> = {
  "surgery-consent": {
    title: "Surgery Consent",
    fields: [
      { name: "fullName", label: "Full name", required: true },
      { name: "dob", label: "Date of birth", type: "date", required: true },
      { name: "procedure", label: "Procedure", required: true },
      { name: "notes", label: "Notes / relevant history" },
    ],
  },
  "paediatric-opt-out-ssraa": {
    title: "Paediatric Opt Out (SSRAA)",
    fields: [
      { name: "guardianName", label: "Parent/Guardian full name", required: true },
      { name: "childName", label: "Child full name", required: true },
      { name: "dob", label: "Child date of birth", type: "date", required: true },
      { name: "reason", label: "Reason for opt out" },
    ],
  },
  "participant-opt-out-ssraa-adult": {
    title: "Participant Opt Out (SSRAA Adult)",
    fields: [
      { name: "fullName", label: "Full name", required: true },
      { name: "dob", label: "Date of birth", type: "date", required: true },
      { name: "reason", label: "Reason for opt out" },
    ],
  },
};

export default function ConsentFormPage() {
  const params = useParams<{ form: string }>();
  const router = useRouter();
  const def = useMemo(() => FORM_DEFS[params.form], [params.form]);
  const [form, setForm] = useState<Record<string, string>>({});
  const [sig, setSig] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!def) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">Form not found</h1>
        <p className="mt-2 text-gray-600">Please go back and choose a valid consent form.</p>
        <Link href="/" className="inline-block mt-4 text-blue-600 hover:underline">Return home</Link>
      </main>
    );
  }

  const onChange = (name: string, value: string) => setForm((f) => ({ ...f, [name]: value }));
  const valid = def.fields.filter(f => f.required).every(f => (form[f.name] ?? "").trim().length > 0) && !!sig;

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/consent/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formKey: params.form, data: form, signature: sig }),
      });
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      setDone(json.id as string);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Submission failed";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <button onClick={() => router.back()} className="text-sm text-gray-600 hover:text-gray-800">← Back</button>
      </div>
      <h1 className="text-2xl font-semibold">{def.title}</h1>
      <p className="text-gray-600 mt-1">Please complete all required fields and sign.</p>

      <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); if (valid) submit(); }}>
        {def.fields.map((f) => (
          <div key={f.name} className="grid gap-1">
            <label className="text-sm font-medium text-gray-800" htmlFor={f.name}>{f.label}{f.required && <span className="text-rose-600"> *</span>}</label>
            {f.type === "date" ? (
              <input id={f.name} type="date" className="border rounded-md px-3 py-2" required={f.required}
                     onChange={(e) => onChange(f.name, e.target.value)} />
            ) : (
              <input id={f.name} type="text" className="border rounded-md px-3 py-2" required={f.required}
                     onChange={(e) => onChange(f.name, e.target.value)} />
            )}
          </div>
        ))}

        <div className="pt-2">
          <p className="text-sm font-medium text-gray-800 mb-2">Signature<span className="text-rose-600"> *</span></p>
          <SignaturePad onChange={setSig} />
        </div>

        {error && <p className="text-sm text-rose-600">{error}</p>}
        {done && (
          <div className="rounded-md bg-emerald-50 border border-emerald-200 p-3 text-emerald-800 text-sm">
            Thank you. Your submission ID is <span className="font-mono">{done}</span>.
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={!valid || submitting}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium px-4 py-2 rounded-md"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </div>
      </form>
    </main>
  );
}
