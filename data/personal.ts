export const personal = {
  // ==========================
  // Basic Information
  // ==========================

  name: "Bhairav Singh",
  firstName: "Bhairav",
  lastName: "Singh",
  shortName: "BH",

  designation:
    "Application Developer | SAP Integration Developer | SAP CPI",

  headline:
    "Building Enterprise Integrations for Modern Businesses",

  tagline:
    "I design and build enterprise-grade SAP integration solutions using SAP Integration Suite (CPI), SAP PI/PO, SAP BTP, REST APIs, SOAP Services and Groovy scripting.",

  // ==========================
  // Contact
  // ==========================

  email: "alphaeagle200@gmail.com",
  location: "India",

  // ==========================
  // Social
  // ==========================

  github: "https://github.com/Alsticker67",
  linkedin: "https://www.linkedin.com/in/bhairav-singh-9917a224b/",

  // ==========================
  // Resume
  // ==========================

  resume: "/resume/Bhairav_Singh_Resume.pdf",

  // ==========================
  // Hero Stats
  // ==========================

  experience: "2+",
  projects: "10+",
  integrations: "20+",

  // ==========================
  // Floating Tech Tags
  // ==========================

  heroSkills: [
    "SAP CPI",
    "SAP PI/PO",
    "SAP BTP",
    "Groovy",
    "REST APIs",
    "OData",
  ],

  // ==========================
  // Hero Highlights
  // ==========================

  highlights: [
    "Enterprise Integrations",
    "Cloud Integration",
    "SAP BTP",
    "REST & SOAP APIs",
    "Groovy Development",
    "API Management",
  ],

  // ==========================
  // Availability
  // ==========================

  available: true,

  // ==========================
  // About Section
  //   Everything the About section renders lives here.
  //   Icons are referenced by key (see iconMap in About.tsx) so this
  //   file stays plain data — change a company, date, cert count, or
  //   add/remove any list item here and it updates on the page.
  // ==========================

  about: {
    eyebrow: "About Me",
    title: {
      lead: "Engineering enterprise integrations",
      accent: "that just work.",
    },

    bio:
      "I'm an SAP Integration Developer at IBM India, designing and building " +
      "enterprise-grade integration solutions that connect SAP and non-SAP " +
      "systems. My work spans SAP Integration Suite (CPI), SAP PI/PO and SAP " +
      "BTP — REST & SOAP interfaces, OData services and Groovy-based message " +
      "transformations. I focus on integrations that are scalable, reliable " +
      "and easy to monitor in production.",

    focusAreas: [
      { icon: "cpu", label: "SAP CPI" },
      { icon: "workflow", label: "SAP PI/PO" },
      { icon: "cloud", label: "SAP BTP" },
      { icon: "code", label: "Groovy" },
      { icon: "share", label: "REST & SOAP" },
      { icon: "database", label: "OData" },
    ],

    strengths: [
      "Strong Debugging",
      "Problem-Solving",
      "Quick Learner",
      "Clear Communication",
      "Ownership",
      "Team Collaboration",
    ],

    currentRole: {
      company: "IBM India Pvt. Ltd.",
      role: "Application Developer",
      since: "Aug 2023",
    },

    certifications: {
      count: 2,
      label: "SAP & IBM Certifications",
    },

    specialty: {
      title: "SAP Cloud Integration",
      subtitle: "Enterprise Integration Specialist",
    },

    // Stylised live monitor. Metrics reflect real portfolio scope;
    // the feed names are representative iFlow labels.
    // "animation" controls the motion style: "step" (discrete march) or
    // "stream" (continuous flowing pulse). Reorder / edit freely.
    monitor: {
      // Short note under the // 02 header. PI/PO and CPI share the same
      // integration model — CPI is the modern, cloud-based evolution.
      note:
        "SAP PI/PO (on-premise) and SAP Integration Suite / CPI (cloud) share the " +
        "same end-to-end model — sender, mapping, routing, receiver. CPI is the newer, " +
        "cloud-based generation, adding prebuilt adapters, scalability and API management.",

      // // 02 — one unified end-to-end architecture spanning PI/PO + CPI,
      // grouped into three layers so it reads as a diagram, not a cramped strip.
      architecture: {
        title: "PI/PO + CPI · Unified Integration Pipeline",
        stages: [
          {
            label: "Source",
            nodes: [
              { icon: "partner", title: "Sender System", sub: "SAP / Non-SAP" },
              { icon: "adapter", title: "Sender Adapter", sub: "IDoc / SOAP / REST" },
            ],
          },
          {
            label: "Integration Layer",
            nodes: [
              { icon: "map", title: "Message Mapping", sub: "XML ↔ JSON" },
              { icon: "route", title: "Routing", sub: "content-based" },
              { icon: "code", title: "Groovy Script", sub: "enrich / transform" },
            ],
          },
          {
            label: "Target",
            nodes: [
              { icon: "adapter", title: "Receiver Adapter", sub: "REST / OData" },
              { icon: "s4hana", title: "Receiver System", sub: "SAP S/4HANA" },
            ],
          },
        ],
      },

      // // 03 — reference iFlow kept from the original monitor, rendered as a
      // vertical step timeline. Secure order: inbound Decrypt → Verify.
      showcase: {
        title: "Secure File Transfer iFlow",
        steps: [
          { icon: "partner", title: "Partner (Sender)", sub: "PGP encrypted + signed" },
          { icon: "sftp", title: "SFTP Server", sub: "inbound directory" },
          { icon: "adapter", title: "SFTP Sender Adapter", sub: "authentication" },
          { icon: "decrypt", title: "PGP Decryptor", sub: "private key" },
          { icon: "verify", title: "Verify Signature", sub: "PKCS#7" },
          { icon: "map", title: "Message Mapping", sub: "transform" },
          { icon: "s4hana", title: "SAP S/4HANA", sub: "IDoc / SOAP / OData / RFC" },
        ],
      },

      feed: [
        "OrderRequest_to_ERP",
        "MaterialMaster_Sync",
        "Invoice_OData_Push",
        "Delivery_SOAP_Confirm",
      ],
    },

    // Row 04 — capability cards. Each renders as a numbered card with an icon,
    // a mono label, a title, a short line and protocol/skill chips.
    highlights: [
      {
        icon: "workflow",
        label: "Delivery",
        title: "Enterprise Integrations",
        text: "20+ SAP CPI iFlows built and monitored in production, powering core business processes.",
        tags: ["SAP CPI", "iFlows", "Monitoring"],
      },
      {
        icon: "share",
        label: "Connectivity",
        title: "Multi-Protocol APIs",
        text: "Interfaces linking SAP with external systems end to end, across every major protocol.",
        tags: ["REST", "SOAP", "OData", "IDoc"],
      },
      {
        icon: "code",
        label: "Automation",
        title: "Custom Scripting",
        text: "Reusable Groovy scripts for message transformation, data enrichment and error handling.",
        tags: ["Groovy", "Transform", "Error Handling"],
      },
    ],
  },

  // ==========================
  // Footer
  // ==========================

  copyrightName: "Bhairav Singh",
};