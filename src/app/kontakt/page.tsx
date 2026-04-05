import type { Metadata } from "next";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/ui/ContactForm";
import { CONTACT, SITE_URL } from "@/lib/constants";
import { localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Lukina Jaja — naručite sveža domaća jaja iz Opova. Pozovite 069 201 1315 ili pošaljite WhatsApp poruku.",
  alternates: { canonical: `${SITE_URL}/kontakt` },
  openGraph: {
    title: "Kontakt | Lukina Jaja",
    description:
      "Naručite sveža domaća jaja iz Opova. Pozovite nas ili pošaljite poruku.",
    url: `${SITE_URL}/kontakt`,
  },
};

export default function KontaktPage() {
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
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Početna", url: SITE_URL },
              { name: "Kontakt", url: `${SITE_URL}/kontakt` },
            ])
          ),
        }}
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Kontakt" }]} />

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-foreground-light text-lg mb-12 max-w-2xl">
            Želite da naručite sveža domaća jaja ili imate pitanje? Javite nam
            se — rado ćemo Vam pomoći!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Telefon</h3>
                    <a
                      href={`tel:${CONTACT.phoneInternational}`}
                      className="text-foreground-light hover:text-primary transition-colors text-lg"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle
                      className="w-5 h-5 text-[#25D366]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">WhatsApp</h3>
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-light hover:text-[#25D366] transition-colors"
                    >
                      Pošaljite nam poruku na WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">
                      Lokacija
                    </h3>
                    <p className="text-foreground-light">{CONTACT.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">
                      Radno vreme
                    </h3>
                    <p className="text-foreground-light">
                      {CONTACT.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-[4/3] bg-white rounded-xl border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22579.87!2d20.43!3d44.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a5d7e6c89b7e1%3A0x4c4c4c4c4c4c4c4c!2sOpovo!5e0!3m2!1ssr!2srs!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokacija Opovo na Google mapi"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 h-fit">
              <h2 className="font-heading text-xl font-bold mb-6">
                Pošaljite nam poruku
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
