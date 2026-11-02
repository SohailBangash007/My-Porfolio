import PageHeader from '../components/ui/PageHeader'
import AboutSection from '../components/sections/AboutSection'
import CTASection from '../components/sections/CTASection'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="Learning fast, building"
        highlight="carefully."
        crumb="About"
        description="A frontend developer and Computer Science student from Rawalpindi — curious about how good interfaces are made, and stubborn about getting the details right."
      />
      <AboutSection />
      <CTASection />
    </>
  )
}
