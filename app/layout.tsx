import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Body copy — clean, highly legible sans. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/* Display / headings — a characterful modern grotesk with real personality,
 * so titles read as designed rather than default-system. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

/* Monospace — used for code, labels, and technical eyebrows. A crafted mono
 * beats the platform default and reinforces the engineering theme. */
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  // Base URL so the code-generated OG image (app/opengraph-image.tsx) and icon
  // (app/icon.tsx) resolve to absolute URLs when the link is shared.
  metadataBase: new URL("https://bhairav-portfolio.vercel.app"),

  title: "Bhairav Singh | SAP Integration Developer",
  description:
    "Portfolio of Bhairav Singh - SAP Integration Suite (CPI), SAP PI/PO, SAP BTP, REST APIs, Groovy, Enterprise Integration Developer.",

  // Icon + Open Graph / Twitter images are supplied by the file conventions
  // app/icon.tsx and app/opengraph-image.tsx — Next injects the tags for us.
  openGraph: {
    type: "website",
    url: "https://bhairav-portfolio.vercel.app",
    title: "Bhairav Singh | SAP Integration Developer",
    description:
      "SAP Integration Developer Portfolio built with Next.js, TypeScript and Tailwind CSS.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhairav Singh | SAP Integration Developer",
    description:
      "SAP Integration Developer Portfolio built with Next.js, TypeScript and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
