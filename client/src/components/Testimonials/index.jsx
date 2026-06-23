import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaStar } from 'react-icons/fa'
import { TESTIMONIALS } from '../../data'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} size={15} color="#f59e0b" />
      ))}
    </div>
  )
}

function TestiCard({ t }) {
  return (
    <div className="bg-white border border-[#e4e8f0] rounded-2xl p-6 h-full flex flex-col">
      <StarRating count={t.stars} />
      <p className="text-[#555570] text-[0.88rem] leading-relaxed flex-1 mb-5">
        {t.bold
          ? <>
              "<strong className="text-[#1a1a2e] font-semibold">{t.bold}</strong>
              {' '}{t.text.replace('"' + t.bold, '').replace(/^"|"$/g, '')}"
            </>
          : t.text
        }
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center
                        text-[#1a6ef5] font-bold text-[0.85rem] shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="font-700 text-[0.88rem] text-[#1a1a2e]">{t.name}</div>
          <div className="text-[0.72rem] text-[#9090a8]">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" className="section-pad bg-[#f7f9ff]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">
            What My <span className="accent">Clients</span> Say
          </h2>
        </motion.div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TestiCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={16}
            slidesPerView={1}
            className="pb-10"
          >
            {TESTIMONIALS.map(t => (
              <SwiperSlide key={t.id}>
                <TestiCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
