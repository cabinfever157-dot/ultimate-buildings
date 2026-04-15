import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { LuxuryBackground } from "@/components/layout/LuxuryBackground";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";
import "./globals.css";

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ultimate-Buildings | Factory Direct to Your Job Site",
  description: "Premium cabinetry, doors, windows, staircases, flooring & more — factory direct pricing. We handle logistics, customs, tariffs, and delivery. Quality, Reliability, Value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontDisplay.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-body bg-brand-dark text-foreground tracking-tight relative">
        <Script src="https://www.youtube.com/iframe_api" strategy="beforeInteractive" />
        <LuxuryBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}
