import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
  title: "Ultimate Buildings | Engineering Tomorrow's Infrastructure",
  description: "Premium infrastructure, flooring, slim steel windows, quartz and granite decks.",
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
      <body className="min-h-full flex flex-col font-body bg-background text-foreground tracking-tight">
        {children}
      </body>
    </html>
  );
}
