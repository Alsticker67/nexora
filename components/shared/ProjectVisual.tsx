"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

/* Animated, image-free card headers.
 *
 * Each variant is a self-contained looping SVG that hints at the kind of work
 * the project is (a chart, a network, a pipeline, a code window …). They share
 * one viewBox and colour set so the cards read as a family. `slice`
 * preserveAspectRatio lets the art bleed to fill the 400×176 header on any
 * card width. Motion loops forever and pauses cheaply off-screen.
 */

type Variant = NonNullable<Project["visual"]>;

const W = 400;
const H = 176;

/* Shared, gentle infinite ease. */
const loop = (duration: number, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  ease: "easeInOut" as const,
});

export default function ProjectVisual({ variant = "network" }: { variant?: Variant }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pv-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="pv-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>

      {variant === "chart" && <Chart />}
      {variant === "line" && <Line />}
      {variant === "network" && <Network />}
      {variant === "flow" && <Flow />}
      {variant === "code" && <Code />}
      {variant === "api" && <Api />}
    </svg>
  );
}

/* ── Bars growing and settling, like a live monitoring dashboard ── */
function Chart() {
  const bars = [
    { x: 70, h: 46 },
    { x: 122, h: 84 },
    { x: 174, h: 62 },
    { x: 226, h: 104 },
    { x: 278, h: 72 },
  ];
  const base = 140;
  const bw = 30;

  return (
    <g>
      <line x1="52" y1={base} x2="348" y2={base} stroke="#27272a" strokeWidth="2" />
      {bars.map((b, i) => (
        <motion.rect
          key={b.x}
          x={b.x}
          width={bw}
          rx="4"
          fill="url(#pv-stroke)"
          initial={{ height: 8, y: base - 8 }}
          animate={{ height: [12, b.h, b.h * 0.7, b.h], y: [base - 12, base - b.h, base - b.h * 0.7, base - b.h] }}
          transition={loop(3.2, i * 0.18)}
        />
      ))}
    </g>
  );
}

/* ── A trend line drawing itself over a soft area fill ── */
function Line() {
  const line = "M 40 130 L 100 96 L 160 112 L 220 60 L 280 84 L 350 40";
  const area = `${line} L 350 150 L 40 150 Z`;

  return (
    <g>
      {[60, 90, 120].map((y) => (
        <line key={y} x1="30" y1={y} x2="360" y2={y} stroke="#27272a" strokeWidth="1" />
      ))}
      <motion.path
        d={area}
        fill="url(#pv-area)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={loop(5, 0.4)}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="url(#pv-stroke)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={loop(5)}
      />
    </g>
  );
}

/* ── Pulsing nodes wired together — an integration landscape ── */
function Network() {
  const nodes = [
    { x: 70, y: 60 },
    { x: 70, y: 120 },
    { x: 200, y: 44 },
    { x: 200, y: 132 },
    { x: 330, y: 88 },
  ];
  const center = { x: 200, y: 88 };
  const edges = [
    [0, 2], [1, 3], [2, 4], [3, 4], [0, 3], [1, 2],
  ];

  return (
    <g>
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#22d3ee"
          strokeWidth="1.5"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.6, 0.15] }}
          transition={loop(3, i * 0.3)}
        />
      ))}
      <circle cx={center.x} cy={center.y} r="6" fill="#0ea5e9" opacity="0.5" />
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="10"
            fill="#22d3ee"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.35, 0.1], r: [10, 16, 10] }}
            transition={loop(2.6, i * 0.35)}
          />
          <circle cx={n.x} cy={n.y} r="6" fill="url(#pv-stroke)" />
        </g>
      ))}
    </g>
  );
}

/* ── A message travelling down a pipeline of stages — an iFlow ── */
function Flow() {
  const stages = [60, 165, 270];
  const boxY = 74;
  const bw = 70;
  const bh = 44;
  const midY = boxY + bh / 2;

  return (
    <g>
      <line x1="60" y1={midY} x2="340" y2={midY} stroke="#27272a" strokeWidth="2" />
      {stages.map((x, i) => (
        <motion.rect
          key={x}
          x={x}
          y={boxY}
          width={bw}
          height={bh}
          rx="8"
          fill="#0b1220"
          stroke="url(#pv-stroke)"
          strokeWidth="2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={loop(3, i * 0.6)}
        />
      ))}
      <motion.circle
        r="7"
        fill="#22d3ee"
        initial={{ cx: 60, cy: midY }}
        animate={{ cx: [70, 340], cy: midY }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 }}
      />
    </g>
  );
}

/* ── A terminal / editor window with lines typing themselves ── */
function Code() {
  const lines = [
    { y: 74, w: 150 },
    { y: 94, w: 210 },
    { y: 114, w: 120 },
    { y: 134, w: 180 },
  ];

  return (
    <g>
      <rect x="60" y="40" width="280" height="112" rx="10" fill="#0b1220" stroke="#27272a" strokeWidth="2" />
      <line x1="60" y1="58" x2="340" y2="58" stroke="#27272a" strokeWidth="2" />
      <circle cx="74" cy="49" r="3.5" fill="#f87171" />
      <circle cx="86" cy="49" r="3.5" fill="#fbbf24" />
      <circle cx="98" cy="49" r="3.5" fill="#34d399" />
      {lines.map((l, i) => (
        <motion.rect
          key={l.y}
          x="76"
          y={l.y}
          height="6"
          rx="3"
          fill="url(#pv-stroke)"
          initial={{ width: 0, opacity: 0.4 }}
          animate={{ width: [0, l.w, l.w, 0], opacity: [0.4, 1, 1, 0.4] }}
          transition={loop(4, i * 0.4)}
        />
      ))}
    </g>
  );
}

/* ── Stacked API endpoint rows with a pulsing "200 OK" indicator ── */
function Api() {
  const rows = [58, 90, 122];
  return (
    <g>
      {rows.map((y, i) => (
        <g key={y}>
          <rect x="60" y={y} width="280" height="26" rx="6" fill="#0b1220" stroke="#27272a" strokeWidth="1.5" />
          <rect x="72" y={y + 9} width="44" height="8" rx="4" fill="url(#pv-stroke)" />
          <rect x="128" y={y + 9} width="120" height="8" rx="4" fill="#27272a" />
          <motion.circle
            cx="322"
            cy={y + 13}
            r="6"
            fill="#34d399"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={loop(2, i * 0.4)}
          />
        </g>
      ))}
    </g>
  );
}
