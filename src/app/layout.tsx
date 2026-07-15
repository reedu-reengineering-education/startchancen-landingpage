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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://startchancen.sensebox.de",
  ),
  title: {
    default: "senseBox – Digitale Bildung für Startchancen-Schulen",
    template: "%s | senseBox",
  },
  description:
    "Mit der senseBox Zukunftskompetenzen praxisnah fördern. Unterrichtsmaterialien, Fortbildungen, Projekte & Klima – für alle Schularten.",
  keywords: ["Nachhaltigkeit", "BNE", "Making", "Coding", "KI"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "senseBox",
    locale: "de_DE",
    title: "senseBox – Digitale Bildung für Startchancen-Schulen",
    description:
      "Mit der senseBox Zukunftskompetenzen praxisnah fördern. Unterrichtsmaterialien, Fortbildungen, Projekte & Klima – für alle Schularten.",
    images: [
      {
        url: "/img/hero_startpage.jpeg",
        width: 1200,
        height: 630,
        alt: "Schüler:innen arbeiten mit der senseBox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "senseBox – Digitale Bildung für Startchancen-Schulen",
    description:
      "Mit der senseBox Zukunftskompetenzen praxisnah fördern. Unterrichtsmaterialien, Fortbildungen, Projekte & Klima – für alle Schularten.",
    images: ["/img/hero_startpage.jpeg"],
  },
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
