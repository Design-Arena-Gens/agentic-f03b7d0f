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
  title: "Vos Arkana — Intelligence for Impossible Problems",
  description:
    "Vos Arkana partners with frontier teams to decode ambiguity and uncover strategic breakthroughs with adaptive intelligence.",
  openGraph: {
    title: "Vos Arkana — Intelligence for Impossible Problems",
    description:
      "Strategic research, speculative design, and applied intelligence for teams exploring the unknown.",
    url: "https://agentic-f03b7d0f.vercel.app",
    siteName: "Vos Arkana",
    images: [
      {
        url: "https://agentic-f03b7d0f.vercel.app/logo.svg",
        width: 1200,
        height: 630,
        alt: "Vos Arkana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vos Arkana — Intelligence for Impossible Problems",
    description:
      "Strategic research, speculative design, and applied intelligence for teams exploring the unknown.",
    images: ["https://agentic-f03b7d0f.vercel.app/logo.svg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05070f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
