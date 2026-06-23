import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const brixSlab = localFont({
  src: [
    {
      path: "../../public/fonts/BrixSlab-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BrixSlab-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-brixslab",
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "senseBox – Digitale Bildung für Startchancen-Schulen",
  description:
    "Mit der senseBox Zukunftskompetenzen praxisnah fördern. Unterrichtsmaterialien, Fortbildungen, Projekte & Klima – für alle Schularten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${brixSlab.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
