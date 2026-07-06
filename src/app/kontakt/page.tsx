import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – senseBox Beratung anfragen",
  description:
    "Nehmen Sie Kontakt auf. Wir beraten Sie gerne zu Ihren Fragen und Ideen rund um senseBox in Ihrer Schule.",
};

export default function Kontakt() {
  return (
    <>
      <Hero
        title="Interesse an einer Zusammenarbeit?"
        subtitle="Wir beraten Sie gerne zu Ihren Fragen und Ideen. Schreiben Sie uns – wir melden uns zeitnah zurück."
        imageSrc="/img/team_reedu.jpeg"
        imageAlt="Das Team"
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
            Kontaktformular
          </h2>
          <p className="mt-2 text-gray-600">
            Schreiben Sie uns direkt. Wir melden uns schnellstmöglich zurück.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
