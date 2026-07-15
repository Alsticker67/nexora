import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}