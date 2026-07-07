import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – senseBox",
};

export default function Impressum() {
  return (
    <>
      {/* Header bar */}
      <div className="bg-[#62A044]/5 border-b border-[#62A044]/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#62A044] mb-1">
            Rechtliches
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            Impressum
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-gray-700">

        {/* Angaben */}
        <section>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-3">Angaben gemäß § 5 TMG</h2>
          <div className="rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 text-sm leading-relaxed">
            <p className="font-semibold text-gray-900">Reedu GmbH &amp; Co. KG</p>
            <p>Von-Steuben-Str. 21<br />48143 Münster<br />Deutschland</p>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Vertreten durch */}
        <section>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-2">Vertreten durch</h2>
          <p className="text-sm leading-relaxed">
            Reedu Verwaltungs GmbH, vertreten durch die Geschäftsführer Dr. Thomas Bartoschek und Umut Tas
          </p>
        </section>

        <hr className="border-gray-100" />

        {/* Kontakt */}
        <section>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-3">Kontakt</h2>
          <div className="rounded-xl border border-[#62A044]/20 bg-[#62A044]/5 px-5 py-4 text-sm leading-relaxed space-y-1">
            <p>Telefon: +49 251 98119797</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:kontakt@reedu.de" className="text-[#62A044] underline underline-offset-2 hover:text-[#4e8335]">
                kontakt@reedu.de
              </a>
            </p>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Registereintrag */}
        <section>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-2">Registereintrag</h2>
          <p className="text-sm leading-relaxed">
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Münster<br />
            Registernummer: HRA 10639
          </p>
        </section>

        <hr className="border-gray-100" />

        {/* Umsatzsteuer */}
        <section>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-2">Umsatzsteuer</h2>
          <p className="text-sm leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE317828779
          </p>
        </section>

        <hr className="border-gray-100" />

        {/* Verantwortlich für den Inhalt */}
        <section>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-sm leading-relaxed">
            Umut Tas<br />
            Von-Steuben-Str. 21<br />
            48143 Münster
          </p>
        </section>

        <hr className="border-gray-100" />

        {/* Streitschlichtung */}
        <section>
          <h2 className="font-heading text-lg font-bold text-gray-900 mb-2">Streitschlichtung</h2>
          <p className="text-sm leading-relaxed mb-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#62A044] underline underline-offset-2 hover:text-[#4e8335]"
            >
              https://ec.europa.eu/consumers/odr
            </a>.
          </p>
          <p className="text-sm leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <hr className="border-gray-100" />

        {/* Haftung für Inhalte */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-gray-900">Haftung für Inhalte</h2>
          <p className="text-sm leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-sm leading-relaxed">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <hr className="border-gray-100" />

        {/* Haftung für Links */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-gray-900">Haftung für Links</h2>
          <p className="text-sm leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p className="text-sm leading-relaxed">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <hr className="border-gray-100" />

        {/* Urheberrecht */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-gray-900">Urheberrecht</h2>
          <p className="text-sm leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="text-sm leading-relaxed">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

      </div>
    </>
  );
}
