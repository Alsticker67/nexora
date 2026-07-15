"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-32">

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-[140px]" />

      <Container>
        <div className="grid min-h-[85vh] items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-5 text-lg font-medium text-cyan-400">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl xl:text-8xl">
              {personal.name}
            </h1>

            <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-snug text-slate-300 md:text-3xl">
              {personal.designation}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              {personal.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button href={personal.resume}>
                Download Resume
              </Button>

              <Button href="#projects" variant="secondary">
                View Projects
              </Button>
            </div>

            <div className="mt-12 flex max-w-2xl flex-wrap gap-3">
              {personal.heroSkills.map((skill) => (
                <Badge
                  key={skill}
                  text={skill}
                />
              ))}
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">

              {/* Future Profile Photo */}

              {/*
              <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-cyan-400 shadow-lg">
                <Image
                  src="/images/profile.jpg"
                  alt={personal.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              */}

              {/* Placeholder */}

              <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full border-4 border-cyan-400 bg-cyan-500/10 text-5xl font-bold text-cyan-400 shadow-lg">
                {personal.shortName}
              </div>

              <h3 className="text-center text-3xl font-bold text-white">
                {personal.name}
              </h3>

              <p className="mt-2 text-center text-slate-400">
                SAP Integration Developer
              </p>

              <div className="mt-8 space-y-3">

                <div className="rounded-xl bg-slate-950 px-5 py-4 text-slate-300">
                  ✔ SAP Integration Suite (CPI)
                </div>

                <div className="rounded-xl bg-slate-950 px-5 py-4 text-slate-300">
                  ✔ SAP PI/PO Development
                </div>

                <div className="rounded-xl bg-slate-950 px-5 py-4 text-slate-300">
                  ✔ SAP BTP Integration
                </div>

                <div className="rounded-xl bg-slate-950 px-5 py-4 text-slate-300">
                  ✔ REST & SOAP APIs
                </div>

                <div className="rounded-xl bg-slate-950 px-5 py-4 text-slate-300">
                  ✔ Groovy Scripting
                </div>

              </div>

              <div className="mt-8 rounded-xl border border-cyan-400/30 bg-cyan-500/10 py-3 text-center font-semibold text-cyan-400">
                Available for Opportunities
              </div>

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}