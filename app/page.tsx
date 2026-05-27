import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { LogoMarquee } from '@/components/sections/logo-marquee'
import { AboutSection } from '@/components/sections/about'
import { NumbersSection } from '@/components/sections/numbers'
import { ServicesSection } from '@/components/sections/services'
import { WorkSection } from '@/components/sections/work'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <AboutSection />
      <NumbersSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
