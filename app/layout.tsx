import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Accomp",
    template: "%s · Accomp",
  },
  description:
    "Discover Accomp, a mobile app concept for planning shared outdoor trips.",
  icons: {
    icon: "/brand/accomp-pine-icon.svg",
    shortcut: "/brand/accomp-pine-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
