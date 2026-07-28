import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";
import Reveal from "@/components/shared/Reveal";
import Container from "@/components/ui/Container";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

/* Brand icons (this lucide-react build ships no brand glyphs) */
function LinkedInIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: personal.linkedin, Icon: LinkedInIcon, external: true },
  { label: "GitHub", href: personal.github, Icon: GithubIcon, external: true },
  { label: "Email", href: `mailto:${personal.email}`, Icon: MailIcon, external: false },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070809]">
      {/* Violet→fuchsia hairline riding the top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/70 to-transparent" />
      {/* Ambient glow anchored top-centre */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[820px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[130px]" />
      {/* Faint grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(16,185,129,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(16,185,129,0.4)_1px,transparent_1px)] [background-size:56px_56px]" />

      <Container className="relative">

        {/* ── CTA band ── */}
        <Reveal variant="up">
          <div className="flex flex-col gap-10 py-16 md:py-20 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-xl">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Let&apos;s connect
              </p>

              <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-zinc-50 md:text-6xl">
                Have a project
                <br />
                <span className="bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent">
                  in mind?
                </span>
              </h2>

              <p className="mt-5 max-w-md leading-7 text-zinc-400">
                Enterprise SAP integrations, cloud apps, or a role on your
                team — I&apos;m open to new opportunities and quick to reply.
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-emerald-400 px-7 py-4 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)]"
              >
                Start a conversation
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <div className="flex gap-3">
                {socials.map(({ label, href, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:text-emerald-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </Reveal>

        {/* ── Brand / navigation / contact ── */}
        <div className="grid gap-10 border-t border-white/10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-black tracking-wide">
              <span className="text-zinc-50">{personal.firstName}</span>{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent">
                {personal.lastName}
              </span>
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {personal.designation}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Based in {personal.location}
            </span>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
              Navigate
            </p>
            <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-50"
                >
                  <span className="h-1 w-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-emerald-400" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
              Get in touch
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="mt-5 block text-sm text-zinc-300 transition-colors hover:text-emerald-300"
            >
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-zinc-400 transition-colors hover:text-emerald-300"
            >
              {personal.phone}
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {personal.copyrightName}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>

      </Container>
    </footer>
  );
}
