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
    `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-7
    py-3.5
    text-sm
    font-semibold
    tracking-wide
    transition-all
    duration-300
    hover:-translate-y-1
    active:translate-y-0
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-emerald-400
    focus-visible:ring-offset-2
    focus-visible:ring-offset-zinc-950
    `,
    {
      "bg-emerald-400 text-zinc-950 shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:bg-emerald-300 hover:shadow-[0_15px_35px_rgba(16,185,129,0.45)]":
        variant === "primary",

      "border border-emerald-400/30 bg-zinc-900/70 text-zinc-50 backdrop-blur hover:border-emerald-400 hover:bg-zinc-800":
        variant === "secondary",
    },
    className
  );

  if (href) {
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

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={styles}
    >
      {children}
    </button>
  );
}