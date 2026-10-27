import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// 1. Initialize Montserrat for the whole website
const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-sans", // Overrides Tailwind v4 default body font
});

// 2. Initialize PlaywriteITTrad for your special line
const PlaywriteITTrad = localFont({
  src: "./fonts/PlaywriteITTrad-VariableFont_wght.ttf",
  variable: "--font-playwrite", // Hooks into the font-playwrite class
});

export const metadata: Metadata = {
  title: "YourCoffee",
  description: "YourCoffee is a web-based system built for accepting and creating orders from customers online.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${PlaywriteITTrad.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F0DAAE]">{children}</body>
    </html>
  );
}
