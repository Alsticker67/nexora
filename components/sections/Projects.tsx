"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Code2, Lock } from "lucide-react";
import { projects, projectFilters, type Project } from "@/data/projects";
import Reveal from "@/components/shared/Reveal";
import ProjectVisual from "@/components/shared/ProjectVisual";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/ui/Container";

/* How many tech chips to show before collapsing the rest into a "+N" chip. */
const MAX_TECH = 3;

/* Consistent gradient headers so every card gets the same clean treatment
 * (no duplicated screenshots). Picked by index so cards read as a set while
 * still feeling distinct. */
const CARD_GRADIENTS = [
  "from-emerald-500/25 via-zinc-900 to-zinc-900",
  "from-teal-500/25 via-zinc-900 to-zinc-900",
  "from-yellow-500/20 via-zinc-900 to-zinc-900",
  "from-rose-500/25 via-zinc-900 to-zinc-900",
  "from-teal-600/25 via-zinc-900 to-zinc-900",
  "from-emerald-400/25 via-zinc-900 to-zinc-900",
];

export default function Projects() {
  const [active, setActive] = useState<(typeof projectFilters)[number]["id"]>("all");

  /* Only show a tab if it's "all" or at least one project uses it — so the
   * Personal tab appears automatically the moment a personal project is added. */
  const tabs = useMemo(
    () =>
      projectFilters.filter(
        (f) => f.id === "all" || projects.some((p) => p.category === f.id)
      ),
    []
  );

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="bg-[#0a0b0d] py-20 md:py-28">
      <Container>

        {/* Heading — left aligned to match the other sections */}
        <SectionHeading
          eyebrow="Projects"
          title="Featured"
          accent="Work"
          description="A selection of enterprise SAP integrations and personal builds — from live monitoring dashboards to end-to-end platform architecture."
        />


        {/* Filter tabs */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`
                  rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "border-emerald-400 bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-500/20"
                      : "border-zinc-700 bg-zinc-950/60 text-zinc-300 hover:border-emerald-400/60 hover:text-emerald-300"
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>


        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal
              key={project.title}
              variant="zoom"
              delay={(i % 3) * 0.1}
              className="h-full"
            >
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}


function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shown = project.tech.slice(0, MAX_TECH);
  const overflow = project.tech.length - shown.length;
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden rounded-3xl
        border border-zinc-800 bg-zinc-900
        transition-all duration-500
        hover:-translate-y-2 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/10
      "
    >
      {/* Header visual — an animated, image-free illustration per project */}
      <div className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />

        {/* animated illustration, gently lifted on hover */}
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
          <ProjectVisual variant={project.visual} />
        </div>

        {/* soft glow that lifts on hover */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

        {/* bottom fade so the chips stay legible over the art */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-900 to-transparent" />

        {/* Category breadcrumb — bottom-left */}
        <span className="absolute bottom-4 left-4 rounded-md bg-zinc-950/70 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-emerald-300 backdrop-blur-sm">
          {project.tag}
        </span>

        {/* Status badge — top-right */}
        <span className="absolute right-4 top-4 rounded-full border border-emerald-400/30 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm">
          {project.status}
        </span>
      </div>


      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-zinc-50 transition-colors duration-300 group-hover:text-emerald-400">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {project.description}
        </p>


        {/* Tech chips with "+N" overflow */}
        <div className="mt-5 flex flex-wrap gap-2">
          {shown.map((item) => (
            <span
              key={item}
              className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
            >
              {item}
            </span>
          ))}

          {overflow > 0 && (
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
              +{overflow}
            </span>
          )}
        </div>


        {/* Footer — links, or an "Internal" note for NDA work */}
        <div className="mt-auto flex items-center justify-between border-t border-zinc-800/70 pt-5">
          {project.internal || (!project.github && !project.demo) ? (
            <span className="flex items-center gap-2 text-sm text-zinc-500">
              <Lock size={15} />
              Internal · {project.status}
            </span>
          ) : (
            <>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-emerald-400"
                >
                  <Code2 size={16} />
                  Code
                </a>
              ) : (
                <span />
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-1.5 text-sm font-semibold text-emerald-400"
                >
                  Live Demo
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
