import PageHeader from '../components/ui/PageHeader'
import ProjectsSection from '../components/sections/ProjectsSection'
import CTASection from '../components/sections/CTASection'

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Things I have designed and"
        highlight="built."
        crumb="Projects"
        description="Six selected projects — from an e-commerce storefront to a map explorer inspired by my internship at Jugrafia. Filter by type or search by technology."
      />
      <ProjectsSection />
      <CTASection />
    </>
  )
}
