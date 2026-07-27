import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
