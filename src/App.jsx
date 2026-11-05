
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideDock from './components/SideDock'
import SocialRail from './components/SocialRail'
import ScrollToTop from './components/ScrollToTop'
import Background from './components/ui/Background'
import CursorGlow from './components/ui/CursorGlow'
import Preloader from './components/ui/Preloader'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const siteUrl = 'https://muhammad-sohail-portfolio-009.netlify.app'

const routeMeta = {
  '/': {
    title: 'Muhammad Sohail Portfolio009 | Frontend & React Developer',
    description:
      'Muhammad Sohail Portfolio009 — the official portfolio of Muhammad Sohail, a Frontend and React Developer from Rawalpindi, Pakistan. Explore real e-commerce, booking, AI and ERP projects built with React, JavaScript and Tailwind CSS.',
  },
  '/about': {
    title: 'About Muhammad Sohail | Portfolio009',
    description:
      'About Muhammad Sohail — a frontend developer and BSCS student from Rawalpindi building fast, accessible React interfaces.',
  },
  '/skills': {
    title: 'Skills | Muhammad Sohail Portfolio009',
    description:
      'The stack behind Muhammad Sohail Portfolio009: React, JavaScript, Tailwind CSS, HTML5, CSS3, C++ and modern frontend tooling.',
  },
  '/projects': {
    title: 'Projects | Muhammad Sohail Portfolio009',
    description:
      'Real projects by Muhammad Sohail — an e-commerce store, an AI voice agent for restaurants, a hotel booking platform, a cinematic product site and a multi-module ERP.',
  },
  '/experience': {
    title: 'Experience | Muhammad Sohail Portfolio009',
    description:
      'Experience and education of Muhammad Sohail — frontend internships at HiFi Company and Jugrafia, plus a BS Computer Science degree in progress.',
  },
  '/resume': {
    title: 'Resume | Muhammad Sohail Portfolio009',
    description:
      'Download or print the resume of Muhammad Sohail, a Frontend and React Developer from Rawalpindi, Pakistan.',
  },
  '/contact': {
    title: 'Contact | Muhammad Sohail Portfolio009',
    description:
      'Get in touch with Muhammad Sohail for frontend development, React work, internships or freelance projects.',
  },
}

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  // Dynamic canonical, title and description for every page
  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, '') || '/'
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`
    const meta = routeMeta[pathname] || routeMeta['/']

    let canonical = document.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalUrl)
    document.title = meta.title

    const setMeta = (selector, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute('content', value)
    }

    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', canonicalUrl)
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)
  }, [location.pathname])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <Background />
      <CursorGlow />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <SocialRail />
      <SideDock />

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-[70vh]"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>

      <Footer />
      <BackToTop />
    </>
  )
}
