import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nexode Solution Pvt Ltd | Full-Stack Software Company",
  description:
    "Nexode Solution Pvt Ltd delivers world-class web, mobile, cloud, and AI solutions. Your trusted end-to-end technology partner since 2016.",
  keywords: ["software company", "web development", "mobile apps", "cloud", "AI", "Bengaluru", "India"],
  authors: [{ name: "Nexode Solution Pvt Ltd" }],
  openGraph: {
    title: "Nexode Solution Pvt Ltd",
    description: "Building the future of digital products.",
    type: "website",
  },
  icons: {
    icon: "/nexode_icon_final_fade.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
