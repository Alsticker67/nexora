/* Certifications & achievements data — the Certifications section renders
 * entirely from this file.
 *
 * TO ADD A CERT: copy an object in `certifications` and edit the fields.
 *   - icon:      picks the tile glyph (see CERT_ICONS in Certifications.tsx)
 *   - badge:     small pill on the card (issuer / kind), optional
 *   - featured:  renders the card as the large spotlight at the top (set on ONE)
 *   - summary:   extra one-liner shown only on the featured spotlight card
 *   - issued / credentialUrl are optional — the card adapts when they're absent.
 */

export type Certification = {
  title: string;
  issuer: string;
  issued?: string;
  credentialUrl?: string;
  icon: "shield" | "sparkles" | "cloud" | "database";
  badge?: string;
  featured?: boolean;
  summary?: string;
};

export const certifications: Certification[] = [
  {
    title: "SAP Certified – SAP Integration Suite (CPI) Developer",
    issuer: "SAP · IBM",
    issued: "Jul 2023",
    credentialUrl:
      "https://training.sap.com/certification/verify-certification/?certId=YOUR_CERT_ID",
    icon: "shield",
    badge: "Global",
    featured: true,
    summary:
      "SAP-certified in enterprise Cloud Integration — designing, building and monitoring production iFlows that connect SAP and non-SAP systems end to end.",
  },
  {
    title: "IBM Generative AI",
    issuer: "IBM",
    issued: "Oct 2023",
    credentialUrl: "https://www.ibm.com/credentials/your-cert-id",
    icon: "sparkles",
    badge: "IBM",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    icon: "cloud",
    badge: "Cloud",
  },
  {
    title: "SQL Concepts & Queries Certification",
    issuer: "Verified Course",
    icon: "database",
    badge: "Database",
  },
];
