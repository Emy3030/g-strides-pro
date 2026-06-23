import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import axios from "axios";
import { IMAGES } from "../../data";

const SERVICES_OPTS = [
  "Web Design",
  "Mobile App Development",
  "UI/UX Design",
  "Web Development",
  "App Maintenance",
];
const BUDGETS = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

const INITIAL = { name: "", email: "", service: "", budget: "", message: "" };

/* ─── shared input style ─────────────────────────────────────────────── */
const inputBase = [
  "w-full h-[44px] px-4",
  "bg-[#1a6ef5] border border-white/25 rounded-lg",
  "text-white text-[0.85rem] placeholder:text-white/50",
  "outline-none focus:border-white/60 transition-colors duration-200",
].join(" ");

/* ─── Left panel: photo + text (used both in desktop col and mobile slider) */
function LeftPanel() {
  return (
    <div className="relative flex items-center h-full min-h-[260px]">
      {/* Photo — bleeds to left edge on desktop, centered on mobile */}
      <div
        className="
          relative z-10
          flex-shrink-0
          /* mobile: centered block */
          mx-auto
          /* desktop: absolute left bleed handled by negative margin on wrapper */
          lg:mx-0 lg:absolute lg:left-0 lg:bottom-0
          h-[220px] sm:h-[260px] lg:h-[105%]
        "
      >
        <img
          src={IMAGES.contactPhoto}
          alt="Emperor Emeka"
          className="h-full w-auto object-contain object-bottom select-none pointer-events-none"
        />
      </div>

      {/* Text — sits to the right of the photo */}
      <div
        className="
          relative z-20
          pl-4 lg:pl-[200px] xl:pl-[230px]
          pr-4
          py-8
          flex flex-col gap-3
          text-center lg:text-left
          mx-auto lg:mx-0
        "
      >
        {/* Badge */}
        <span
          className="
            inline-flex self-center lg:self-start
            items-center gap-2
            bg-white/15 border border-white/25
            text-white text-[0.68rem] font-bold tracking-[0.12em] uppercase
            px-4 py-1.5 rounded-full
          "
        >
          Contact Me
        </span>

        {/* Headline */}
        <h2
          className="
            text-white font-extrabold leading-[1.15]
            text-[1.45rem] sm:text-[1.7rem] lg:text-[1.6rem] xl:text-[1.9rem]
          "
        >
          Have a project in mind?
          <br />
          Let's make it real
        </h2>

        {/* Body */}
        <p className="text-white/80 text-[0.88rem] leading-relaxed max-w-[280px] mx-auto lg:mx-0">
          Fill out the form and let's discuss how we can bring your ideas to
          life.
        </p>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* mobile slider state */
  const [slide, setSlide] = useState(0); // 0 = info panel, 1 = form panel
  const sliderRef = useRef(null);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/contact", form);
      setSuccess(true);
      setForm(INITIAL);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  /* ── Form JSX (shared between desktop col + mobile slide) ── */
  const FormContent = (
    <>
      {success ? (
        <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
          <HiCheckCircle size={52} color="#fff" />
          <h3 className="font-bold text-[1.15rem] text-white">Message Sent!</h3>
          <p className="text-white/80 text-[0.88rem]">
            Thanks for reaching out. I'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-1 bg-white text-[#1155cc] font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-white/90 transition"
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-[0.82rem] font-semibold mb-1.5">
                Your Name <span className="text-red-300">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputBase}
              />
            </div>
            <div>
              <label className="block text-white text-[0.82rem] font-semibold mb-1.5">
                Your Email <span className="text-red-300">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={inputBase}
              />
            </div>
          </div>

          {/* Row 2: Service + Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-[0.82rem] font-semibold mb-1.5">
                Your Service
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none pr-8 cursor-pointer`}
                >
                  <option value="" className="bg-[#1a6ef5]">
                    Select a service
                  </option>
                  {SERVICES_OPTS.map((s) => (
                    <option key={s} value={s} className="bg-[#1a6ef5]">
                      {s}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60 text-xs">
                  ▾
                </span>
              </div>
            </div>
            <div>
              <label className="block text-white text-[0.82rem] font-semibold mb-1.5">
                Project Budget
              </label>
              <div className="relative">
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none pr-8 cursor-pointer`}
                >
                  <option value="" className="bg-[#1a6ef5]">
                    Select budget
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b} className="bg-[#1a6ef5]">
                      {b}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60 text-xs">
                  ▾
                </span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white text-[0.82rem] font-semibold mb-1.5">
              Your Message <span className="text-red-300">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={4}
              className={`${inputBase} h-auto py-3 resize-y`}
            />
          </div>

          {error && (
            <p className="text-red-300 text-[0.8rem] font-medium -mt-1">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full h-[46px]
              bg-white text-[#1155cc]
              font-bold text-[0.9rem]
              rounded-lg
              flex items-center justify-center gap-2
              hover:bg-white/90 active:scale-[0.99]
              transition-all duration-200
              disabled:opacity-60 disabled:cursor-not-allowed
              mt-1
            "
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Sending…
              </span>
            ) : (
              <>
                Send Message <HiArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </>
  );

  return (
    <section id="contact" className="py-12 px-4 sm:px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(118deg, #1155cc 0%, #1a6ef5 50%, #42a5f5 100%)",
        }}
      >
        {/* ══════════════════════════════════════════════════
            DESKTOP (lg+): photo | text | form  — 3 columns
        ══════════════════════════════════════════════════ */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.05fr] min-h-[340px]">
          {/* LEFT COL: photo bleeds, text floats right of it */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative overflow-hidden"
          >
            {/* Photo — anchored bottom-left, bleeds upward */}
            <div
              className="absolute bottom-0 
                 left-0 
                 lg:left-[-86px]
                 h-[103%] z-10"
            >
              <img
                src={IMAGES.contactPhoto}
                alt="Emperor Emeka"
                className="h-full w-auto object-contain object-bottom select-none"
              />
            </div>

            {/* Text — sits to the right of photo */}
            <div className="relative z-20 h-full flex flex-col justify-center pl-[200px] xl:pl-[230px] pr-6 py-10 gap-4">
              <span
                className="
                  self-start inline-flex items-center gap-2
                  bg-white/15 border border-white/25
                  text-white text-[0.68rem] font-bold tracking-[0.12em] uppercase
                  px-4 py-1.5 rounded-full
                "
              >
                Contact Me
              </span>
              <h2 className="text-white font-extrabold leading-[1.15] text-[1.55rem] xl:text-[1.85rem]">
                Have a project in mind?
                <br />
                Let's make it real
              </h2>
              <p className="text-white/80 text-[0.88rem] leading-relaxed max-w-[260px]">
                Fill out the form and let's discuss how we can bring your ideas
                to life.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COL: form */}
          <motion.div 
               initial={{opacity: 0, x: 80}}
               animate={inView ? {opacity: 1, x: 0} : {}}
               transition={{
                  duration: 0.8,
                  delay:0.16,
                  ease: "easeOut"
               }}
               className="flex items-center py-8 px-8 xl:px-10">
            <div className="w-full">{FormContent}</div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════
            TABLET  (sm–lg): slider top + form below
        ══════════════════════════════════════════════════ */}
        <div 
            initial={{opacity: 0, y: 39}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{
                duration: 0.7,
                ease: "easeOut"
            }}
            className="hidden sm:block lg:hidden">
          {/* Slider panel */}
          <div className="relative overflow-hidden" style={{ height: "260px" }}>
            {/* Photo */}
            <div
              className="absolute bottom-0 
                left-0 h-[105%] 
                min-[768px]:left-6
                min-[768px]:h-[130%]
                min-[768px]:bottom-[-60px]

                min-[908px]:left-20
                z-10"
            >
              <img
                src={IMAGES.contactPhoto}
                alt="Emperor Emeka"
                className="h-full w-auto object-contain object-bottom select-none"
              />
            </div>
            {/* Text */}
            <div
              className="relative z-20 h-full flex flex-col justify-center 
                    pl-[260px] pr-8 
                    min-[768px]:pl-[320px]

                    min-[908px]:pl-[360px]
                    gap-3"
            >
              <span
                className="
                  self-start inline-flex items-center
                  bg-white/15 border border-white/25
                  text-white text-[0.65rem] font-bold tracking-[0.1em] uppercase
                  px-3 py-1 rounded-full
                  min-[600px]:text-[0.95rem]
                "
              >
                Contact Me
              </span>
              <h2
                className="text-white font-extrabold leading-tight text-[1.4rem]  min-[668px]:text-[1.6rem]
                    min-[868px]:text-[2rem]
                    "
              >
                Have a project in mind?
                <br />
                Let's make it real
              </h2>
              <p
                className="text-white/80 text-[0.82rem] leading-relaxed max-w-[300px]
                     min-[868px]:text-[1rem]
              "
              >
                Fill out the form below and let's bring your ideas to life.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/15 mx-6" />

          {/* Form */}
          <div className="p-6 sm:p-8">{FormContent}</div>
        </div>

        {/* ══════════════════════════════════════════════════
            MOBILE (< sm  /  320–479px):
            slide panel for photo+info, then form below
        ══════════════════════════════════════════════════ */}
        <div 
           initial={{opacity: 0, y:30}}
           animate={inView ? {opacity: 1, y:0}: {}}
           transition={{
              duration:0.6,
              ease: "easeOut"
           }}
           className="block sm:hidden">
          {/* Slider: dots + two slides */}
          <div className="relative overflow-hidden">
            {/* Slides track */}
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${slide * 50}%)`,
                width: "200%",
              }}
            >
              {/* Slide 0 — Photo + info */}
              <div
                className="flex-shrink-0 relative"
                style={{ width: "50%", minHeight: "280px" }}
              >
                {/* Photo */}
                <div
                  className="
                    absolute 
                    bottom-0 
                    max-[530px]:left-[-60px] max-[600px]:left-[-10px] max-[630px]:left-[0px]
                    pr-6 
                    h-[105%] 
                    z-10
                    "
                >
                  <img
                    src={IMAGES.contactPhoto}
                    alt="Emperor Emeka"
                    className="h-full w-auto max-w-[260px] object-contain object-bottom select-none"
                  />
                </div>
                {/* Text */}
                <div
                  className="relative z-20 h-full flex flex-col justify-center
                     max-[530px]:pl-[150px]
                     min-[520px]:pl-[180px] 
                      min-[600px]:pl-[220px] 
                     pr-4
                     py-8 
                     gap-3
                     "
                >
                  <span
                    className="
                      self-start inline-flex items-center
                      bg-white/15 border border-white/25
                      text-white text-[0.6rem] font-bold tracking-[0.1em] uppercase
                      px-3 py-1 rounded-full
                    "
                  >
                    Contact Me
                  </span>
                  <h2 className="text-white font-extrabold leading-tight text-[1.2rem]">
                    Have a project in mind?
                    <br />
                    Let's make it real
                  </h2>
                  <p className="text-white/80 text-[0.78rem] leading-relaxed">
                    Fill out the form and let's bring your ideas to life.
                  </p>
                  {/* Next button */}
                  {/* <button
                    onClick={() => setSlide(1)}
                    className="
                      self-start mt-1
                      bg-white/20 hover:bg-white/30 border border-white/30
                      text-white text-[0.75rem] font-semibold
                      px-4 py-1.5 rounded-full
                      flex items-center gap-1 transition
                    "
                  >
                    Fill the form <HiArrowRight size={13} />
                  </button> */}
                </div>
              </div>

              {/* Slide 1 — Preview / CTA to scroll down */}
              {/* <div
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 px-6 py-8"
                style={{ width: "50%" }}
              >
                <p className="text-white/80 text-[0.82rem] text-center">
                  Ready to get started? Scroll down or go back.
                </p>
                <button
                  onClick={() => setSlide(0)}
                  className="bg-white/20 border border-white/30 text-white text-[0.75rem] font-semibold px-4 py-1.5 rounded-full hover:bg-white/30 transition"
                >
                  ← Back
                </button>
              </div> */}
            </div>

            {/* Dot indicators */}
            {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    slide === i ? "bg-white w-5" : "bg-white/40"
                  }`}
                />
              ))}
            </div> */}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/15 mx-5" />

          {/* Form — always visible below slider on mobile */}
          <div className="p-5" id="formMobileView">
            {FormContent}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
