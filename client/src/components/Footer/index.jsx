import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES, FOOTER_CONTACT } from '../../data'

const SOCIALS = [
  { icon: FaFacebookF,  href: '#', label: 'Facebook'  },
  { icon: FaTwitter,    href: '#', label: 'Twitter'   },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn'  },
  { icon: FaYoutube,    href: '#', label: 'YouTube'   },
  { icon: FaGithub,     href: '#', label: 'GitHub'    },
]

const CONTACT_ICONS = { phone: HiPhone, email: HiMail, location: HiLocationMarker }

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1355cc] text-white">
      <div className="max-w-[1200px] mx-auto px-[5%] pt-14 pb-6">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[10px] bg-[#1a6ef5] flex items-center justify-center
                              text-white font-black text-base shrink-0">G</div>
              <div className="leading-tight">
                <span className="block font-bold text-[0.95rem]">G-Strides</span>
                <span className="block text-[0.65rem] text-[#fff] font-normal">Technology</span>
              </div>
            </div>
            <p className="text-[#fff] text-[0.82rem] leading-relaxed mb-5 max-w-[220px]">
              We build digital products that help businesses grow and succeed.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#1a6ef5] flex items-center justify-center
                             text-[#fff] text-[0.8rem] hover:bg-[#1a6ef5] hover:text-white
                             transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[0.85rem] font-700 mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2.5 list-none">
              {FOOTER_QUICK_LINKS.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-[#fff] text-[0.82rem] hover:text-white transition-colors
                               duration-200 cursor-pointer bg-transparent border-none text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.85rem] font-700 mb-4 font-semibold">Services</h4>
            <ul className="space-y-2.5 list-none">
              {FOOTER_SERVICES.map(svc => (
                <li key={svc}>
                  <a href="#services"
                     className="text-[#fff] text-[0.82rem] hover:text-white transition-colors duration-200">
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[0.85rem] font-700 mb-4 font-semibold">Contact Info</h4>
            <div className="space-y-3">
              {FOOTER_CONTACT.map(({ icon, text }) => {
                const Icon = CONTACT_ICONS[icon]
                return (
                  <div key={text} className="flex items-start gap-2.5">
                    <Icon size={17} className="text-[#fff] mt-0.5 shrink-0" />
                    <span className="text-[#fff] text-[0.82rem] min-[320px]: leading-snug">{text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e2330] pt-5 flex flex-col sm:flex-row
                        items-center justify-between gap-2 text-[#fff] text-[0.75rem]">
          <p>© {year} G-Strides Technology. All rights reserved.</p>
          <p>Built with ❤️ using React</p>
        </div>
      </div>
    </footer>
  )
}
