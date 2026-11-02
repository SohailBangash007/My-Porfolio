import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'
import { profile } from '../../data/portfolio'

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  twitter: FiTwitter,
  mail: FiMail,
}

export default function SocialLinks({ className = '', iconClassName = 'h-[18px] w-[18px]' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {profile.socials.map((s) => {
        const Icon = icons[s.icon] || FiGithub
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            className="group grid h-10 w-10 place-items-center rounded-full border border-line/10 bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-accent hover:shadow-glow"
          >
            <Icon className={iconClassName} />
          </a>
        )
      })}
    </div>
  )
}
