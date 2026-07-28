"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* Shared scroll-reveal wrapper.
 * One motion vocabulary for the whole page so every section animates the same
 * way. Drop <Reveal> around anything; pick a direction and (optionally) a delay.
 *
 *   variant  "up" | "down" | "left" | "right" | "zoom" | "fade"
 *   delay    stagger grid items with delay={i * 0.1}
 *   className forwarded to the motion element (e.g. "h-full" inside grids)
 *
 * Client component so it can live inside server sections without turning the
 * whole section into a client component. */

export type RevealVariant = "up" | "down" | "left" | "right" | "zoom" | "fade";

const offsets: Record<RevealVariant, { x?: number; y?: number; scale?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -60 },
  right: { x: 60 },
  zoom: { scale: 0.92 },
  fade: {},
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[variant] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
