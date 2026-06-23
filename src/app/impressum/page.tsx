import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – senseBox",
};

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">
        Impressum
      </h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            re:edu gGmbH
            <br />
            Heisenbergstraße 2<br />
            48149 Münster
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Vertreten durch
          </h2>
          <p>Geschäftsführung re:edu gGmbH</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:info@sensebox.de"
              className="text-[#62A044] hover:underline"
            >
              info@sensebox.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Registereintrag
          </h2>
          <p>
            Eingetragen im Handelsregister.
            <br />
            Registergericht: Amtsgericht Münster
            <br />
            Registernummer: HRB [Nummer einsetzen]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            DE [Nummer einsetzen]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
