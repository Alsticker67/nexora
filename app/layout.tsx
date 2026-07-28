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
  title: "Bhairav Singh | SAP Integration Developer",
  description:
    "Portfolio of Bhairav Singh - SAP Integration Suite (CPI), SAP PI/PO, SAP BTP, REST APIs, Groovy, Enterprise Integration Developer.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Bhairav Singh | SAP Integration Developer",
    description:
      "SAP Integration Developer Portfolio built with Next.js, TypeScript and Tailwind CSS.",
    images: ["/og-image.png"],
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
