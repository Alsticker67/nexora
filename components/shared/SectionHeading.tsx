import Reveal from "@/components/shared/Reveal";

/* Shared section heading used across the site so every section shares one
 * visual language — an accent bar + mono eyebrow, a bold display headline with
 * an optional gradient-highlighted "accent" word, and an optional sub-line.
 *
 * Each section passes its own `tone` so the site reads as a designed spectrum
 * as you scroll (sky → cyan → violet → blue → indigo → amber) while every
 * individual screen stays disciplined to a single accent.
 *
 * Usage:
 *   <SectionHeading eyebrow="Projects" title="Featured" accent="Work" tone="indigo" />
 */

export type Tone = "sky" | "cyan" | "violet" | "blue" | "indigo" | "amber" | "rose";

/* Literal class strings per tone — Tailwind's JIT only sees classes written
 * out in full, so these can't be assembled dynamically. */
const TONES: Record<Tone, { bar: string; eyebrow: string; gradient: string }> = {
  sky: {
    bar: "bg-sky-400",
    eyebrow: "text-sky-300",
    gradient: "from-sky-300 to-blue-500",
  },
  cyan: {
    bar: "bg-cyan-400",
    eyebrow: "text-cyan-300",
    gradient: "from-cyan-300 to-sky-500",
  },
  violet: {
    bar: "bg-violet-400",
    eyebrow: "text-violet-300",
    gradient: "from-violet-300 to-fuchsia-500",
  },
  blue: {
    bar: "bg-blue-400",
    eyebrow: "text-blue-300",
    gradient: "from-blue-300 to-indigo-500",
  },
  indigo: {
    bar: "bg-indigo-400",
    eyebrow: "text-indigo-300",
    gradient: "from-indigo-300 to-violet-500",
  },
  amber: {
    bar: "bg-amber-400",
    eyebrow: "text-amber-300",
    gradient: "from-amber-300 to-orange-500",
  },
  rose: {
    bar: "bg-rose-400",
    eyebrow: "text-rose-300",
    gradient: "from-rose-300 to-pink-500",
  },
};

type Props = {
  eyebrow: string;
  /** Main headline text (rendered in white display type). */
  title: string;
  /** Optional trailing words rendered in the tone gradient. */
  accent?: string;
  /** Optional supporting line beneath the headline. */
  description?: string;
  /** Layout: left-aligned (default) or centered. */
  align?: "left" | "center";
  /** Section signature colour. Defaults to the brand sky. */
  tone?: Tone;
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  tone = "sky",
}: Props) {
  const centered = align === "center";
  const t = TONES[tone];

  return (
    <Reveal
      variant="up"
      className={
        centered ? "mx-auto mb-14 max-w-2xl text-center" : "mb-14 max-w-2xl"
      }
    >
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className={`h-4 w-1.5 rounded-full ${t.bar}`} />
        <p className={`font-mono text-xs uppercase tracking-[0.28em] ${t.eyebrow}`}>
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-5xl lg:text-[3.5rem]">
        {title}
        {accent && (
          <>
            {" "}
            <span
              className={`bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}
            >
              {accent}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-zinc-400">{description}</p>
      )}
    </Reveal>
  );
}
