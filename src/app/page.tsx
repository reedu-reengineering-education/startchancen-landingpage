import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Package,
  Users,
  Check,
  Leaf,
  BarChart3,
  Code2,
  Lightbulb,
  ChevronRight,
  Globe,
  Brain,
  FlaskConical,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Hero from "@/components/sections/Hero";

// ─── Data ────────────────────────────────────────────────────────────────────

const angeboteCards = [
  {
    icon: BookOpen,
    title: "Unterricht & Projekte",
    description:
      "Praxisnahe Unterrichtsmaterialien und Projektangebote rund um Coding, Umweltbildung, Datenkompetenz und Künstliche Intelligenz.",
    href: "/angebote",
  },
  {
    icon: GraduationCap,
    title: "Fortbildungen",
    description:
      "Workshops und Schulungen für Lehrkräfte – von ersten Schritten mit der senseBox bis zur langfristigen Verankerung im Unterricht.",
    href: "/angebote",
  },
  {
    icon: Package,
    title: "Ausstattung",
    description:
      "senseBox-Sets, Materialien und Beratung für den erfolgreichen Einsatz an Ihrer Schule.",
    href: "/angebote",
  },
  {
    icon: Users,
    title: "Kooperationen",
    description:
      "Projektmachen und individuelle Formate – gemeinsam gestalten wir digitale Bildung für Ihre Schule.",
    href: "/angebote",
  },
];

const startchancenFeatures = [
  {
    icon: Globe,
    title: "Digitale Teilhabe",
    desc: "Schüler:innen lernen digitale Werkzeuge aktiv einzusetzen und zu gestalten.",
  },
  {
    icon: Brain,
    title: "MINT & KI",
    desc: "Praxisnahe Projekte zu Coding, Sensordaten und Künstlicher Intelligenz.",
  },
  {
    icon: FlaskConical,
    title: "Praxisnahes Lernen",
    desc: "Eigene Messgeräte bauen, Daten sammeln und Ergebnisse präsentieren.",
  },
];

const kompetenzen = [
  { icon: Globe, label: "Digital Literacy" },
  { icon: Leaf, label: "Bildung für Nachhaltige Entwicklung (BNE)" },
  { icon: BarChart3, label: "Data Literacy" },
  { icon: Code2, label: "Programmieren & Computational Thinking" },
  { icon: Lightbulb, label: "Kreatives Problemlösen" },
];

const einsatzSzenarien = [
  "Umweltdaten messen und auswerten",
  "Coding und Making im Unterricht",
  "Projektwochen zu Nachhaltigkeit und Digitalisierung",
  "Einführung in Datenanalyse und Künstliche Intelligenz",
];

