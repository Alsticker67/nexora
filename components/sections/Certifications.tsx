import Image from "next/image";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 uppercase tracking-[8px] text-cyan-400">
          Certifications
        </p>

        <h2 className="mb-16 text-5xl font-bold text-white">
          Professional Certifications
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-950
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]
              "
            >
              {/* Certificate Image 
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              */}
              

              {/* Certificate Content */}
              <div className="flex h-full flex-col p-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  {cert.issuer}
                </p>

                <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {cert.title}
                </h3>

                <p className="text-slate-400">
                  {cert.issued}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-5">
                  <span className="text-sm text-slate-500">
                    Verified Credential
                  </span>

                  <span className="font-semibold text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                    View Credential →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}