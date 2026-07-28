import Reveal from "@/components/shared/Reveal";

/* Shared section heading used across the site so every section shares one
 * visual language: an emerald accent bar + mono eyebrow, a bold headline with
 * an optional gradient-highlighted "accent" word, and an optional sub-line.
 *
 * Usage:
 *   <SectionHeading eyebrow="Projects" title="Featured" accent="Work" align="center" />
 */

type Props = {
  eyebrow: string;
  /** Main headline text (rendered in white). */
  title: string;
  /** Optional trailing words rendered in the emerald→teal gradient. */
  accent?: string;
  /** Optional supporting line beneath the headline. */
  description?: string;
  /** Layout: left-aligned (default) or centered. */
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <Reveal
      variant="up"
      className={
        centered ? "mx-auto mb-14 max-w-2xl text-center" : "mb-14 max-w-2xl"
      }
    >
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-4 w-1.5 rounded-full bg-emerald-400" />
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-400">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-5xl lg:text-[3.5rem]">
        {title}
        {accent && (
          <>
            {" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent">
              {accent}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}
