import { skillCategories } from "@/data/skill";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <p className="mb-4 uppercase tracking-[8px] text-cyan-400">
          Skills
        </p>

        <h2 className="mb-16 text-5xl font-bold text-white">
          Technical Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-500/10
              "
            >

              {/* Category */}
              <h3 className="mb-6 text-2xl font-bold text-white">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-cyan-400
                      transition-all
                      duration-300
                      group-hover:border-cyan-400/40
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}