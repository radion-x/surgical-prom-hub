export interface Assessment {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  url: string;
  category: string;
  bodyPart: string[];
  purpose: string;
  // Optional richer metadata for display
  items?: number; // number of items/questions
  timeToComplete?: string; // e.g., "3–5 min"
  scoreRange?: string; // e.g., "0–50 (0–100%)"
  interpretation?: string; // brief interpretation guidance
  tags?: string[];
  author?: string;
  published?: number;
}

export const assessments: Assessment[] = [
  {
    id: "odi",
    name: "Oswestry Disability Index",
    abbreviation: "ODI",
    description:
      "A validated questionnaire that quantifies disability for low back pain across daily activities, widely used in spine care.",
    url: "https://odi-ab.aaronbuckland.com/",
    category: "Spine Outcomes",
    bodyPart: ["Spine", "Lower Back"],
    purpose: "Measures functional disability in patients with low back pain",
    items: 10,
    timeToComplete: "3–5 min",
    scoreRange: "0–50 (0–100%)"
  },
  {
    id: "ndi",
    name: "Neck Disability Index",
    abbreviation: "NDI",
    description:
      "A 10-item questionnaire assessing neck pain and its impact on daily activities; widely used for cervical spine conditions.",
    url: "https://ndi.aaronbuckland.com/",
  category: "Neck Outcomes",
    bodyPart: ["Spine", "Neck"],
    purpose: "Measures neck-specific disability in patients with cervical spine disorders",
    items: 10,
    timeToComplete: "3–5 min",
    scoreRange: "0–50 (0–100%)",
    tags: ["neck", "cervical", "disability", "questionnaire"],
    author: "Aaron Buckland",
    published: 2025
  },
  {
    id: "eq-5d-3l",
    name: "EQ-5D-3L",
    abbreviation: "EQ-5D-3L",
    description:
      "A standardized, generic health status instrument with three levels across five dimensions plus a VAS for overall health.",
    url: "https://eq-5d-3l.aaronbuckland.com/",
    category: "Quality of Life",
    bodyPart: ["General"],
    purpose: "Assesses overall health-related quality of life (3-level version)"
  },
  {
    id: "eq-5d-5l",
    name: "EQ-5D-5L",
    abbreviation: "EQ-5D-5L",
    description:
      "The five-level version of EQ-5D, improving sensitivity and reducing ceiling effects across the same five dimensions plus a VAS.",
    url: "https://eq-5d-5l.aaronbuckland.com/",
    category: "Quality of Life",
    bodyPart: ["General"],
    purpose: "Assesses overall health-related quality of life (5-level version)"
  },
  {
    id: "cpchild",
    name: "Caregiver Priorities & Child Health Index of Life with Disabilities",
    abbreviation: "CPCHILD",
    description:
      "A caregiver-reported outcome measure for children with severe disabilities, covering activities, comfort, communication, health, and quality of life.",
    url: "https://cpchild.aaronbuckland.com/",
    category: "Pediatric Outcomes",
    bodyPart: ["Pediatric"],
    purpose: "Evaluates health-related quality of life in children with severe disabilities"
  },
  {
    id: "vas-ssraa",
    name: "VAS-SSRAA",
    abbreviation: "VAS-SSRAA",
    description:
      "Visual Analog Scale for Spine Surgery Recovery and Activity Assessment: tracks pain, activity tolerance, and recovery trajectory.",
    url: "https://vas-ssraa.aaronbuckland.com/",
    category: "Spine Outcomes",
    bodyPart: ["Spine"],
    purpose: "Tracks recovery progress following spine surgery"
  },
  {
    id: "srs-22r",
    name: "SRS-22r",
    abbreviation: "SRS-22r",
    description:
      "A 22-item questionnaire from the Scoliosis Research Society covering function/activity, pain, self-image, mental health, and satisfaction.",
    url: "https://srs22r.aaronbuckland.com/",
    category: "Spine Outcomes",
    bodyPart: ["Spine"],
    purpose: "Assesses outcomes and satisfaction in spinal deformity care"
  }
];

export const categories = [
  "All",
  "Spine Outcomes",
  "Neck Outcomes",
  "Quality of Life",
  "Pediatric Outcomes"
];

export const bodyParts = [
  "All",
  "Spine",
  "Lower Back",
  "Neck",
  "General",
  "Pediatric"
];
