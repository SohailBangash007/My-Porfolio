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
        description="Seven real builds — a full e-commerce store, an AI voice agent for restaurants, a hotel booking platform, a cinematic product site, a multi-module ERP, a travel website and a watch brand store. Filter by type or search by technology."
      />
      <ProjectsSection />
      <CTASection />
    </>
  )
}
