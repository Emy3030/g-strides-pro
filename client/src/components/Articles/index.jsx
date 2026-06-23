import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowRight, HiClock, HiCalendar } from 'react-icons/hi'
import { ARTICLES, IMAGES } from '../../data'

export default function Articles() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="blog" className="section-pad bg-[#f7f9ff]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="eyebrow">Latest Articles</span>
          <h2 className="section-title">
            Sharing Thoughts on Design &amp; <span className="accent">Creativity</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <img
                  src={IMAGES[article.image]}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 text-white text-[0.65rem] font-bold
                             tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ background: article.tagColor }}
                >
                  {article.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-4">
                <h3 className="font-700 text-[0.9rem] text-[#1a1a2e] leading-snug mb-3">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4 text-[0.72rem] text-[#9090a8]">
                  <span className="flex items-center gap-1.5">
                    <HiCalendar size={13} /> {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiClock size={13} /> {article.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="btn-primary mx-auto">
            View All Articles <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
