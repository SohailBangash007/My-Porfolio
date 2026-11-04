import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolio'

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  twitter: FiTwitter,
  mail: FiMail,
}

export default function SocialRail() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0.3])

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 2xl:flex"
    >
      {profile.socials.map((s) => {
        const Icon = icons[s.icon] || FiGithub
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
          >
            <Icon className="h-[17px] w-[17px]" />
          </a>
        )
      })}
      <span className="h-24 w-px bg-gradient-to-b from-line/20 to-transparent" />
    </motion.div>
  )
}
