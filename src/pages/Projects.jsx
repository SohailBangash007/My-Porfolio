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
        description="Nine real builds — a health and wellness store, a YouTube-inspired video platform, an e-commerce store, an AI voice agent, a hotel booking platform, a cinematic product site, a multi-module ERP, a travel website and a watch brand store. Filter by type or search by technology."
      />
      <ProjectsSection />
      <CTASection />
    </>
  )
}
