"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Cloud,
  Workflow,
  Code2,
  Database,
  Share2,
  Briefcase,
  BadgeCheck,
  Zap,
  Check,
  Activity,
  LogIn,
  Unlock,
  ShieldCheck,
  Shuffle,
  Lock,
  FileSignature,
  Server,
  PenLine,
  Route,
  ArrowRight,
  Send,
  Cable,
} from "lucide-react";
import type { ComponentType } from "react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { personal } from "@/data/personal";

const about = personal.about;

/* Map data-file icon keys -> components (keeps personal.ts plain data) */
type IconType = ComponentType<{ size?: number; className?: string }>;
const iconMap: Record<string, IconType> = {
  cpu: Cpu,
  cloud: Cloud,
  workflow: Workflow,
  code: Code2,
  database: Database,
  share: Share2,
  briefcase: Briefcase,
  badge: BadgeCheck,
  zap: Zap,
  // iFlow step icons
  login: LogIn,
  decrypt: Unlock,
  verify: ShieldCheck,
  map: Shuffle,
  encrypt: Lock,
  sign: FileSignature,
  receiver: Server,
  modify: PenLine,
  route: Route,
  partner: Send,
  sftp: Server,
  adapter: Cable,
  s4hana: Database,
};

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

/* Small mono section tag, e.g. "// 01 · profile" */
function Tag({ index, label }: { index: string; label: string }) {
  return (
    <p className="font-mono text-xs tracking-wide text-zinc-500">
      <span className="text-emerald-400">// {index}</span> · {label}
    </p>
  );
}

