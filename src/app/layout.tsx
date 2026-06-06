import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/app/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Islam Talha | Lead Software Developer & Game Developer",
  description:
    "Islam Talha is a Lead Software Developer based in Egypt, specializing in game development, AI experiences, and interactive solutions.",
  keywords: [
    "Islam Talha",
    "Game Developer",
    "Software Developer",
    "AI Engineer",
    "Unity",
    "Unreal",
    "C#",
    "Python",
  ],
  authors: [{ name: "Islam Talha" }],
  openGraph: {
    title: "Islam Talha | Lead Software Developer & Game Developer",
    description:
      "Islam Talha is a Lead Software Developer based in Egypt, specializing in game development, AI experiences, and interactive solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam Talha | Lead Software Developer & Game Developer",
    description:
      "Islam Talha is a Lead Software Developer based in Egypt, specializing in game development, AI experiences, and interactive solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
