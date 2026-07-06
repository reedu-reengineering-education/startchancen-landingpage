import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Package,
  Users,
  ChevronRight,
  Check,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Startchancen Angebote mit der senseBox - 100% förderfähig",
  description:
    "Unterrichtsmaterialien, Fortbildungen, Ausstattung und Kooperationen – entdecken Sie alle Angebote von senseBox für Schulen.",
};

const products = [
  {
    title: "senseBox:basic Klassenset",
    badge: "Ab Grundschule",
    price: "1.999 €",
    regularPrice: "2.382 €",
    body: "",
    tags: [] as string[],
    bullets: [
      "15 Bausätze inkl. Transportkoffer",
      "Digitale Unterrichtsmaterialien & Projektideen",
      "Geeignet ab der Grundschule",
      "kostenlose Programmier-App",
      "Firmware für die weiterführende Schule installierbar",
    ],
    // tags: ["Einstieg", "MINT", "Programmieren"],
    image: { src: "/img/senseBox-basic.jpg", alt: "senseBox:basic Klassenset" },
    bg: "bg-white",
    imageRight: false,
  },
  {
    title: "senseBox:edu S2 Klassenset",
    badge: "Sek I & II",
    price: "4.500 €",
    regularPrice: "5.090 €",
    body: "",
    tags: [] as string[],
    bullets: [
      "15 Bausätze inkl. Transportkoffer",
      "1x Air Quality Explorer-Set (Feinstaub- und CO₂-Sensor)",
      "Digitale Unterrichtsmaterialien & Projektideen",
      "Programmierbar mit Blockly, Arduino IDE und Python",
    ],
    // tags: ["Umweltforschung", "Sensoren", "Programmieren", "Making"],
    image: {
      src: "/img/senseBox-edu-S2.jpg",
      alt: "senseBox:edu S2 Klassenset",
    },
    bg: "bg-gray-50",
    imageRight: true,
  },
  {
    title: "senseBox Fortbildungen",
    badge: "Für alle Altergruppen",
    price: "ab 140 € / Stunde (zzgl. Fahrtkosten)",
    regularPrice: "",
    body: "",
    tags: [] as string[],
    bullets: [
      "Einführnung in die senseBox",
      "Einsatz im Unterricht",
      "Materialien für den Einsatz im Unterricht",
      "Für alle MINT-Fächer (Informatik, Mathe, Physik, Chemie, Biologie & Geographie)",
      "Professionelles Fortbildungs-Team",
    ],
    // tags: ["Umweltforschung", "Sensoren", "Programmieren", "Making"],
    image: {
      src: "/img/workshop.jpg",
      alt: "senseBox:edu S2 Klassenset",
    },
    bg: "bg-white",
    imageRight: false,
  },
];

const angeboteTypes = [
  { icon: BookOpen, label: "Unterricht & Projekte" },
  { icon: GraduationCap, label: "Fortbildungen" },
  { icon: Package, label: "Ausstattung" },
  { icon: Users, label: "Kooperationen" },
];

export default function Angebote() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <Hero
        title="Startchancen Angebote mit der senseBox - 100% förderfähig"
        subtitle="Unterrichtsmaterialien, Fortbildungen, Ausstattung und individuelle Kooperationen – für alle Schularten."
        imageSrc="/img/iCODE_nature.jpg"
        imageAlt="senseBox im Schulunterricht"
        fullBleed
        ctaPrimary={{ label: "Beratung anfragen", href: "/kontakt" }}
      />

      {/* ── ANGEBOTS-TYPEN STRIP ──────────────────────────────────────────── */}
      <section className="bg-[#62A044]/5 border-b border-[#62A044]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {angeboteTypes.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-gray-700"
              >
                <Icon size={18} className="text-[#62A044]" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUKTE ──────────────────────────────────────────────────────── */}
      {products.map(
        ({
          title,
          badge,
          price,
          regularPrice,
          body,
          bullets,
          tags,
          image,
          bg,
          imageRight,
        }) => (
          <section key={title} className={`${bg} border-b border-gray-100`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image */}
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md",
                    imageRight && "lg:order-2",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className={cn(imageRight && "lg:order-1")}>
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-[#62A044] px-3 py-1 text-xs font-semibold text-white">
                      {badge}
                    </span>
                    {tags &&
                      tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-[#62A044]/30 bg-[#62A044]/5 px-3 py-1 text-xs font-medium text-[#62A044]"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {title}
                  </h2>
                  {body && <p className="text-gray-600 leading-relaxed mb-6">{body}</p>}

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6">
                    {bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-gray-700 text-sm"
                      >
                        <Check
                          size={15}
                          className="text-[#62A044] mt-0.5 shrink-0"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-2xl font-bold text-gray-900">
                        {price}
                      </span>
                      {regularPrice && (
                        <span className="text-base text-gray-400 line-through">
                          {regularPrice}
                        </span>
                      )}
                    </div>
                    <Link
                      href="/kontakt"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "bg-[#62A044] hover:bg-[#4e8335] text-white",
                      )}
                    >
                      Jetzt anfragen
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ),
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Nicht das Richtige dabei?
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Wir beraten Sie gerne individuell – von der Auswahl des richtigen
            Sets bis zur Planung von Fortbildungen und Projekten für Ihre
            Schule.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/kontakt"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#62A044] hover:bg-[#4e8335] text-white",
              )}
            >
              Beratung anfragen
              <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link
              href="/praxisbeispiele"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Praxisbeispiele ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
