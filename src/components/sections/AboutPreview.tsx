import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BASE_PATH } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex items-center justify-center">
            <Image
              src={`${BASE_PATH}/images/logo.png`}
              alt="Luka Sulc - vlasnik farme Lukina Jaja"
              width={400}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>

          <div>
            <span className="inline-block font-accent text-secondary text-lg mb-2">
              Upoznajte nas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
              Iza svakog jajeta stoji priča
            </h2>
            <p className="text-foreground-light leading-relaxed mb-4">
              Moje ime je Luka Šulc i živim u Opovu, mirnom mestu u Banatu.
              Odrastao sam okružen prirodom i od malih nogu sam učio kako da se
              brinem o životinjama. Danas sa ponosom uzgajam kokoške na
              tradicionalan način.
            </p>
            <p className="text-foreground-light leading-relaxed mb-6">
              Svako jaje koje proizvede naša farma rezultat je pažljivog uzgoja,
              kvalitetne ishrane i ljubavi prema ovom poslu. Verujem da zaslužujete
              da znate odakle Vaša hrana dolazi.
            </p>
            <Button href="/o-nama" variant="outline">
              Pročitajte celu priču
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
