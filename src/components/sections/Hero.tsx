import Image from "next/image";
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

          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Luka Sulc grli domaca jaja - Lukina Jaja logo"
              width={400}
              height={400}
              priority
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
