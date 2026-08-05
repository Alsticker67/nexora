"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  // Reading-progress bar — a spring smooths the raw scroll value so the fill
  // glides instead of snapping frame-to-frame.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Solidify the bar once the user leaves the very top of the page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — highlight the nav link for whichever section owns the viewport.
  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that's still on screen.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-white/10 bg-zinc-950/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-3xl font-black tracking-wide"
            >
              <span className="text-zinc-50">Ne</span>
              <span className="text-sky-400">xora</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-sky-400"
                        : "text-zinc-300 hover:text-sky-400"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-sky-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Button href={personal.resume}>Download CV</Button>
            </div>

            {/* Mobile Icon */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="text-zinc-50 lg:hidden"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden lg:hidden"
              >
                <nav className="flex flex-col gap-5 border-t border-white/10 py-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`text-base transition-colors duration-300 ${
                          active === item.href
                            ? "font-semibold text-sky-400"
                            : "text-zinc-300 hover:text-sky-400"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <Button href={personal.resume} className="mt-1 w-full">
                    Download CV
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>

        {/* Reading-progress bar pinned to the bottom edge of the bar. */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-sky-400 to-sky-500"
        />
      </div>
    </header>
  );
}
