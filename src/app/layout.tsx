import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Chivo } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});
const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
});

export const metadata: Metadata = {
  title: "SportsBuzz",
  description: "Track scores of sports automatically",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.variable + " " + chivo.variable}>{children}</body>
    </html>
  );
}
