"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />

      <Container>
        <div className="grid min-h-[80vh] items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-lg text-cyan-400">
              👋 Hello, I'm
            </p>

            <h1 className="text-6xl font-extrabold text-white md:text-8xl">
              {personal.name}
            </h1>

            <h2 className="mt-6 text-3xl font-semibold text-slate-300">
              {personal.designation}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              {personal.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>Download Resume</Button>
              <Button variant="secondary">
                View Projects
              </Button>
            </div>

          <div className="mt-10 flex flex-wrap gap-3">
  {personal.heroSkills.map((skill) => (
    <Badge key={skill} text={skill} />
  ))}
</div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="flex h-[320px] w-[320px] md:h-[420px] md:w-[420px] items-center justify-center rounded-full">
              <span className="text-center text-2xl md:text-3xl font-bold text-cyan-400 px-6">
                SAP
                <br />
                Integration
                <br />
                Architecture
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}