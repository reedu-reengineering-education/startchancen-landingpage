import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Angebote mit der senseBox",
  description:
    "Unterrichtsmaterialien, Fortbildungen, Ausstattung und Kooperationen – entdecken Sie alle Angebote von senseBox für Schulen.",
};

export default function Angebote() {
  return (
    <>
      <Hero
        title="Angebote mit der senseBox"
        subtitle="Unterrichtsmaterialien, Fortbildungen, Ausstattung und individuelle Kooperationen – für alle Schularten."
        ctaPrimary={{ label: "Beratung anfragen", href: "/kontakt" }}
      />

      {/* Content placeholder */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center text-gray-400">
        <p>Angebotsübersicht folgt …</p>
      </section>
    </>
  );
}
