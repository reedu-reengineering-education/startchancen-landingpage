import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Leaf, BarChart3, Code2, Lightbulb } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Praxisbeispiele – senseBox im Einsatz",
  description:
    "Wie Schulen die senseBox im Unterricht einsetzen: Umweltdaten, KI, Coding und mehr.",
};

const examples = [
  {
    title: "Umweltmessungen auf dem Schulhof",
    id: "umweltmessung",
    body: "Schülerinnen und Schüler messen Temperatur, Feinstaub oder Luftfeuchtigkeit direkt vor Ort und werten die Daten aus. Die gesammelten Messwerte werden anschließend analysiert, visualisiert und mit anderen Schulen geteilt.",
    tags: ["Umweltbildung", "Datenkompetenz", "BNE"],
    image: {
      src: "/img/schulhof.jpeg",
      alt: "Schüler messen Umweltdaten auf dem Schulhof",
    },
    bg: "bg-white",
    imageRight: false,
  },
  {
    title: "Coding und Making",
    id: "making",
    body: "Eigene digitale Projekte entwickeln und erste Programmiererfahrungen sammeln. Von einfachen LED-Schaltungen bis zu vernetzten Sensorsystemen – praxisnah, spielerisch und mit echten Ergebnissen.",
    tags: ["Programmieren", "Computational Thinking", "MINT"],
    image: {
      src: "/img/senseBox_edu_2.jpg",
      alt: "Coding und Making mit der senseBox",
    },
    bg: "bg-gray-50",
    imageRight: true,
  },
  {
    title: "Nachhaltigkeit und BNE",
    id: "nachhaltigkeit",
    body: "Projektwochen zu Klima, Umwelt und nachhaltiger Entwicklung gestalten. Zum Beispiel eine Smarte Lego Stadt mit Sensoren – Schüler:innen erleben, wie digitale Technologien und Nachhaltigkeit zusammenwirken.",
    tags: ["BNE", "Klimabildung", "Fächerübergreifend"],
    image: {
      src: "/img/iCODE_MS_lego.jpg",
      alt: "Smarte Lego Stadt mit senseBox Sensoren",
    },
    bg: "bg-white",
    imageRight: false,
  },
];

const kompetenzen = [
  { icon: Leaf, label: "Umweltbildung & BNE" },
  { icon: BarChart3, label: "Datenkompetenz" },
  { icon: Code2, label: "Coding & Making" },
  { icon: Lightbulb, label: "Projektbasiertes Lernen" },
];

export default function Praxisbeispiele() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <Hero
        title="Praxisbeispiele"
        subtitle="Wie Schulen die senseBox erfolgreich im Unterricht einsetzen – von Umweltdaten bis KI und Coding."
        imageSrc="/img/iCODE_nature.jpg"
        imageAlt="Schülerinnen und Schüler arbeiten mit der senseBox"
        fullBleed
        ctaPrimary={{
          label: "Kontakt aufnehmen",
          href: `/kontakt?topic=${encodeURIComponent("Allgemeine Anfrage")}`,
        }}
      />

      {/* ── KOMPETENZEN STRIP ─────────────────────────────────────────────── */}
      <section className="bg-[#62A044]/5 border-b border-[#62A044]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {kompetenzen.map(({ icon: Icon, label }) => (
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

      {/* ── EXAMPLES ──────────────────────────────────────────────────────── */}
      {examples.map(({ title, body, tags, image, bg, imageRight, id }) => (
        <section
          id={id}
          key={title}
          className={`${bg} border-b border-gray-100`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Image */}
              <div
                className={cn(
                  "relative aspect-4/3 overflow-hidden rounded-2xl shadow-md",
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
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
                <p className="text-gray-600 leading-relaxed text-base">
                  {body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Möchten Sie die senseBox an Ihrer Schule einsetzen?
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Wir beraten Sie gerne zu passenden Angeboten und Projekten für Ihre
            Schulform und Jahrgangsstufen.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/kontakt?topic=${encodeURIComponent("Allgemeine Anfrage")}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#62A044] hover:bg-[#4e8335] text-white",
              )}
            >
              Kontakt aufnehmen
              <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link
              href="/angebote"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Alle Angebote ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
