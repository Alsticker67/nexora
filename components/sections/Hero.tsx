"use client";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/shared/Button";
import { personal } from "@/data/personal";

/* ------------------------------------------------------------------ */
/*  Typing subtitle — cycles through skills with a type/delete effect  */
/* ------------------------------------------------------------------ */
const typingWords = [
  "SAP Cloud Integration",
  "SAP Process Orchestration",
  "API Management",
];

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [len, setLen] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIndex % typingWords.length];
    let delay = deleting ? 45 : 85;
    if (!deleting && len === word.length) delay = 1400;
    if (deleting && len === 0) delay = 350;

    const id = setTimeout(() => {
      if (!deleting && len < word.length) setLen(len + 1);
      else if (!deleting && len === word.length) setDeleting(true);
      else if (deleting && len > 0) setLen(len - 1);
      else {
        setDeleting(false);
        setWordIndex((w) => w + 1);
      }
    }, delay);

    return () => clearTimeout(id);
  }, [len, deleting, wordIndex]);

  const word = typingWords[wordIndex % typingWords.length];

  return (
    <span className="font-mono text-lg text-emerald-400 md:text-xl">
      <span className="text-zinc-500">&gt; </span>
      {word.slice(0, len)}
      <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-emerald-400" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Code terminal — types itself out with a trailing cursor            */
/* ------------------------------------------------------------------ */
type Seg = { t: string; c?: string };

/* A small, on-brand editor palette. Distinct hues (keyword / class / function
 * / string / variable / punctuation) so the snippet reads like real syntax
 * highlighting instead of a flat block of one green. */
const KW = "text-teal-300"; // keywords: import, def, new, return
const TYPE = "text-yellow-200"; // classes / types
const FN = "text-emerald-300"; // function + method names
const STR = "text-lime-300"; // string literals
const VAR = "text-zinc-200"; // identifiers / variables
const PUNC = "text-zinc-500"; // brackets, operators, punctuation
const DIM = "text-zinc-400"; // import paths

const codeLines: Seg[][] = [
  [
    { t: "import", c: KW },
    { t: " com.sap.gateway.ip.core.customdev.util.", c: DIM },
    { t: "Message", c: TYPE },
  ],
  [
    { t: "import", c: KW },
    { t: " groovy.json.", c: DIM },
    { t: "JsonSlurper", c: TYPE },
  ],
  [],
  [
    { t: "def", c: KW },
    { t: " Message", c: TYPE },
    { t: " processData", c: FN },
    { t: "(", c: PUNC },
    { t: "Message", c: TYPE },
    { t: " message", c: VAR },
    { t: ") {", c: PUNC },
  ],
  [
    { t: "  def", c: KW },
    { t: " body ", c: VAR },
    { t: "= ", c: PUNC },
    { t: "message", c: VAR },
    { t: ".getBody", c: FN },
    { t: "(", c: PUNC },
    { t: "String", c: TYPE },
    { t: ")", c: PUNC },
  ],
  [
    { t: "  def", c: KW },
    { t: " order ", c: VAR },
    { t: "= ", c: PUNC },
    { t: "new", c: KW },
    { t: " JsonSlurper", c: TYPE },
    { t: "().parseText", c: FN },
    { t: "(", c: PUNC },
    { t: "body", c: VAR },
    { t: ")", c: PUNC },
  ],
  [],
  [
    { t: "  message", c: VAR },
    { t: ".setProperty", c: FN },
    { t: "(", c: PUNC },
    { t: '"OrderId"', c: STR },
    { t: ", ", c: PUNC },
    { t: "order.id", c: VAR },
    { t: ")", c: PUNC },
  ],
  [
    { t: "  message", c: VAR },
    { t: ".setHeader", c: FN },
    { t: "(", c: PUNC },
    { t: '"MessageType"', c: STR },
    { t: ", ", c: PUNC },
    { t: '"OrderRequest"', c: STR },
    { t: ")", c: PUNC },
  ],
  [],
  [
    { t: "  return", c: KW },
    { t: " message", c: VAR },
  ],
  [{ t: "}", c: PUNC }],
];

function CodeTerminal() {
  const { lineStarts, lineLens, total } = useMemo(() => {
    const lens = codeLines.map((l) => l.reduce((s, seg) => s + seg.t.length, 0));
    const starts: number[] = [];
    let acc = 0;
    for (let i = 0; i < lens.length; i++) {
      starts.push(acc);
      acc += lens[i] + 1;
    }
    return { lineStarts: starts, lineLens: lens, total: acc };
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c >= total ? c : c + 1));
    }, 32);
    return () => clearInterval(id);
  }, [total]);

  let activeIndex = 0;
  for (let i = 0; i < lineStarts.length; i++) {
    if (count >= lineStarts[i]) activeIndex = i;
  }

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-emerald-500/20 bg-zinc-950/80 shadow-[0_0_60px_rgba(16,185,129,0.15)] backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-zinc-400">
          OrderEnrichment.groovy
        </span>
        <span className="ml-auto rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
          SAP CPI
        </span>
      </div>

      <div className="min-h-[230px] overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed">
        {codeLines.map((line, i) => {
          if (count < lineStarts[i]) return null;

          let budget = Math.max(
            0,
            Math.min(count, lineStarts[i] + lineLens[i]) - lineStarts[i]
          );

          return (
            <div key={i} className="flex whitespace-pre">
              <span className="mr-5 w-5 select-none text-right text-zinc-700">
                {i + 1}
              </span>
              <span>
                {line.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  line.map((seg, j) => {
                    if (budget <= 0) return null;
                    const shown = seg.t.slice(0, budget);
                    budget -= shown.length;
                    return (
                      <span key={j} className={seg.c ?? "text-zinc-200"}>
                        {shown}
                      </span>
                    );
                  })
                )}
                {i === activeIndex && (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-[2px] animate-pulse bg-emerald-400" />
                )}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-white/5 bg-zinc-900/60 px-4 py-2.5 font-mono text-[11px] text-zinc-500">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Deployed to SAP Integration Suite
        </span>
        <span>UTF-8 · LF</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small status pill                                                  */
/* ------------------------------------------------------------------ */
function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating tech chip — drifts gently beside the terminal             */
/* ------------------------------------------------------------------ */
function FloatChip({
  label,
  className,
  delay = 0,
}: {
  label: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.span
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-20 hidden items-center gap-2 rounded-xl border border-emerald-400/25 bg-zinc-950/80 px-3.5 py-2 font-mono text-xs text-emerald-200 shadow-[0_10px_30px_rgba(16,185,129,0.2)] backdrop-blur-md lg:flex ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
      {label}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0b0d] pt-24 pb-20 md:pb-28">
      {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(rgba(16,185,129,0.15)_1px,transparent_1px),linear-gradient(to_right,rgba(16,185,129,0.15)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Glows — slow breathing pulse for ambient motion */}
      <motion.div
        animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[180px]"
      />
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[180px]"
      />

      {/* Fine film grain — a premium texture that lifts the flat dark base. */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]"
      />

      <Container>
        <div className="relative z-10 grid min-h-[82vh] items-center gap-12 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          {/* ---------------- Left ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Editorial kicker — availability + discipline label */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {personal.available && (
                <Pill>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for opportunities
                </Pill>
              )}
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
                Enterprise&nbsp;Integration
              </span>
            </div>

            {/* Name — editorial display, monochrome two-tone (no coloured fill) */}
            <h1 className="mt-7 text-[2.75rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-zinc-50 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="block">Bhairav</span>
              <span className="block text-zinc-500">Singh</span>
            </h1>

            {/* Role — crafted mono label */}
            <div className="mt-6 flex items-center gap-3 text-zinc-300">
              <span className="h-px w-10 bg-emerald-400/60" />
              <span className="font-mono text-sm font-medium uppercase tracking-[0.2em]">
                SAP Integration Developer
              </span>
            </div>

            {/* Typing line */}
            <div className="mt-6 h-8">
              <TypingText />
            </div>

            {/* Headline */}
            <h2 className="mt-8 max-w-xl text-2xl font-bold leading-snug text-zinc-50 md:text-3xl">
              {personal.headline}
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400">
              {personal.tagline}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#projects">
                <span className="inline-flex items-center gap-2">
                  View Projects <ArrowRight size={16} />
                </span>
              </Button>
              <Button href={personal.resume} variant="secondary">
                <span className="inline-flex items-center gap-2">
                  <Download size={16} /> Download Resume
                </span>
              </Button>
            </div>
          </motion.div>

          {/* ---------------- Right ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating tech chips that drift beside the terminal (kept clear of the card) */}
            <FloatChip label="Groovy" className="-left-3 top-[52%]" delay={0} />
            <FloatChip label="OData · REST" className="-right-3 bottom-14" delay={1.2} />

            <div className="w-full max-w-lg">
              {/* Editor context bar — sets the scene above the terminal
                  without repeating the name/role shown on the left. */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 flex items-center justify-between rounded-xl border border-emerald-500/15 bg-zinc-950/60 px-4 py-3 backdrop-blur-xl"
              >
                <span className="flex items-center gap-2.5 font-mono text-xs text-zinc-400">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/15 font-bold text-emerald-300">
                    {">_"}
                  </span>
                  ~/sap-cpi/iflows
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  live
                </span>
              </motion.div>

              {/* Terminal */}
              <CodeTerminal />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
