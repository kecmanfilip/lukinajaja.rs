import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { LatestPosts } from "@/components/sections/LatestPosts";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { CTASection } from "@/components/sections/CTASection";
import { localBusinessJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <Hero />
      <Features />
      <AboutPreview />
      <HowToOrder />
      <LatestPosts />
      <FAQPreview />
      <CTASection />
    </>
  );
}
