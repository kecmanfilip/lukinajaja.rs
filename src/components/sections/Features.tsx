import { Bird, ShieldCheck, Timer, Truck } from "lucide-react";
import { FeatureCard } from "@/components/ui/Card";

const features = [
  {
    icon: <Bird className="w-7 h-7" />,
    title: "Slobodan uzgoj",
    description:
      "Naše kokoške slobodno šetaju po dvorištu, uživaju u suncu i svežem vazduhu — onako kako priroda nalaže.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Bez hormona i aditiva",
    description:
      "Hrana za naše kokoške je potpuno prirodna. Nikakvi hormoni, antibiotici ili veštački dodaci.",
  },
  {
    icon: <Timer className="w-7 h-7" />,
    title: "Uvek sveža",
    description:
      "Od kokošinjca do Vašeg stola za manje od 24 sata. Svežina koju možete da osetite na prvi zalogaj.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Lokalna dostava",
    description:
      "Dostavljamo u Opovu, Pančevu i okolini. Za Beograd se dogovaramo — javite nam se!",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-background-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zašto baš naša jaja?
          </h2>
          <p className="text-foreground-light max-w-2xl mx-auto">
            Verujemo da zdrava hrana počinje od srećnih kokošaka. Evo šta nas
            izdvaja od industrijske proizvodnje.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
