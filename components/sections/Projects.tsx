"use client";

import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <p className="mb-4 uppercase tracking-[8px] text-cyan-400">
          Projects
        </p>

        <h2 className="mb-16 text-5xl font-bold text-white">
          Featured Work
        </h2>


        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="
              group
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-950
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-400
              hover:shadow-2xl
              hover:shadow-cyan-500/10
              "
            >

              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />


                {/* Image Overlay */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950
                  via-transparent
                  opacity-60
                  "
                />

              </div>


              {/* Content */}
              <div className="flex flex-1 flex-col p-6">


                <h3 className="mb-4 text-2xl font-bold text-white">
                  {project.title}
                </h3>


                <p className="leading-8 text-slate-400">
                  {project.description}
                </p>


                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="
                      rounded-full
                      bg-cyan-500/10
                      px-3
                      py-1
                      text-sm
                      text-cyan-400
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>


                {/* Buttons */}
                <div className="mt-auto flex gap-4 pt-8">


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-700
                    py-3
                    text-white
                    transition-all
                    hover:border-cyan-400
                    hover:text-cyan-400
                    "
                  >
                  <Code2 size={18}/>
                    GitHub
                  </a>



                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-cyan-500
                    py-3
                    font-semibold
                    text-slate-950
                    transition-all
                    hover:bg-cyan-400
                    "
                  >
                    <ExternalLink size={18}/>
                    Demo
                  </a>


                </div>

              </div>


            </div>

          ))}

        </div>


      </div>
    </section>
  );
}