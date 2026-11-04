
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

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  // Dynamic Canonical URL for every page
  useEffect(() => {
    const baseUrl = 'https://muhammad-sohail-portfolio-009.netlify.app'
    const pathname = location.pathname.replace(/\/+$/, '') || '/'
    const canonicalUrl = `${baseUrl}${pathname === '/' ? '/' : pathname}`

    let canonical = document.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalUrl)
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
