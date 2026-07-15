import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <p className="mb-4 uppercase tracking-[8px] text-cyan-400">
          Experience
        </p>

        <h2 className="mb-20 text-5xl font-bold text-white">
          Professional Journey
        </h2>


        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 pl-10">

          {experience.map((item) => (

            <div
              key={item.role}
              className="relative mb-16"
            >

              {/* Timeline Dot */}
              <div
                className="
                absolute
                -left-[49px]
                top-2
                h-5
                w-5
                rounded-full
                border-4
                border-slate-950
                bg-cyan-400
                shadow-[0_0_20px_rgba(34,211,238,0.8)]
                "
              />


              {/* Experience Card */}
              <div
                className="
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
                "
              >

                {/* Header */}
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                  <div>

                    <h3 className="text-3xl font-bold text-white">
                      {item.role}
                    </h3>

                    <p className="mt-2 text-lg text-cyan-400">
                      {item.company}
                    </p>

                  </div>


                  <div className="text-left md:text-right">

                    <p className="font-semibold text-white">
                      {item.duration}
                    </p>

                    <p className="text-slate-400">
                      {item.location}
                    </p>

                  </div>

                </div>


                {/* Description */}
                <p className="mt-6 leading-8 text-slate-400">
                  {item.description}
                </p>


                {/* Achievements */}
                {item.achievements && (
                  <ul className="mt-6 space-y-3">

                    {item.achievements.map((achievement) => (

                      <li
                        key={achievement}
                        className="flex gap-3 text-slate-300"
                      >

                        <span className="text-cyan-400">
                          ✓
                        </span>

                        <span>
                          {achievement}
                        </span>

                      </li>

                    ))}

                  </ul>
                )}


                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {item.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                      rounded-full
                      bg-cyan-500/10
                      px-4
                      py-2
                      text-sm
                      text-cyan-400
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>


              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}