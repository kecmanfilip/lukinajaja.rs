import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Placeholder image */}
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-background-alt to-secondary/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-20 h-20 mx-auto text-primary/30 mb-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 10-16 0" />
              </svg>
              <span className="font-accent text-foreground-light text-lg">
                Luka Šulc
              </span>
            </div>
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
