import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FAQ_ITEMS } from "@/lib/faq";
import {
  localBusinessJsonLd,
  faqPageJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Najčešća pitanja",
  description:
    "Odgovori na najčešća pitanja o domaćim jajima iz Opova — cena, naručivanje, dostava, čuvanje i sve što Vas zanima.",
  alternates: { canonical: `${SITE_URL}/najcesca-pitanja` },
  openGraph: {
    title: "Najčešća pitanja | Lukina Jaja",
    description:
      "Odgovori na najčešća pitanja o domaćim jajima iz Opova.",
    url: `${SITE_URL}/najcesca-pitanja`,
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd(FAQ_ITEMS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Početna", url: SITE_URL },
              {
                name: "Najčešća pitanja",
                url: `${SITE_URL}/najcesca-pitanja`,
              },
            ])
          ),
        }}
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Najčešća pitanja" }]} />

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Najčešća pitanja o domaćim jajima
          </h1>
          <p className="text-foreground-light text-lg mb-10">
            Sve što ste želeli da znate o našim jajima, naručivanju i dostavi.
          </p>

          <Accordion items={FAQ_ITEMS} />

          <div className="mt-12 text-center bg-background-alt rounded-2xl p-8">
            <h2 className="font-heading text-xl font-bold mb-3">
              Imate još pitanja?
            </h2>
            <p className="text-foreground-light mb-5">
              Slobodno nas kontaktirajte — rado ćemo odgovoriti na sva Vaša
              pitanja.
            </p>
            <Button href="/kontakt">Kontaktirajte nas</Button>
          </div>
        </div>
      </section>
    </>
  );
}
