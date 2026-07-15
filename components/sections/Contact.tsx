import { personal } from "@/data/personal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[8px] text-cyan-400">
            Contact
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Let's Build Something Together
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-400">
            Whether it's enterprise integrations, SAP solutions, cloud
            applications, or exciting opportunities, I'd love to hear
            from you. Let's discuss how we can build something amazing
            together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

            <h3 className="mb-8 text-3xl font-bold text-white">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                  Email
                </p>

                <a
                  href={`mailto:${personal.email}`}
                  className="break-all text-lg text-white transition hover:text-cyan-400"
                >
                  {personal.email}
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                  Phone
                </p>

                <a
                  href={`tel:${personal.phone}`}
                  className="text-lg text-white transition hover:text-cyan-400"
                >
                  {personal.phone}
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                  Location
                </p>

                <p className="text-lg text-white">
                  {personal.location}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                  LinkedIn
                </p>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-lg text-white transition hover:text-cyan-400"
                >
                  {personal.linkedin}
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">
                  GitHub
                </p>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-lg text-white transition hover:text-cyan-400"
                >
                  {personal.github}
                </a>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

            <h3 className="mb-8 text-3xl font-bold text-white">
              Send a Message
            </h3>

            {/* Static Form */}
            <form className="space-y-6">

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}