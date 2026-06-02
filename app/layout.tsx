import type { Metadata } from "next";
import { Bitter, Outfit } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Time Plumbing, Heating & Electric | Denver's Trusted Home Services Since 1980",
  description:
    "42 years serving Denver. 4.9 Google stars, 10,000+ clients. Emergency plumbing, HVAC, and electrical — 24/7. Call 303-PLUMBER.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bitter.variable} ${outfit.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