/* Counts up from 0 to `to` the first time it scrolls into view */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  return (
    <motion.span
      onViewportEnter={() => {
        if (started.current) return;
        started.current = true;
        const duration = 900;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(Math.round(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
      viewport={{ once: true }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

/* // 02 — Layered architecture diagram.
   Three labelled stages (Source → Integration Layer → Target), each holding a
   short vertical stack of nodes, separated by flowing arrows. A light-beam
   sweeps across the whole thing. Chunking 7 nodes into 3 columns kills the
   "cramped strip" feel and reads like a real architecture map. */
function StagePipeline({
  stages,
}: {
  stages: {
    label: string;
    nodes: { icon: string; title: string; sub: string }[];
  }[];
}) {
  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl">
      <div className="relative z-10 flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {stages.map((stage, si) => (
          <Fragment key={stage.label}>
            {/* Stage column */}
            <div className="flex flex-1 flex-col rounded-2xl border border-emerald-400/15 bg-zinc-950/50 p-4">
              <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-400/70">
                {stage.label}
              </p>
              <div className="flex flex-1 flex-col justify-center gap-2.5">
                {stage.nodes.map(({ icon, title, sub }) => {
                  const Icon = iconMap[icon] ?? Cpu;
                  return (
                    <div
                      key={title}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/60 px-3 py-2.5 transition-colors duration-300 hover:border-emerald-400/40"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-500/15 text-emerald-300">
                        <Icon size={16} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-zinc-50">
                          {title}
                        </p>
                        <p className="truncate font-mono text-[10px] text-zinc-500">
                          {sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Flowing connector between stages */}
            {si < stages.length - 1 && (
              <motion.div
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: si * 0.35,
                }}
                className="flex shrink-0 items-center justify-center px-1 text-emerald-400"
              >
                <ArrowRight size={22} className="hidden lg:block" />
                <ArrowRight size={22} className="block rotate-90 lg:hidden" />
              </motion.div>
            )}
          </Fragment>
        ))}
      </div>

      {/* Sweeping scanner beam */}
      <motion.div
        aria-hidden
        animate={{ x: ["-30%", "150%"] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-y-0 z-20 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent"
      />
    </div>
  );
}

/* // 03 — Vertical step timeline for a single iFlow.
   A glowing marker walks down the spine, one step at a time — a totally
   different visual language from the horizontal architecture above. */
function VerticalTimeline({
  steps,
}: {
  steps: { icon: string; title: string; sub: string }[];
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % steps.length),
      1000
    );
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <div className="relative mt-6">
      {/* Spine — runs through the centre of the icon column (h-11 → 22px) */}
      <span className="pointer-events-none absolute bottom-3 left-[21px] top-3 w-px bg-gradient-to-b from-emerald-400/40 via-emerald-400/20 to-transparent" />

      <div className="flex flex-col gap-3">
        {steps.map(({ icon, title, sub }, i) => {
          const Icon = iconMap[icon] ?? Cpu;
          const isActive = i === active;
          return (
            <div key={title} className="relative flex items-center gap-4">
              <span
                className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${
                  isActive
                    ? "scale-110 border-emerald-400/70 bg-emerald-500/20 text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,0.3)]"
                    : "border-emerald-400/20 bg-zinc-950 text-emerald-400"
                }`}
              >
                <Icon size={18} />
              </span>
              <div
                className={`flex flex-1 items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-colors duration-500 ${
                  isActive
                    ? "border-emerald-400/40 bg-emerald-500/[0.06]"
                    : "border-white/5 bg-zinc-950/50"
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-zinc-50">
                    {title}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[10px] text-zinc-500">
                    {sub}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-zinc-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Cycling "message processed" feed line */
function LiveFeed({ items }: { items: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % items.length), 1800);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="mt-5 flex h-6 items-center overflow-hidden rounded-lg border border-white/5 bg-zinc-950/60 px-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="flex w-full items-center gap-2 font-mono text-[11px]"
        >
          <span className="text-emerald-400">▸</span>
          <span className="text-zinc-300">{items[i]}</span>
          <span className="ml-auto flex items-center gap-1 text-emerald-400">
            <Check size={11} /> processed
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0a0b0d] py-20 md:py-28">
      {/* Glows */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[160px]" />

      <Container>
        {/* Header — shared section heading for a consistent site-wide look */}
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title.lead}
          accent={about.title.accent}
        />

        {/* Row 1 — Who I am + side cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Who I am */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/5 bg-zinc-900/40 p-8 backdrop-blur lg:col-span-2"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400">
                  <Code2 size={20} />
                </span>
                <h3 className="text-xl font-bold text-zinc-50">Who I am</h3>
              </div>
              <Tag index="01" label="profile" />
            </div>

            <p className="text-base leading-8 text-zinc-400">{about.bio}</p>

            {/* Focus areas */}
            <div className="mt-8 flex flex-wrap gap-3">
              {about.focusAreas.map(({ icon, label }) => {
                const Icon = iconMap[icon] ?? Cpu;
                return (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/5 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                  >
                    <Icon size={16} className="text-emerald-400" />
                    {label}
                  </span>
                );
              })}
            </div>

            {/* Strengths */}
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Strengths
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {about.strengths.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/5 px-3.5 py-1.5 text-sm text-zinc-300"
                >
                  <Check size={14} className="text-emerald-400" />
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Side cards */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Currently at */}
            <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Currently at
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400">
                  <Briefcase size={20} />
                </span>
                <div>
                  <p className="font-semibold text-zinc-50">
                    {about.currentRole.company}
                  </p>
                  <p className="text-sm text-zinc-400">
                    {about.currentRole.role} · Since {about.currentRole.since}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400">
                  <BadgeCheck size={20} />
                </span>
                <div>
                  <p className="text-3xl font-black text-emerald-400">
                    <CountUp to={about.certifications.count} />
                  </p>
                  <p className="text-sm text-zinc-400">
                    {about.certifications.label}
                  </p>
                </div>
              </div>
            </div>

            {/* Specialty */}
            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 backdrop-blur">
              <motion.div
                aria-hidden
                animate={{ x: ["-120%", "220%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.2,
                }}
                className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent"
              />
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/15 text-emerald-300">
                  <Zap size={20} />
                </span>
                <div>
                  <p className="text-lg font-bold text-zinc-50">
                    {about.specialty.title}
                  </p>
                  <p className="text-sm text-emerald-300/80">
                    {about.specialty.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2 — Integration Monitor (unique centerpiece) */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.6 }}
          className="relative mt-6 overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-8 backdrop-blur"
        >
          {/* Corner ticks */}
          <span className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-emerald-400/30" />
          <span className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-emerald-400/30" />
          <span className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-emerald-400/30" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-emerald-400/30" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400">
                <Activity size={20} />
              </span>
              <div>
                <Tag index="02" label="architecture" />
                <h3 className="mt-1 text-2xl font-bold text-zinc-50">
                  End-to-End Integration Architecture
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Streaming
            </span>
          </div>

          {/* PI/PO + CPI share the same model — short explainer */}
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
            {about.monitor.note}
          </p>

          {/* Unified PI/PO + CPI pipeline — layered stage diagram */}
          <div className="mt-8">
            <div className="rounded-2xl border border-white/5 bg-zinc-950/40 p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-zinc-50">
                  {about.monitor.architecture.title}
                </h4>
                <p className="font-mono text-[11px] text-emerald-400">
                  ● online
                </p>
              </div>
              <StagePipeline stages={about.monitor.architecture.stages} />
            </div>
          </div>

          {/* Live feed */}
          <div className="mt-6">
            <LiveFeed items={about.monitor.feed} />
          </div>
        </motion.div>

        {/* Row 3 — Reference iFlow */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.6 }}
          className="relative mt-6 overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-8 backdrop-blur"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400">
                <ShieldCheck size={20} />
              </span>
              <div>
                <Tag index="03" label="iflow" />
                <h3 className="mt-1 text-2xl font-bold text-zinc-50">
                  {about.monitor.showcase.title}
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Secure
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-white/5 bg-zinc-950/40 p-6">
            <VerticalTimeline steps={about.monitor.showcase.steps} />
          </div>
        </motion.div>

        {/* Row 4 — Capability cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {about.highlights.map(({ icon, label, title, text, tags }, i) => {
            const Icon = iconMap[icon] ?? Workflow;
            return (
              <motion.div
                key={title}
                {...reveal}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Accent bar reveals on hover */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon + label */}
                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/20">
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-400/70">
                    {label}
                  </span>
                </div>

                {/* Title + description */}
                <h4 className="relative mt-6 text-xl font-bold text-zinc-50">
                  {title}
                </h4>
                <p className="relative mt-2.5 text-sm leading-6 text-zinc-400">
                  {text}
                </p>

                {/* Skill / protocol chips */}
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/5 bg-zinc-950/60 px-3 py-1 font-mono text-[11px] text-zinc-400 transition-colors group-hover:border-emerald-400/20 group-hover:text-emerald-300/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
