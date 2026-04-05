import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background-alt to-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block font-accent text-secondary text-lg mb-3">
              Pravo iz Opova, do Vašeg stola
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              Sveža domaća jaja pravo iz Opova
            </h1>
            <p className="text-lg text-foreground-light leading-relaxed mb-8 max-w-lg">
              Naše kokoške žive na slobodnom uzgoju, hrane se prirodnom hranom
              bez hormona i aditiva. Svako jaje je garancija kvaliteta, ukusa i
              zdravlja za Vašu porodicu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/kontakt">Naručite jaja</Button>
              <Button href="/o-nama" variant="outline">
                Saznajte više
              </Button>
            </div>
          </div>

          {/* Placeholder illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-br from-secondary/30 to-secondary-light/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-secondary/60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <ellipse cx="12" cy="13" rx="8" ry="10" opacity="0.3" />
                  <ellipse cx="12" cy="13" rx="7" ry="9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
