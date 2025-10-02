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
  title: "Thomas Thangarajah - Software Engineer & Data Scientist",
  description: "Portfolio of Thomas Thangarajah, Computational Mathematics and Statistics student at University of Waterloo. Software Engineer, Data Scientist, and Powerlifter.",
  keywords: ["Thomas Thangarajah", "Software Engineer", "Data Scientist", "University of Waterloo", "Portfolio", "React", "Python", "Machine Learning"],
  authors: [{ name: "Thomas Thangarajah" }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Thomas Thangarajah - Software Engineer & Data Scientist",
    description: "Portfolio of Thomas Thangarajah, Computational Mathematics and Statistics student at University of Waterloo.",
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
