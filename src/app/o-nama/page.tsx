import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Leaf, Eye, Sun } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Upoznajte Luku Šulca i njegovu porodičnu farmu domaćih jaja u Opovu. Saznajte kako uzgajamo kokoške na slobodnom i proizvodimo najkvalitetnija domaća jaja.",
  alternates: { canonical: `${SITE_URL}/o-nama` },
  openGraph: {
    title: "O nama | Lukina Jaja",
    description:
      "Upoznajte Luku Šulca i njegovu porodičnu farmu domaćih jaja u Opovu.",
    url: `${SITE_URL}/o-nama`,
  },
};

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Ljubav prema poslu",
    description:
      "Svaki dan provodimo sa našim kokošakama. To nije posao - to je način života.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Prirodnost",
    description:
      "Bez hemije, bez prečica. Samo prirodna hrana, čist vazduh i mnogo sunca.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Transparentnost",
    description:
      "Znate tačno odakle dolazi Vaša hrana. Vrata naše farme su uvek otvorena.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Tradicija",
    description:
      "Uzgajamo kokoške onako kako su to radili naši dedovi - proverenim, tradicionalnim metodama.",
  },
];

export default function ONamaPage() {
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
              { name: "O nama", url: `${SITE_URL}/o-nama` },
            ])
          ),
        }}
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "O nama" }]} />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-block font-accent text-secondary text-lg mb-2">
                Naša priča
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                O nama - Lukina Jaja iz Opova
              </h1>
              <div className="space-y-4 text-foreground-light leading-relaxed">
                <p>
                  Zdravo! Moje ime je Luka Šulc i živim u Opovu, malom mirnom
                  mestu u Banatu, u srcu Vojvodine. Od malih nogu sam odrastao
                  okružen prirodom, životinjama i svežim vazduhom. Baka i deda
                  su uvek imali kokoške u dvorištu, a ja sam kao dete svako jutro
                  trčao da skupljam jaja.
                </p>
                <p>
                  Ta ljubav prema prirodnom uzgoju ostala je sa mnom i danas.
                  Odlučio sam da nastavim porodičnu tradiciju i ponudim ljudima
                  iz okoline ono što je nekada bilo sasvim normalno - pravo,
                  sveže, domaće jaje.
                </p>
                <p>
                  Naše kokoške žive na otvorenom, imaju prostran ispust gde
                  slobodno šetaju, čeprkaju po travi i uživaju u suncu. Hranimo
                  ih mešavinom kukuruza, pšenice i suncokreta - bez ikakvih
                  hormona, antibiotika ili veštačkih dodataka.
                </p>
                <p>
                  Verujem da kvalitetna hrana počinje od srećnih životinja.
                  Kada kokoške žive u dobrim uslovima, jaja koja snesu su
                  neuporedivo bolja - i po ukusu, i po hranjivoj vrednosti.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Luka Sulc - vlasnik farme Lukina Jaja u Opovu"
                width={450}
                height={450}
                priority
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Naše vrednosti
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-xl border border-border p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-background-alt rounded-2xl p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Gde se nalazimo
            </h2>
            <p className="text-foreground-light leading-relaxed mb-6 max-w-2xl">
              Opovo je malo mesto u opštini Opovo, u Južnobanatskom okrugu. Nalazi
              se na oko 30 km od Pančeva i 50 km od Beograda. Okruženo je
              plodnim vojvođanskim ravnicama, čistim vazduhom i mirom - idealni
              uslovi za uzgoj zdravih i srećnih kokošaka.
            </p>
            <div className="aspect-[16/9] bg-white rounded-xl border border-border overflow-hidden">
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
