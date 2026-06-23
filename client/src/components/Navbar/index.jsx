import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { NAV_LINKS, IMAGES } from '../../data'

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active link based on scroll position
      const sections = ['home','about','services','portfolio','testimonials','blog','contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-[55px]">
          {/* Brand */}
          <a href="#home" onClick={() => handleNav('#home')} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] bg-[#1a6ef5] flex items-center justify-center
                            text-white font-black text-base shrink-0">G</div>
            <div className="leading-tight">
              <span className="block font-bold text-[0.95rem] text-[#1a1a2e]">G-Strides</span>
              <span className="block text-[0.65rem] text-[#888] font-normal">Technology</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className={`text-[0.88rem] font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none
                    ${activeLink === href ? 'text-[#1a6ef5]' : 'text-[#555570] hover:text-[#1a6ef5]'}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNav('#contact')}
            className="hidden lg:inline-flex items-center gap-2 bg-[#1a6ef5] hover:bg-[#1355cc]
                       text-white text-[0.85rem] font-bold px-5 py-2.5 rounded-lg
                       transition-all duration-200 cursor-pointer border-none"
          >
            Let's Talk <span className="text-xs">→</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden p-2 text-[#1a1a2e] bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-[72px] px-6 pb-8 lg:hidden overflow-x-auto w-[50%]"
          >
            <ul className="flex flex-col gap-1 list-none mt-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className={`w-full text-left py-3.5 px-4 text-[1rem] font-600 rounded-xl
                                transition-colors duration-200 cursor-pointer bg-transparent border-none
                                ${activeLink === href
                                  ? 'text-[#1a6ef5] bg-[#e8f0fe]'
                                  : 'text-[#1a1a2e] hover:bg-[#f7f9ff] hover:text-[#1a6ef5]'}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary mt-10 w-full justify-center text-center"
            >
              Let's Talk →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
