import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative md:pl-32">
      <Navigation />
      <HeroSection />
      {/* <AboutSection /> */}
      <ExperienceSection />
      <ProjectsSection />
      {/* <SkillsSection /> */}
      <HobbiesSection />
      <ContactSection />
    </main>
  )
}
