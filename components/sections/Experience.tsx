import { Building2, Calendar, CircleDot, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/ui/Container";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0a0b0d] py-20 md:py-28">
      <Container>

        {/* Heading */}
        <SectionHeading eyebrow="Experience" title="Professional" accent="Journey" />


        {/* Timeline — single left rail, cards stacked down the right */}
        <div className="relative border-l-2 border-emerald-500/30 pl-8 md:pl-10">

          {experience.map((item, i) => (

            <Reveal key={item.role} variant="left" delay={i * 0.1}>
            <div className="relative mb-12 last:mb-0">

              {/* Timeline node */}
              <span className="absolute -left-[41px] top-7 z-10 flex h-5 w-5 items-center justify-center md:-left-[49px]">
                <span className="absolute h-5 w-5 rounded-full bg-emerald-400/30" />
                <span className="h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.9)]" />
              </span>


              {/* Experience Card */}
              <article
                className="
                  rounded-3xl border border-zinc-800 bg-zinc-900 p-7 md:p-8
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-emerald-400/60
                  hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]
                "
              >

                {/* Date eyebrow */}
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                  <Calendar size={13} />
                  {item.duration}
                </div>


                {/* Role + company / location */}
                <div className="mt-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">

                  <div>
                    <h3 className="text-2xl font-bold text-zinc-50 md:text-3xl">
                      {item.role}
                    </h3>

                    <span className="mt-2 flex items-center gap-2 font-medium text-emerald-400">
                      <Building2 size={16} />
                      {item.company}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-sm text-zinc-500 md:pt-1">
                    <MapPin size={14} />
                    {item.location}
                  </span>

                </div>


                {/* Description */}
                <p className="mt-5 leading-7 text-zinc-400">
                  {item.description}
                </p>


                {/* Achievements */}
                {item.achievements && (
                  <ul className="mt-5 space-y-2.5">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 leading-7 text-zinc-300"
                      >
                        <CircleDot
                          size={16}
                          className="mt-1 shrink-0 text-emerald-400/70"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}


                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </article>

            </div>
            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}
