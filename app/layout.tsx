import type { Metadata } from "next";
import { Hanken_Grotesk, Baskervville } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-baskervville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Informed Family Builder",
  description:
    "For people seeking emotional balance, deeper connection, and personal growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${baskervville.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
