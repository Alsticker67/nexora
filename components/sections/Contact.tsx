"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Send,
  AlertCircle,
} from "lucide-react";
import { personal } from "@/data/personal";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/ui/Container";

/* Contact form delivery uses FormSubmit (https://formsubmit.co) — no account,
 * no API key. Messages POST straight to CONTACT_INBOX below (this is where you
 * RECEIVE messages; it can differ from the email shown publicly on the card).
 * On the very first submission FormSubmit emails a one-time "confirm your
 * address" link; click it once and every message after that flows through. */
const CONTACT_INBOX = "arjunnsingh2415@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_INBOX)}`;

/* lucide dropped brand glyphs, so LinkedIn / GitHub are inlined as SVGs. */
function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

/* Contact channels — each row gets its own accent tile so the column reads as
 * a colourful set. `external` opens in a new tab; otherwise it's a mailto/tel. */
const CHANNELS = [
  {
    key: "email",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: Mail,
    tile: "bg-sky-500/10 text-sky-300 ring-sky-400/20 group-hover:bg-sky-500/20",
    external: false,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: personal.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
    href: personal.linkedin,
    Icon: LinkedInIcon,
    tile: "bg-sky-500/10 text-sky-300 ring-sky-400/20 group-hover:bg-sky-500/20",
    external: true,
  },
  {
    key: "github",
    label: "GitHub",
    value: personal.github.replace(/^https?:\/\/(www\.)?/, ""),
    href: personal.github,
    Icon: GitHubIcon,
    tile: "bg-sky-500/10 text-sky-300 ring-sky-400/20 group-hover:bg-sky-500/20",
    external: true,
  },
  {
    key: "location",
    label: "Location",
    value: personal.location,
    href: null,
    Icon: MapPin,
    tile: "bg-sky-500/10 text-sky-300 ring-sky-400/20 group-hover:bg-sky-500/20",
    external: false,
  },
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot — real users never fill this hidden field.
    if (data._honey) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Portfolio · ${data.subject || "New message"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await res.json();

      // FormSubmit returns success as the string "true".
      if (res.ok && (result.success === "true" || result.success === true)) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please try again or email me directly.");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>

        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          accent="together."
          description="Enterprise integrations, SAP solutions, cloud apps, or an exciting opportunity — send a message and it lands straight in my inbox. I read every one."
        />

        <div className="grid gap-8 lg:grid-cols-5">

          {/* ── Left: contact details ── */}
          <Reveal variant="left" className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-9">

              {/* Availability */}
              {personal.available && (
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-medium text-sky-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
                  </span>
                  Available for new opportunities
                </span>
              )}

              <h3 className="mt-6 text-2xl font-bold text-zinc-50">
                Get in touch
              </h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Prefer a direct line? Reach me through any of these — I&apos;m
                quickest over email and LinkedIn.
              </p>

              {/* Channels */}
              <div className="mt-8 space-y-3">
                {CHANNELS.map(({ key, label, value, href, Icon, tile, external }) => {
                  const inner = (
                    <>
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset transition-colors duration-300 ${tile}`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                          {label}
                        </p>
                        <p className="truncate text-sm font-medium text-zinc-50 transition-colors duration-300 group-hover:text-sky-300">
                          {value}
                        </p>
                      </div>
                    </>
                  );

                  const shared =
                    "group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-3.5 transition-all duration-300";

                  return href ? (
                    <a
                      key={key}
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`${shared} hover:-translate-y-0.5 hover:border-sky-400/50`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={key} className={shared}>
                      {inner}
                    </div>
                  );
                })}
              </div>

              {/* Response time */}
              <div className="mt-auto flex items-center gap-2.5 pt-8 text-sm text-zinc-500">
                <Clock size={15} className="text-sky-400/70" />
                Typical response time — within 24 hours.
              </div>

            </div>
          </Reveal>

          {/* ── Right: message form ── */}
          <Reveal variant="right" className="lg:col-span-3">
            <div className="relative flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-9">

              <h3 className="text-2xl font-bold text-zinc-50">Send a message</h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Fill this out and I&apos;ll get back to you personally.
              </p>

              {status === "success" ? (
                <div className="mt-8 flex flex-1 flex-col items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-500/[0.06] p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
                    <CheckCircle2 size={30} />
                  </div>
                  <h4 className="mt-5 text-xl font-bold text-zinc-50">
                    Message sent!
                  </h4>
                  <p className="mt-2 max-w-sm leading-7 text-zinc-400">
                    Thanks for reaching out — your message is in my inbox and
                    I&apos;ll reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 transition-transform duration-300 hover:translate-x-0.5"
                  >
                    Send another
                    <ArrowRight size={15} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                  {/* Honeypot — FormSubmit ignores submissions where _honey is filled. */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Subject" htmlFor="subject">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me a little about what you have in mind..."
                      className={`${inputClass} resize-y`}
                    />
                  </Field>

                  {status === "error" && (
                    <p className="flex items-start gap-2 rounded-xl border border-red-400/25 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="
                      inline-flex w-full items-center justify-center gap-2 rounded-xl
                      bg-sky-500 px-6 py-4 font-semibold text-zinc-950
                      transition-all duration-300
                      hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]
                      disabled:cursor-not-allowed disabled:opacity-70
                    "
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={17} />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </Reveal>

        </div>

      </Container>
    </section>
  );
}

/* Shared input styling. */
const inputClass =
  "w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-zinc-50 placeholder:text-zinc-600 outline-none transition-colors duration-300 focus:border-sky-400";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-zinc-400"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
