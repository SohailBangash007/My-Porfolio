import Hero from '../components/sections/Hero'
import Marquee from '../components/ui/Marquee'
import AboutPreview from '../components/sections/AboutPreview'
import ServicesSection from '../components/sections/ServicesSection'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import StatsSection from '../components/sections/StatsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'
import { techStack } from '../data/portfolio'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={techStack} speed="slow" />
      <AboutPreview />
      <ServicesSection />
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
