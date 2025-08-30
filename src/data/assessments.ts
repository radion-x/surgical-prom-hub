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
    url: "https://odi-surg.aaronbuckland.com/",
    category: "Spine Outcomes",
    bodyPart: ["Spine", "Lower Back", "Thoracic"],
    purpose: "Measures functional disability in patients with low back pain",
    items: 10,
    timeToComplete: "3–5 min",
    scoreRange: "0–50 (0–100%)",
    tags: ["adult", "lumbar", "thoracic", "deformity", "kyphosis", "scoliosis"]
  },
  {
    id: "ndi",
    name: "Neck Disability Index",
    abbreviation: "NDI",
    description:
      "A 10-item questionnaire assessing neck pain and its impact on daily activities; widely used for cervical spine conditions.",
    url: "https://ndi-surg.aaronbuckland.com/",
  category: "Neck Outcomes",
    bodyPart: ["Spine", "Neck", "Cervical"],
    purpose: "Measures neck-specific disability in patients with cervical spine disorders",
    items: 10,
    timeToComplete: "3–5 min",
    scoreRange: "0–50 (0–100%)",
    tags: ["neck", "cervical", "disability", "questionnaire", "adult"],
    author: "Aaron Buckland",
    published: 2025
  },
  {
    id: "eq-5d-3l",
    name: "EQ-5D-3L",
    abbreviation: "EQ-5D-3L",
    description:
      "A standardized, generic health status instrument with three levels across five dimensions plus a VAS for overall health.",
    url: "https://eq-5d-3l-surg.aaronbuckland.com/",
    category: "Quality of Life",
    bodyPart: ["General"],
    purpose: "Assesses overall health-related quality of life (3-level version)"
  },
  {
    id: "paediatric-odi",
    name: "Paediatric Oswestry Disability Index",
    abbreviation: "Paediatric ODI",
    description:
      "Paediatric adaptation of the Oswestry Disability Index to measure functional disability in children with low back pain or spine conditions.",
  url: "https://paediatric-odi-surg.aaronbuckland.com/",
    category: "Pediatric Outcomes",
    bodyPart: ["Pediatric", "Spine", "Scoliosis"],
    purpose: "Paediatric adaptation of the Oswestry Disability Index to measure functional disability in children with low back pain or spine conditions",
    items: 10,
    timeToComplete: "3–5 min",
    scoreRange: "0–50 (0–100%)",
    tags: ["paediatric", "pediatric", "odi", "scoliosis"],
    author: "Aaron Buckland",
    published: 2025
  },

  {
    id: "cpchild",
    name: "Caregiver Priorities & Child Health Index of Life with Disabilities",
    abbreviation: "CPCHILD",
    description:
      "A caregiver-reported outcome measure for children with severe disabilities, covering activities, comfort, communication, health, and quality of life.",
    url: "https://cpchild-surg.aaronbuckland.com/",
    category: "Pediatric Outcomes",
    bodyPart: ["Pediatric", "Neuromuscular", "Scoliosis"],
    purpose: "Evaluates health-related quality of life in children with severe disabilities",
    tags: ["neuromuscular", "scoliosis"]
  },
  {
    id: "vas-ssraa",
    name: "Spine Pain Assessment",
    abbreviation: "VAS",
    description:
      "Visual Analog Scale for Spine Surgery Recovery and Activity Assessment: tracks pain, activity tolerance, and recovery trajectory.",
    url: "https://vas-spine.aaronbuckland.com/",
    category: "Spine Outcomes",
    bodyPart: ["Spine", "Cervical", "Thoracic", "Lower Back", "Pediatric", "Scoliosis", "Kyphosis"],
    purpose: "Tracks recovery progress following spine surgery",
    tags: ["adult", "pediatric", "pain", "recovery", "surgery", "scoliosis", "kyphosis", "deformity"]
  },
  {
    id: "srs-22r",
    name: "SRS-22r",
    abbreviation: "SRS-22r",
    description:
      "A 22-item questionnaire from the Scoliosis Research Society covering function/activity, pain, self-image, mental health, and satisfaction.",
    url: "https://srs22r-surg.aaronbuckland.com/",
    category: "Spine Outcomes",
    bodyPart: ["Spine", "Pediatric", "Scoliosis", "Kyphosis"],
    purpose: "Assesses outcomes and satisfaction in spinal deformity care",
    tags: ["adult", "pediatric", "scoliosis", "kyphosis", "deformity"]
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
  "Pediatric",
  "Thoracic",
  "Cervical",
  "Scoliosis",
  "Kyphosis",
  "Neuromuscular"
];
