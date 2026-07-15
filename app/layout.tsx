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
  title: {
    default: "YOUR_NAME | SAP Integration Developer",
    template: "%s | YOUR_NAME",
  },

  description:
    "Portfolio showcasing SAP Integration Suite (CPI), SAP PI/PO, SAP BTP, REST APIs, SOAP Services, Groovy scripting, and enterprise integration projects.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "YOUR_NAME | SAP Integration Developer",
    description:
      "SAP Integration Developer Portfolio",
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