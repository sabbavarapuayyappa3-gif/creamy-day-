import { Hero } from "@/components/sections/Hero";
import { SignatureScoop } from "@/components/sections/SignatureScoop";
import { MenuSection } from "@/components/sections/MenuSection";
import { BrandStory } from "@/components/sections/BrandStory";
import { QualityCraft } from "@/components/sections/QualityCraft";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureScoop />
      <MenuSection />
      <BrandStory />
      <QualityCraft />
      <FinalCTA />
      <ContactSection />
    </>
  );
}
