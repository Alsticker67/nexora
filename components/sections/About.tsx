import Container from "@/components/ui/Container";
import { personal } from "@/data/personal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-32"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}
          <div className="flex justify-center">

            <div
              className="
                flex
                h-80
                w-80
                items-center
                justify-center
                rounded-3xl
                border
                border-cyan-500/30
                bg-gradient-to-br
                from-slate-800
                to-slate-900
                text-8xl
                font-extrabold
                text-cyan-400
                shadow-[0_0_40px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
              "
            >
              {personal.shortName}
            </div>

          </div>

          {/* Right */}
          <div>

            <p className="uppercase tracking-[8px] text-cyan-400">
              ABOUT ME
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-white">
              SAP Integration Developer
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400">
              {personal.tagline}
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-400">
              I have experience building enterprise integrations using
              SAP Integration Suite (CPI), SAP PI/PO, SAP BTP,
              REST APIs, SOAP Services, OData, XML, JSON and
              Groovy scripting. I enjoy designing scalable,
              reliable and high-performance integration solutions.
            </p>

            {/* Stats */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
                <h3 className="text-4xl font-bold text-cyan-400">
                  {personal.experience}
                </h3>

                <p className="mt-2 text-slate-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
                <h3 className="text-4xl font-bold text-cyan-400">
                  {personal.integrations}
                </h3>

                <p className="mt-2 text-slate-400">
                  Enterprise Integrations
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
                <h3 className="text-4xl font-bold text-cyan-400">
                  {personal.projects}
                </h3>

                <p className="mt-2 text-slate-400">
                  Integration Projects
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
                <h3 className="text-4xl font-bold text-cyan-400">
                  SAP
                </h3>

                <p className="mt-2 text-slate-400">
                  CPI • PI/PO • BTP
                </p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}