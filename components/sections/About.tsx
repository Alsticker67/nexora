import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div className="flex items-center justify-center">

            <div className="flex h-80 w-80 items-center justify-center rounded-3xl border border-cyan-500/20 bg-slate-800 text-7xl font-bold text-cyan-400">

              BH

            </div>

          </div>

          {/* Right */}

          <div>

            <p className="text-cyan-400 uppercase tracking-[0.3em]">
              ABOUT ME
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white">
              SAP Integration Developer
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400">
              I specialize in designing and developing enterprise integrations
              using SAP Integration Suite (CPI), SAP PI/PO, SAP BTP, REST APIs,
              SOAP Services and Groovy scripting.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-slate-700 p-6">
                <h3 className="text-4xl font-bold text-cyan-400">
                  2+
                </h3>

                <p className="mt-2 text-slate-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-6">
                <h3 className="text-4xl font-bold text-cyan-400">
                  20+
                </h3>

                <p className="mt-2 text-slate-400">
                  Integrations
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-6">
                <h3 className="text-4xl font-bold text-cyan-400">
                  SAP
                </h3>

                <p className="mt-2 text-slate-400">
                  CPI & PI/PO
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-6">
                <h3 className="text-4xl font-bold text-cyan-400">
                  APIs
                </h3>

                <p className="mt-2 text-slate-400">
                  REST & SOAP
                </p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}