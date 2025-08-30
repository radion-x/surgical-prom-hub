import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import TitleScroller from "../components/TitleScroller";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Surgical Prom Hub - Prof. Aaron Buckland",
  description:
    "Direct access to PROMs used in Professor Aaron Buckland’s practice: ODI, EQ‑5D‑3L, EQ‑5D‑5L, CPCHILD, VAS‑SSRAA, and SRS‑22r.",
  keywords: [
    "PROMs",
    "patient-reported outcomes",
    "spine outcomes",
    "ODI",
    "EQ-5D",
    "SRS-22r",
    "CPCHILD",
    "VAS-SSRAA",
  ],
  authors: [{ name: "Professor Aaron Buckland" }],
  openGraph: {
  title: "Surgical Prom Hub - Prof. Aaron Buckland",
    description: "Patient‑Reported Outcome Measures for spine and musculoskeletal care",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <TitleScroller />
        {children}
      </body>
    </html>
  );
}
