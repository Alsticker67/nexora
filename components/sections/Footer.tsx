import Link from "next/link";
import { personal } from "@/data/personal";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white">
              {personal.name}
            </h3>

            <p className="mt-2 text-slate-400">
              {personal.designation}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-400 transition hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}