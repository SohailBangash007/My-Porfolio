import PageHeader from '../components/ui/PageHeader'
import ContactSection from '../components/sections/ContactSection'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next"
        highlight="project."
        crumb="Contact"
        description="Whether it is an internship, a junior role or a freelance build — I would love to hear about it. Email, call or send the form below."
      />
      <ContactSection />
    </>
  )
}
