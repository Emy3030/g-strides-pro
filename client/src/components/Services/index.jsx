import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MdDesktopWindows, MdPhoneAndroid, MdBrush } from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'
import { SERVICES, IMAGES } from '../../data'

const ICON_MAP = { MdDesktopWindows, MdPhoneAndroid, MdBrush }

export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="eyebrow">What I Do</span>
          <h2 className="section-title">
            Design That <span className="accent">Works</span> Not Just Looks
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon]
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card flex flex-col"
              >
                {/* Blue header */}
                <div
                  className="p-5 flex items-start gap-3"
                  style={{
                    background: svc.featured
                      ? 'linear-gradient(135deg, #0d47a1, #1a6ef5)'
                      : 'linear-gradient(135deg, #1a6ef5, #42a5f5)',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={20} color="#fff" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[1rem] mb-1">{svc.title}</h3>
                    <p className="text-white/85 text-[0.82rem] leading-relaxed">{svc.desc}</p>
                  </div>
                </div>

                {/* Image / illustration area */}
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={IMAGES[svc.image]}
                    alt={svc.title}
                    // className="w-full h-full object-contain"
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="btn-primary mx-auto">
            View All Services <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
