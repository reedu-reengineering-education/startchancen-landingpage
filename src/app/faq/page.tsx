import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen zur senseBox",
  description:
    "Antworten auf häufig gestellte Fragen zu senseBox-Angeboten, Förderung und Fortbildungen.",
};

const faqs = [
  {
    id: "q1",
    question: "Was ist das Startchancen-Programm?",
    answer:
      "Das Startchancen-Programm ist ein gemeinsames Förderprogramm von Bund und Ländern zur Stärkung der Chancengerechtigkeit im Bildungssystem. Bis 2034 werden rund 20 Milliarden Euro in Schulen mit besonderen Herausforderungen investiert.",
  },
  {
    id: "q2",
    question: "Welche Schulen werden gefördert?",
    answer:
      "Die Auswahl der Startchancen-Schulen erfolgt durch die Bundesländer auf Basis wissenschaftlicher Kriterien. Schulen können sich in der Regel nicht selbst bewerben.",
  },
  {
    id: "q3",
    question: "Was ist die senseBox?",
    answer:
      "Die senseBox ist ein offenes Lern- und Experimentiersystem für digitale Bildung, MINT-Unterricht, Umweltmessungen und Datenkompetenz.",
  },
  {
    id: "q4",
    question: "Welche Angebote gibt es für Startchancen-Schulen?",
    answer:
      "Wir unterstützen Schulen mit Unterrichtsmaterialien, Projektangeboten, Fortbildungen, Ausstattung und individueller Beratung.",
  },
  {
    id: "q5",
    question: "Für welche Schulformen eignet sich die senseBox?",
    answer:
      "Die senseBox kann von der Grundschule bis zur Berufsschule eingesetzt werden.",
  },
  {
    id: "q6",
    question: "Gibt es Fortbildungen für Lehrkräfte?",
    answer:
      "Ja. Wir bieten verschiedene Workshops und Schulungen für Lehrkräfte und Kollegien an.",
  },
  {
    id: "q7",
    question: "Wie kann ich mitmachen?",
    answer:
      "Wenn Ihre Schule Teil des Startchancen-Programms ist oder Sie sich über Einsatzmöglichkeiten informieren möchten, nehmen Sie gerne Kontakt mit uns auf.",
  },
];

export default function FAQ() {
  return (
    <>
      <Hero
        title="Häufig gestellte Fragen"
        subtitle="Antworten auf die wichtigsten Fragen rund um senseBox, das Startchancen-Programm und unsere Angebote."
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Accordion className="space-y-2">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-[#62A044]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
