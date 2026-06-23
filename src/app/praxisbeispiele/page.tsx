import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Praxisbeispiele – senseBox im Einsatz",
  description:
    "Wie Schulen die senseBox im Unterricht einsetzen: Umweltdaten, KI, Coding und mehr.",
};

export default function Praxisbeispiele() {
  return (
    <>
      <Hero
        title="Praxisbeispiele"
        subtitle="Wie Schulen die senseBox erfolgreich im Unterricht einsetzen – von Umweltdaten bis KI und Coding."
        ctaPrimary={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      />

      {/* Content placeholder */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center text-gray-400">
        <p>Praxisbeispiele folgen …</p>
      </section>
    </>
  );
}
