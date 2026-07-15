"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/shared/Button";
import { personal } from "@/data/personal";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="text-3xl font-black tracking-wide"
            >
              <span className="text-white">Ne</span>
              <span className="text-cyan-400">xora</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Button href={personal.resume}>
                Download CV
              </Button>
            </div>

            {/* Mobile Icon */}
            <button
              onClick={() => setOpen(!open)}
              className="text-white lg:hidden"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-t border-white/10 py-6 lg:hidden">
              <nav className="flex flex-col gap-5">

                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 transition hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                ))}

                <Button href={personal.resume}>
                  Download CV
                </Button>

              </nav>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}