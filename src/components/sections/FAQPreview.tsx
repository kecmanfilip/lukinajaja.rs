import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FAQ_ITEMS } from "@/lib/faq";

export function FAQPreview() {
  const preview = FAQ_ITEMS.slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Najčešća pitanja
          </h2>
          <p className="text-foreground-light">
            Odgovori na pitanja koja nam kupci najčešće postavljaju.
          </p>
        </div>
        <Accordion items={preview} />
        <div className="text-center mt-8">
          <Button href="/najcesca-pitanja" variant="outline">
            Sva pitanja i odgovori
          </Button>
        </div>
      </div>
    </section>
  );
}
