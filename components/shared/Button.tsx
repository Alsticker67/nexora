import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",
    {
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400":
        variant === "primary",

      "border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400":
        variant === "secondary",
    },
    className
  );

  if (href) {
    // External website or PDF
    if (href.startsWith("http") || href.endsWith(".pdf")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
        >
          {children}
        </a>
      );
    }

    // Internal navigation
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
}