import PageHeader from '../components/ui/PageHeader'
import SkillsSection from '../components/sections/SkillsSection'
import CTASection from '../components/sections/CTASection'

export default function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Skills & tools"
        title="The stack I use to ship"
        highlight="interfaces."
        crumb="Skills"
        description="Honest levels, not buzzwords. Everything here has been used in a coursework project, an internship task or a personal build."
      />
      <SkillsSection />
      <CTASection />
    </>
  )
}
