// Skills data — plain data so the page updates when you edit here.
//   • Remove a whole CARD  -> delete its { ... } block from skillCategories.
//   • Remove a TAG         -> delete that line from a card's `skills` array.
//   • Highlight a TAG      -> write it as { label: "REST API", featured: true }.
//   • Icons are referenced by key (see iconMap in Skills.tsx).
//   • The bottom ticker reads from `marquee` — add/remove words freely.

export type Skill = string | { label: string; featured?: boolean };

export type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "SAP Integration Suite",
    icon: "cloud",
    skills: [
      { label: "SAP CPI", featured: true },
      "SAP PI/PO",
      "SAP BTP",
      "Cloud Connector",
      "API Management",
      "Message Monitoring",
    ],
  },
  {
    title: "Integration & APIs",
    icon: "share",
    skills: [
      { label: "REST API", featured: true },
      "SOAP",
      "OData",
      "IDoc",
      "XML",
      "JSON",
      "SFTP",
      "HTTP",
    ],
  },
  {
    title: "Programming & Scripting",
    icon: "code",
    skills: [
      { label: "Groovy", featured: true },
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
    ],
  },
  {
    title: "Web Development",
    icon: "layout",
    skills: [
      { label: "React", featured: true },
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "tool",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Eclipse"],
  },
];

// Scrolling ticker under the cards. Kept short + punchy on purpose.
export const marquee = [
  "SAP CPI",
  "PI/PO",
  "Groovy",
  "REST",
  "SOAP",
  "OData",
  "IDoc",
  "SFTP",
  "BTP",
  "API Management",
  "Cloud Connector",
  "XML / JSON",
];
