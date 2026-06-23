import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { IMAGES } from '../../data'

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left: Photo */}
        <FadeIn direction="left">
          <div className="relative max-w-[380px] mx-auto md:mx-0">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#e8f0fe] flex items-center justify-center">
              <img
                src={IMAGES.aboutPhoto}
                alt="Emperor Emeka"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring', bounce: 0.4 }}
              className="absolute bottom-6 -left-5 bg-white rounded-2xl px-5 py-3 text-center
                         shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#e4e8f0]"
            >
              <div className="text-[1.6rem] font-extrabold text-[#1a6ef5] leading-none">3+</div>
              <div className="text-[0.68rem] text-[#555570] mt-0.5 leading-tight font-medium">
                Years<br/>Experience
              </div>
            </motion.div>
          </div>
        </FadeIn>

        {/* Right: Text */}
        <FadeIn direction="right" delay={0.15}>
          <div>
            <span className="eyebrow">About Me</span>
            <h2 className="section-title">
              A Developer Who Turns<br/>Ideas into <span className="accent">Impact</span>
            </h2>
            <p className="text-[#555570] text-[0.9rem] leading-relaxed mb-4">
              I'm a passionate Web &amp; Mobile App Developer with over 3 years of experience
              creating digital products that are not only visually appealing but also functional,
              scalable, and user-focused.
            </p>
            <p className="text-[#555570] text-[0.9rem] leading-relaxed mb-6">
              I help startups, entrepreneurs, and businesses bring their ideas to life with
              clean code, modern design, and the best tech solutions.
            </p>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
            >
              More About Me <HiArrowRight />
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
