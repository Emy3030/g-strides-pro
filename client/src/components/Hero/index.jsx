import { motion } from "framer-motion";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import { HERO_STATS, IMAGES } from "../../data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="
            relative
            mt-[80px]
            overflow-hidden
            rounded-[15px]
            mx-2
            "
      style={{
        background: `
            linear-gradient(
            135deg,
            #083ea8 0%,
            #0f58d8 30%,
            #1674ff 70%,
            #3a97ff 100%
            )
            `,
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-125 h-125 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fff 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-75 h-75 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fff 0%, transparent 70%)",
          transform: "translate(-40%, 40%)",
        }}
      />

      <div
        className="
            max-w-7xl
            mx-auto
            px-4
            md:px-6
            lg:px-12

            flex
            flex-col
            md:flex-row

            relative
            z-10
          "
      >
        {" "}
        {/* Left content */}
        <div
          className="
              w-full
              md:w-[55%]

              pt-8
              md:pt-10

              pb-4
              md:pb-[6px]

              z-20
            "
        >
          {/* Badge */}
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30
                       text-white text-[0.7rem] font-bold tracking-widest uppercase
                       px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Welcome to G-Strides
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="
                    text-white
                    font-extrabold
                    leading-[1.1]
                    mb-3
                    text-[2.1rem]
                    leading-[1]

                    md:text-[3.0rem]
                    lg:text-[3rem]
                                      "
          >
            Hi, I'm
            <br />
            Emperor <span className="text-[#17d4e8]">Emeka</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp(0.3)}
            className="
              text-white/90
              font-medium
              text-[0.53rem]
              max-w-[260px]
              mb-3

              min-[376px]:mb-3
              min-[376px]:max-w-[220px]
              min-[376px]:text-[0.85rem]
              min-[480px]:text-[0.85rem]
              
              md:max-w-[260px]
              md:text-[1.2rem]
              md:max-w-[320px]

              lg:text-[0.9rem]
              lg:max-w-[620px]
            "
          >
            Web & Mobile App Developer | Founder of G-Strides Technology
          </motion.p>

          {/* Description */}
          <motion.p
            {...fadeUp(0.35)}
            className="
              hidden
              lg:block
               lg:max-w-[399px]
              text-white/78
              text-[0.9rem]
              leading-relaxed
              mb-5
            "
          >
            I build modern, responsive websites and mobile applications that
            help businesses grow and generate income.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-3  md:flex-nowrap w-[140px]"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="
                btn-primary  
                 px-3
                py-2
                text-[12px]

                min-[376px]:px-3
                min-[376px]:py-2
                min-[376px]:text-sm

                min-[480px]:px-6

                min-[580px]:text-[12px]
                min-[580px]:px-3
                min-[580px]:py-2
                "
            >
              Hire Me <HiArrowRight />
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="
                btn-ghost px-3
                py-2
                text-[12px]

                min-[376px]:px-2
                min-[376px]:py-2
                min-[376px]:text-[12px]

                min-[480px]:font-extrabold
                min-[480px]:text-[10px]

                min-[580px]:font-semibold
                min-[580px]:text-sm
                min-[580px]:px-3
                min-[580px]:py-2
                "
            >
              View My Work <HiPlay />
            </button>
          </motion.div>

          {/* Mobile Hero Image */}
          <div
            className="
              flex
              justify-end
              absolute
              right-[-60px]
              top-46

              min-[376px]:pr-4
              min-[376px]:right-[-90px]

              min-[480px]:top-30

              sm:top-20
              sm:right-0

              md:hidden

            "
          >
            <img
              src={IMAGES.heroPhoto}
              alt="Emperor Emeka"
              className="
                h-[260px]

                min-[376px]:h-[320px]

                min-[480px]:h-[380px]

                 min-[680px]:h-[399px]
              object-contain
            "
            />
          </div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.5)}
            className="
              mt-[20px]
              w-[108%]

              relative
              z-20
               gap-10

              pt-6

              border-t
              border-white/20

              grid
              grid-cols-2
              left-[-12px]
              bg-[#1355cc]
              rounded-[20px]
              p-5
              shadow-xl
              gap-y-5

              min-[480px]:w-[105%]

              sm:w-[97%]

              md:flex
              md:items-center
              md:relative
              md:left-[-10px]
              md:w-[170%]
              md:bg-[#1355cc]
              md:rounded-2xl
              md:px-7
              md:py-10
              md:shadow-xl

              lg:w-auto
              lg:bg-transparent
              lg:shadow-none
              lg:rounded-none
              lg:px-0
              lg:py-6

             
            "
          >
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Right: profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="
            hidden

            md:block

            md:absolute
            md:right-[-10px]
            md:top-0
            md:bottom-0

            md:w-[55%]

            lg:relative
            lg:w-[60%]
            lg:self-end
          "
        >
          <div
            className="
                absolute
                z-0
                w-[450px]
                h-[450px]
                rounded-full
                bg-white/10
                blur-[90px]
                right-[50px]
                top-1/2
                -translate-y-1/2
                "
          />
          <img
            src={IMAGES.heroPhoto}
            alt="Emperor Emeka"
            className="
              
              md:absolute
              md:bottom-0
              md:right-[-10px]
              md:h-[90%]

              lg:relative
              lg:h-[96%]

              object-contain

              z-10
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
