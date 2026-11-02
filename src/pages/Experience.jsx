import PageHeader from '../components/ui/PageHeader'
import ExperienceSection from '../components/sections/ExperienceSection'
import CTASection from '../components/sections/CTASection'

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience & education"
        title="Where I have worked, and what I am"
        highlight="studying."
        crumb="Experience"
        description="Two internships so far — a month at Jugrafia and an ongoing frontend role at HiFi Company — alongside a BS Computer Science degree with four semesters completed."
      />
      <ExperienceSection />
      <CTASection />
    </>
  )
}
