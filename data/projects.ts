/* Projects data — the Featured Work section is driven entirely by this file.
 *
 * TO ADD A PROJECT: copy one object below and edit the fields. That's it —
 * the card, the tech chips (with "+N" overflow) and the filter tabs all update
 * automatically. A new `category` value will get its own tab as long as you add
 * a matching entry to `projectFilters` beneath the array.
 */

export type ProjectCategory = "enterprise" | "personal";

export type Project = {
  /** Card heading. */
  title: string;
  /** One or two sentences shown in the card body. */
  description: string;
  /** Optional real header image — file lives in /public, path relative to it.
   *  When omitted, the animated `visual` renders instead. */
  image?: string;
  /** Which animated illustration fills the card header (used when there's no
   *  real screenshot). Defaults to "network". */
  visual?: "network" | "chart" | "flow" | "code" | "api" | "line";
  /** Drives which filter tab the card belongs to. */
  category: ProjectCategory;
  /** Small breadcrumb printed over the image, e.g. "SAP CPI · Monitoring". */
  tag: string;
  /** Pill shown in the top-right of the image, e.g. "Enterprise" or "Live". */
  status: string;
  /** Stack chips. First 3 render; the rest collapse into a "+N" chip. */
  tech: string[];
  /** Public repo link. Omit for internal / NDA work. */
  github?: string;
  /** Live demo link. Omit for internal / NDA work. */
  demo?: string;
  /** Enterprise work with no public links — shows an "Internal" footer instead. */
  internal?: boolean;
};

export const projects: Project[] = [
  {
    title: "SAP Integration Monitoring Dashboard",
    description:
      "Dashboard solution for monitoring SAP CPI integration flows, message status, and error tracking in real time.",
    visual: "chart",
    category: "enterprise",
    tag: "SAP CPI · Monitoring",
    status: "Enterprise",
    tech: ["SAP CPI", "SAP BTP", "React", "REST API"],
    internal: true,
  },
  {
    title: "Enterprise Integration Platform",
    description:
      "Integration architecture connecting SAP PI/PO, CPI, external APIs and cloud services across the enterprise landscape.",
    visual: "network",
    category: "enterprise",
    tag: "SAP PI/PO · Architecture",
    status: "Enterprise",
    tech: ["SAP PI/PO", "SAP CPI", "SOAP", "OData"],
    internal: true,
  },

  /* ── Added below. These are internal/NDA SAP projects, so they show an
   * "Internal" footer instead of links. SWAP the placeholder images
   * (reused sap-dashboard.png / integration.png) for real screenshots when
   * you have them, and tweak the copy to match your actual work. ── */
  {
    title: "SAP CPI iFlow Development",
    description:
      "Design and build of Cloud Integration iFlows for A2A and B2B scenarios — message mapping, Groovy scripting, error handling and end-to-end monitoring.",
    visual: "flow",
    category: "enterprise",
    tag: "SAP CPI · iFlow",
    status: "Enterprise",
    tech: ["SAP CPI", "Groovy", "XSLT", "IDoc", "SFTP"],
    internal: true,
  },
  {
    title: "SAP BTP API Management",
    description:
      "Secured, rate-limited API proxies exposing S/4HANA services to external partners through SAP API Management with OAuth 2.0.",
    visual: "api",
    category: "enterprise",
    tag: "SAP BTP · APIs",
    status: "Enterprise",
    tech: ["SAP BTP", "API Management", "OAuth 2.0", "OData", "REST"],
    internal: true,
  },
  {
    title: "PI/PO to Cloud Integration Migration",
    description:
      "Migration of legacy SAP PI/PO interfaces to Cloud Integration — re-platforming mappings and adapters with a zero-downtime cutover.",
    visual: "line",
    category: "enterprise",
    tag: "SAP PI/PO · Migration",
    status: "Enterprise",
    tech: ["SAP PI/PO", "SAP CPI", "SOAP", "JMS", "IDoc"],
    internal: true,
  },

  /* ── Personal project — activates the "Personal" filter tab. Replace the
   * links with your real repo / live URL. ── */
  {
    title: "Developer Portfolio",
    description:
      "This portfolio — a fast, animated single-page site built with the latest Next.js and Tailwind CSS.",
    visual: "code",
    category: "personal",
    tag: "Next.js · Frontend",
    status: "Live",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/Alsticker67/nexora",
    demo: "https://bhairav-portfolio.vercel.app",
  },
];

/* Filter tabs. "all" always shows; every other tab appears only when at least
 * one project uses that category, so you can drop the Personal tab in just by
 * adding a project with category: "personal". */
export const projectFilters: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "enterprise", label: "Enterprise (SAP)" },
  { id: "personal", label: "Personal" },
];
