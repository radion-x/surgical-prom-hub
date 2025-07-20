import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical Assessment Hub | Digital Healthcare Tools",
  description: "Centralized access to validated digital medical assessment tools for healthcare professionals. Includes ODI, Oxford Knee/Hip Scores, KOOS, Harris Hip Score, and more.",
  keywords: ["medical assessment", "healthcare tools", "patient outcomes", "clinical evaluation", "orthopedic assessment"],
  authors: [{ name: "Medical Assessment Hub" }],
  openGraph: {
    title: "Medical Assessment Hub",
    description: "Digital assessment tools for healthcare professionals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
