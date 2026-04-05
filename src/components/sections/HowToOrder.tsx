import { Phone, Handshake, Package } from "lucide-react";

const steps = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Pozovite ili pišite",
    description:
      "Javite nam se telefonom ili WhatsApp porukom. Recite nam koliko jaja Vam treba.",
    number: "01",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Dogovorimo se",
    description:
      "Zajedno biramo termin i način preuzimanja koji Vam najviše odgovara.",
    number: "02",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Preuzmite jaja",
    description:
      "Dođite po sveža jaja u Opovo ili ih mi dostavimo na Vašu adresu.",
    number: "03",
  },
];

export function HowToOrder() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kako naručiti?
          </h2>
          <p className="text-foreground-light max-w-2xl mx-auto">
            Naručivanje je jednostavno - u tri koraka do svežih domaćih jaja.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="absolute inset-0 bg-secondary/10 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center text-secondary">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-foreground-light text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
