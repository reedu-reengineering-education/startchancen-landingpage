import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – senseBox",
};

export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">
        Datenschutzerklärung
      </h1>

      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="font-semibold text-gray-800 mb-1">
            Allgemeine Hinweise
          </h3>
          <p className="text-sm leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            2. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className="font-semibold text-gray-800 mb-1">
            Verantwortliche Stelle
          </h3>
          <p className="text-sm leading-relaxed">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p className="text-sm leading-relaxed mt-2">
            re:edu gGmbH
            <br />
            Heisenbergstraße 2<br />
            48149 Münster
            <br />
            E-Mail: info@sensebox.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="font-semibold text-gray-800 mb-1">
            Server-Log-Dateien
          </h3>
          <p className="text-sm leading-relaxed">
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns übermittelt. Dies sind: Browsertyp und
            Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
            des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie
            IP-Adresse.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            4. Ihre Rechte
          </h2>
          <p className="text-sm leading-relaxed">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
            Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Wenden Sie sich dazu jederzeit an uns:{" "}
            <a
              href="mailto:info@sensebox.de"
              className="text-[#62A044] hover:underline"
            >
              info@sensebox.de
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
