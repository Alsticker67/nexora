"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  LayoutTemplate,
  Share2,
  Wrench,
  Cpu,
} from "lucide-react";
import type { ComponentType } from "react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { skillCategories, marquee, type Skill } from "@/data/skill";

/* Map data-file icon keys -> components (keeps skill.ts plain data) */
type IconType = ComponentType<{ size?: number; className?: string }>;
const iconMap: Record<string, IconType> = {
  cloud: Cloud,
  code: Code2,
  layout: LayoutTemplate,
  share: Share2,
  tool: Wrench,
};

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

/* Normalise a Skill (string | object) into { label, featured } */
function normalize(skill: Skill) {
  return typeof skill === "string"
    ? { label: skill, featured: false }
    : { label: skill.label, featured: !!skill.featured };
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#0a0b0d] py-20 md:py-28">
      {/* Ambient glows */}
      <div className="absolute -left-40 top-24 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />
      <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[160px]" />

      <Container className="relative">
        {/* Header — shared section heading for a consistent site-wide look */}
        <SectionHeading
          eyebrow="Skills"
          title="The tools behind the"
          accent="integrations."
          description="The platforms, protocols and languages I reach for to design and deliver enterprise SAP integrations — alongside the modern web stack I build with."
        />

        {/* Cards — flex-wrap + justify-center so the final short row
            stays centered under the grid instead of leaving an empty slot */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] ?? Cpu;
            return (
              <motion.div
                key={category.title}
                {...reveal}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10 sm:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]"
              >
                {/* Accent bar reveals on hover */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* Header row: icon badge + index */}
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-zinc-950 shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-2xl font-bold text-zinc-50/10 transition-colors duration-300 group-hover:text-emerald-400/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-zinc-50">
                  {category.title}
                </h3>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const { label, featured } = normalize(skill);
                    return (
                      <span
                        key={label}
                        className={
                          featured
                            ? "rounded-lg border border-emerald-400/40 bg-emerald-500/15 px-3 py-1.5 text-sm font-medium text-emerald-200 transition-colors duration-300 hover:bg-emerald-500/25"
                            : "rounded-lg border border-white/5 bg-zinc-950/60 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
                        }
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ticker — contained + aligned with the cards. Per-item margin (not a
            container gap) keeps both halves identical so the loop is seamless */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/30 py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...marquee, ...marquee].map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="mx-1.5 whitespace-nowrap rounded-full border border-white/5 bg-zinc-950/50 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
