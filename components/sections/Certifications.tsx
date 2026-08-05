import {
  BadgeCheck,
  Cloud,
  Database,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  certifications,
  type Certification,
} from "@/data/certifications";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/ui/Container";

/* Icon tile glyphs — kept here so the data file stays plain data. */
const CERT_ICONS = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  cloud: Cloud,
  database: Database,
} as const;

/* Each credential gets its own accent so the grid reads as a set instead of
 * four identical tiles — a cohesive cool quartet (sky / cyan / indigo / blue)
 * that stays on-palette rather than a warm rainbow. */
const CERT_ICON_STYLES = {
  shield: "bg-amber-500/10 text-amber-300 ring-amber-400/20 group-hover:bg-amber-500/20",
  sparkles: "bg-cyan-500/10 text-cyan-300 ring-cyan-400/20 group-hover:bg-cyan-500/20",
  cloud: "bg-indigo-500/10 text-indigo-300 ring-indigo-400/20 group-hover:bg-indigo-500/20",
  database: "bg-blue-500/10 text-blue-300 ring-blue-400/20 group-hover:bg-blue-500/20",
} as const;

export default function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const rest = certifications.filter((c) => c !== featured);

  return (
    <section id="certifications" className="py-20 md:py-28">
      <Container>

        <SectionHeading
          eyebrow="Certifications & Recognition"
          title="Globally credentialed."
          accent="Industry recognized."
          description="SAP and IBM certifications backed by a Microsoft cloud credential — plus recognition for consistently delivering integration work that ships."
          tone="amber"
        />

        <div className="space-y-6">

          {/* Spotlight — the flagship credential */}
          {featured && <FeaturedCard cert={featured} />}

          {/* Remaining certifications */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((cert, i) => (
              <Reveal key={cert.title} variant="up" delay={i * 0.1} className="h-full">
                <CertCard cert={cert} />
              </Reveal>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}


/* ── Large spotlight card for the flagship certification ── */
function FeaturedCard({ cert }: { cert: Certification }) {
  const Icon = CERT_ICONS[cert.icon];

  return (
    <Reveal variant="up">
      <article
        className="
          group relative overflow-hidden rounded-3xl border border-amber-400/25
          bg-gradient-to-br from-amber-500/10 via-zinc-900 to-zinc-900 p-8 md:p-10
          transition-colors duration-300 hover:border-amber-400/60
        "
      >
        {/* soft corner glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-8">

          {/* Icon tile */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-zinc-950 shadow-lg shadow-amber-500/25">
            <Icon size={30} />
          </div>

          <div className="flex-1">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Spotlight
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-zinc-50 md:text-3xl">
              {cert.title}
            </h3>

            <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400">
              <span className="font-semibold text-amber-300">{cert.issuer}</span>
              {cert.issued && (
                <>
                  <span className="text-zinc-600">•</span>
                  <span>{cert.issued}</span>
                </>
              )}
            </p>

            {cert.summary && (
              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                {cert.summary}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                <BadgeCheck size={14} />
                Verified Credential
              </span>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1.5
                    text-xs font-semibold text-zinc-950 transition-all duration-300
                    hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]
                  "
                >
                  View Credential
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

        </div>
      </article>
    </Reveal>
  );
}


/* ── Standard certification card ── */
function CertCard({ cert }: { cert: Certification }) {
  const Icon = CERT_ICONS[cert.icon];

  return (
    <article
      className="
        group flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-7
        transition-all duration-300
        hover:-translate-y-1.5 hover:border-amber-400/60
        hover:shadow-[0_20px_50px_rgba(251,191,36,0.12)]
      "
    >
      {/* Icon tile + badge */}
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset transition-colors duration-300 ${CERT_ICON_STYLES[cert.icon]}`}
        >
          <Icon size={22} />
        </div>

        {cert.badge && (
          <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
            {cert.badge}
          </span>
        )}
      </div>

      {/* Title — min-height reserves 2 lines so single- and double-line
          titles produce the same block height and every divider aligns. */}
      <h3 className="mt-5 flex min-h-[3.25rem] items-start text-lg font-bold leading-snug text-zinc-50 transition-colors duration-300 group-hover:text-amber-400">
        {cert.title}
      </h3>

      <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-400">
        <span className="font-medium text-amber-300/90">{cert.issuer}</span>
        {cert.issued && (
          <>
            <span className="text-zinc-600">•</span>
            <span>{cert.issued}</span>
          </>
        )}
      </p>

      {/* Footer — pinned to the bottom (mt-auto) with a uniform "Verified"
          label on every card so all footers line up perfectly. */}
      <div className="mt-auto flex items-center justify-between border-t border-zinc-800 pt-5">
        <span className="flex items-center gap-1.5 text-xs text-zinc-500">
          <BadgeCheck size={14} className="text-amber-400/70" />
          Verified Credential
        </span>

        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            View
            <ExternalLink size={14} />
          </a>
        ) : (
          <span className="text-sm font-medium text-zinc-600">—</span>
        )}
      </div>
    </article>
  );
}
