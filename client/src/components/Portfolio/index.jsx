import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight, HiExternalLink } from 'react-icons/hi'
import { PROJECTS, IMAGES } from '../../data'

const FILTERS = ['All', 'Web Application', 'Mobile Application']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="portfolio" className="section-pad bg-[#f7f9ff]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">
            Every pixel crafted with <span className="accent">purpose</span>
          </h2>
          <p className="text-[#555570] text-[0.9rem] max-w-[480px] mx-auto">
            Here are some of my recent projects that I'm proud of.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-[0.82rem] font-600 transition-all duration-200 cursor-pointer border
                  ${active === f
                    ? 'bg-[#1a6ef5] text-white border-[#1a6ef5]'
                    : 'bg-white text-[#555570] border-[#e4e8f0] hover:border-[#1a6ef5] hover:text-[#1a6ef5]'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="card group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden" style={{ height: '140px' }}>
                  <img
                    src={IMAGES[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1a6ef5]/80 flex items-center justify-center
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link}
                       className="w-10 h-10 rounded-full bg-white flex items-center justify-center
                                  text-[#1a6ef5] hover:scale-110 transition-transform duration-200">
                      <HiExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3">
                  <div className="font-700 text-[0.85rem] text-[#1a1a2e] mb-0.5 truncate">
                    {project.title}
                  </div>
                  <div className="text-[0.72rem] text-[#1a6ef5] font-500">
                    {project.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="btn-primary mx-auto">
            View All Projects <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
