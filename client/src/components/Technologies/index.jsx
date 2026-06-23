import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TECHNOLOGIES, IMAGES } from '../../data'

export default function Technologies() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="eyebrow">Tools &amp; Technologies</span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {TECHNOLOGIES.map((tech, i) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex flex-col items-center gap-2 cursor-default"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${tech.color}18`, border: `1.5px solid ${tech.color}30` }}
              >
                <img
                  src={IMAGES[tech.image]}
                  alt={tech.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-[0.72rem] text-[#555570] font-500">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