const faqItems = [
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

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Startseite() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <Hero
        title="Digitale MINT-Bildung für mehr Chancengerechtigkeit"
        subtitle="Mit der senseBox fördern wir digitale Kompetenzen für MINT-Fächer, projektbasiertes Lernen und zukunftsorientierte Schulentwicklung an Startchancen-Schulen – von der Grundschule bis in die Oberstufe."
        bullets={[
          "Unterrichtsmaterialien und Projekte",
          "Fortbildungen für Lehrkräfte",
          "Ausstattung und Beratung für Schulen",
          "Für alle Schularten",
        ]}
        ctaPrimary={{ label: "Angebote entdecken", href: "/angebote" }}
        ctaSecondary={{ label: "Beratung anfragen", href: "/kontakt" }}
        imageSrc="/img/hero_2.jpeg"
        imageAlt="Schüler:innen arbeiten mit der senseBox"
        fullBleed
      />

      {/* ── 2. STARTCHANCEN-PROGRAMM ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: text */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Traurig, aber wahr: Noch immer hängt der Bildungserfolg von
                Kindern und Jugendlichen in Deutschland stark von ihrer sozialen
                Herkunft ab. Das Startchancen-Programm von Bund und Ländern soll
                dies ändern. Bis 2034 werden rund{" "}
                <strong className="text-gray-900">20 Milliarden Euro</strong> in
                Schulen mit einem hohen Anteil sozial benachteiligter
                Schüler:innen investiert.
              </p>
              <p className="text-gray-500 mb-3 text-sm">
                Ziel des Programms ist es,
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "mehr Chancengerechtigkeit zu schaffen",
                  "Basiskompetenzen zu stärken",
                  "Schüler:innen besser auf die Anforderungen einer digitalen Welt vorzubereiten",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-gray-600"
                  >
                    <Check
                      size={16}
                      className="text-[#62A044] mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/faq#was-ist-das-startchancen-programm"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-[#62A044] hover:bg-[#4e8335] text-white",
                )}
              >
                Mehr zum Startchancen-Programm
                <ChevronRight size={15} className="ml-1" />
              </Link>
            </div>

            {/* Right: feature cards */}
            <div className="grid gap-4">
              {startchancenFeatures.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#62A044]/30 hover:bg-[#62A044]/5 transition-colors"
                >
                  <div className="shrink-0 py-0.5 self-stretch flex items-center">
                    <Icon size={44} className="text-[#62A044]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">
                      {title}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. UNSERE ANGEBOTE ────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Unsere Angebote für Startchancen-Schulen
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {angeboteCards.map(({ icon: Icon, title, description, href }) => (
              <Card
                key={title}
                className="flex flex-col hover:shadow-md hover:border-[#62A044]/30 transition-all"
              >
                <CardHeader className="items-center text-center">
                  <div className="mb-3 flex justify-center">
                    <Icon
                      size={52}
                      strokeWidth={1.75}
                      className="text-[#62A044]"
                    />
                  </div>
                  <CardTitle className="text-base font-semibold text-center">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-t-0 bg-transparent pt-0 mt-auto">
                  <Link
                    href={href}
                    className="text-sm font-medium text-[#62A044] hover:underline inline-flex items-center gap-1"
                  >
                    Mehr erfahren <ChevronRight size={13} />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DIGITALE BILDUNG TRIFFT UMWELTBILDUNG ─────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: content */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Digitale Bildung trifft Umweltbildung
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mit der senseBox entwickeln Schüler:innen eigene
                Umweltmessstationen, programmieren Sensoren und erfassen Daten
                zu Temperatur, Luftqualität, Feinstaub oder Bodenfeuchtigkeit.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Durch das Sammeln, Analysieren und Interpretieren von
                Umweltdaten werden aktuelle Nachhaltigkeits- und Umweltfragen
                greifbar. Gleichzeitig lernen Schüler:innen digitale
                Technologien nicht nur zu nutzen, sondern selbst zu gestalten.
              </p>

              {/* Competency badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {kompetenzen.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#62A044]/30 bg-[#62A044]/5 px-3 py-1.5 text-xs font-medium text-[#62A044]"
                  >
                    <Icon size={11} />
                    {label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/angebote"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                  )}
                >
                  senseBox:basic (Grundschule)
                </Link>
                <Link
                  href="/angebote"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                  )}
                >
                  senseBox:edu S2 (Sek I &amp; II)
                </Link>
                <Link
                  href="/angebote"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-[#62A044] hover:bg-[#4e8335] text-white",
                  )}
                >
                  Alle Angebote entdecken
                </Link>
              </div>
            </div>

            {/* Right: image placeholders */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-100">
                <Image
                  src="/img/hero_startpage.jpeg"
                  alt="senseBox im Einsatz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden border border-gray-100">
                  <Image
                    src="/img/senseBox_einsatz.jpg"
                    alt="Schüler:innen beim Programmieren"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden border border-gray-100">
                  <Image
                    src="/img/sensebox_farming(1).jpg"
                    alt="Messstation im Freien"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SO WIRD DIE SENSEBOX EINGESETZT ───────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
            So wird die senseBox eingesetzt
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            Von der Klimamessung bis zur KI im Unterricht – Einsatzszenarien für
            alle Jahrgangsstufen.
          </p>

          {/* 3 image cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                src: "/img/IMG_5285.JPG",
                alt: "Umweltdaten im Einsatz",
                caption: "Umweltdaten im Einsatz",
              },
              {
                src: "/img/IMG_5933.JPG",
                alt: "KI und Coding im Unterricht",
                caption: "KI und Coding im Unterricht",
              },
              {
                src: "/img/team.jpg",
                alt: "Projektwoche Nachhaltigkeit",
                caption: "Projektwoche Nachhaltigkeit",
              },
            ].map(({ src, alt, caption }) => (
              <div
                key={caption}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="font-medium text-sm text-gray-800">{caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scenario pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {einsatzSzenarien.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-4 py-1.5 text-sm text-gray-700"
              >
                <Check size={12} className="text-[#62A044]" />
                {s}
              </span>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/praxisbeispiele"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-[#62A044] text-[#62A044] hover:bg-[#62A044]/5",
              )}
            >
              Praxisbeispiele ansehen
              <ChevronRight size={15} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. PASSEND FÜR DAS STARTCHANCEN-PROGRAMM ────────────────────── */}
      <section className="bg-[#62A044]/5 border-y border-[#62A044]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#62A044] mb-6">
            Passend für das Startchancen-Programm
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { icon: Users, label: "Digitale Kompetenzen" },
              { icon: Lightbulb, label: "Innovative Konzepte" },
              { icon: Brain, label: "Praxisnahes Lernen" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-gray-700"
              >
                <Icon size={20} className="text-[#62A044]" />
                <span className="font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/#faq"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#62A044] hover:bg-[#4e8335] text-white",
              )}
            >
              Fördermöglichkeiten ansehen
              <ChevronRight size={15} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. KONTAKT CTA ───────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Interesse an einer Zusammenarbeit?
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Wir beraten Schulen, Schulträger und weitere Akteure gerne zu den
            Möglichkeiten der senseBox im Rahmen des Startchancen-Programms.
          </p>
          <Link
            href="/kontakt"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-[#62A044] hover:bg-[#4e8335] text-white",
            )}
          >
            Kontakt aufnehmen
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* ── 8. FAQ ACCORDION ─────────────────────────────────────────────── */}
      <section id="faq" className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <Accordion className="space-y-2">
            {faqItems.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-gray-200 rounded-lg px-4 bg-white"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
