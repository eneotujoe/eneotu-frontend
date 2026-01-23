import { HeroSection } from "@/components/hero-section"
import { InterestSection } from "@/components/interest-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <InterestSection />
      <ContactSection />
    </main>
  )
}
