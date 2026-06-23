// ── Images (imported in components via these keys) ──────────────────────────
export const IMAGES = {
  logo:            '/src/assets/images/logo.svg',
  heroPhoto:       '/src/assets/images/Adobe Express - file (1).webp',
  heroPhoto2:       '/src/assets/images/hero-smaller.png',
  aboutPhoto:      '/src/assets/images/Adobe Express - file (2).png',
  contactPhoto:    '/src/assets/images/Adobe Express - file.webp',

  // Projects
  finDashboard:    '/src/assets/images/luke-chesser-JKUTrJ4vK00-unsplash.webp',
  taskMgmt:        '/src/assets/images/task-app.webp',
  ecommerce:       '/src/assets/images/kobu-agency-7okkFhxrxNw-unsplash.webp',
  fitnessApp:      '/src/assets/images/fitness-app.webp',
  musicPlayer:     '/src/assets/images/music-app.webp',
  realEstate:      '/src/assets/images/real-estate.webp',
  chatApp:         '/src/assets/images/chat-app.webp',
  weatherApp:      '/src/assets/images/weather-app.webp',

  // Services
  svcWeb:          '/src/assets/images/web-design.webp',
  svcMobile:       '/src/assets/images/mobile-app.webp',
  svcUiux:         '/src/assets/images/ui-ux.webp',

  // Blog
  blogWeb:         '/src/assets/images/web-developers.jfif',
  blogReact:       '/src/assets/images/react-tips (1).webp',
  blogUiux:        '/src/assets/images/ui-ux_designers (1).webp',

  // Tech
  techReact:       '/src/assets/images/React.png',
  techNext:        '/src/assets/images/next.png',
  techRN:          '/src/assets/images/React.png',
  techNode:        '/src/assets/images/Node.js.png',
  techJS:          '/src/assets/images/JavaScript.png',
  techTS:          '/src/assets/images/TypeScript.png',
  techTailwind:    '/src/assets/images/Tailwind CSS.png',
  techFirebase:    '/src/assets/images/Firebase.png',
  techGithub:      '/src/assets/images/GitHub.png',
}

// ── Nav links ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog',         href: '#blog' },
  { label: 'Contact',      href: '#contact' },
]

// ── Hero stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: '10+',  label: 'Projects Completed' },
  { value: '720+', label: 'Hours of Coding' },
  { value: '50+',  label: 'Happy Clients' },
  { value: '3+',   label: 'Years Experience' },
]

// ── Portfolio projects ───────────────────────────────────────────────────────
export const PROJECTS = [
  { id: 1, title: 'Finance Dashboard',   category: 'Web Application',    image: 'finDashboard',  link: '#' },
  { id: 2, title: 'Task Management App', category: 'Web Application',    image: 'taskMgmt',      link: '#' },
  { id: 3, title: 'E-Commerce Website',  category: 'Web Application',    image: 'ecommerce',     link: '#' },
  { id: 4, title: 'Fitness Tracking App',category: 'Mobile Application', image: 'fitnessApp',    link: '#' },
  { id: 5, title: 'Music Player App',    category: 'Mobile Application', image: 'musicPlayer',   link: '#' },
  { id: 6, title: 'Real Estate Website', category: 'Web Application',    image: 'realEstate',    link: '#' },
  { id: 7, title: 'Chat Application',    category: 'Mobile Application', image: 'chatApp',       link: '#' },
  { id: 8, title: 'Weather App',         category: 'Web Application',    image: 'weatherApp',    link: '#' },
]

// ── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    icon: 'MdDesktopWindows',
    title: 'Web Design',
    desc: 'I design responsive, modern websites that convert visitors into customers.',
    image: 'svcWeb',
    featured: false,
  },
  {
    id: 2,
    icon: 'MdPhoneAndroid',
    title: 'Mobile Apps',
    desc: 'I build cross-platform mobile apps that deliver a smooth user experience.',
    image: 'svcMobile',
    featured: true,
  },
  {
    id: 3,
    icon: 'MdBrush',
    title: 'UI/UX Design',
    desc: 'I create intuitive designs that users love and businesses trust.',
    image: 'svcUiux',
    featured: false,
  },
]

// ── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    stars: 5,
    text: '"Emeka delivered beyond my expectations. The website he built for my business is beautiful, fast, and professional."',
    name: 'Obi Success',
    role: 'CEO, Success Motors',
    initials: 'OS',
  },
  {
    id: 2,
    stars: 5,
    text: '"Great communication, fast delivery, and clean code. I will definitely work with him again."',
    bold: 'Great communication, fast delivery, and clean code.',
    name: 'Sandra Williams',
    role: 'Founder, Sandi Collections',
    initials: 'SW',
  },
  {
    id: 3,
    stars: 5,
    text: '"He transformed my idea into a fully functional mobile app that my users love. Highly recommended!"',
    name: 'Kingsley Uche',
    role: 'CEO, FitLife App',
    initials: 'KU',
  },
]

// ── Technologies ─────────────────────────────────────────────────────────────
export const TECHNOLOGIES = [
  { id: 1, name: 'React',        image: 'techReact',    color: '#61dafb' },
  { id: 2, name: 'Next.js',      image: 'techNext',     color: '#000000' },
  { id: 3, name: 'React Native', image: 'techRN',       color: '#61dafb' },
  { id: 4, name: 'Node.js',      image: 'techNode',     color: '#3c873a' },
  { id: 5, name: 'JavaScript',   image: 'techJS',       color: '#f7df1e' },
  { id: 6, name: 'TypeScript',   image: 'techTS',       color: '#3178c6' },
  { id: 7, name: 'Tailwind CSS', image: 'techTailwind', color: '#38bdf8' },
  { id: 8, name: 'Firebase',     image: 'techFirebase', color: '#ffca28' },
  { id: 9, name: 'GitHub',       image: 'techGithub',   color: '#333333' },
]

// ── Articles ─────────────────────────────────────────────────────────────────
export const ARTICLES = [
  {
    id: 1,
    tag: 'Web Design',
    tagColor: '#1a6ef5',
    title: 'The Power of Clean & Modern Website Design',
    date: 'May 10, 2024',
    readTime: '5 min read',
    image: 'blogWeb',
    link: '#',
  },
  {
    id: 2,
    tag: 'Development',
    tagColor: '#10b981',
    title: '10 Tips for Better React Performance',
    date: 'May 2, 2024',
    readTime: '6 min read',
    image: 'blogReact',
    link: '#',
  },
  {
    id: 3,
    tag: 'UI/UX',
    tagColor: '#f59e0b',
    title: 'Creating User-Centered UI Designs',
    date: 'Apr 25, 2024',
    readTime: '4 min read',
    image: 'blogUiux',
    link: '#',
  },
]

// ── Footer links ─────────────────────────────────────────────────────────────
export const FOOTER_QUICK_LINKS = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']
export const FOOTER_SERVICES    = ['Web Design', 'Mobile Apps', 'UI/UX Design', 'Web Development', 'App Maintenance']
export const FOOTER_CONTACT     = [
  { icon: 'phone',    text: '+234 816 732 8106' },
  { icon: 'email',    text: 'nnonyelugodwinchinenye.com' },
  { icon: 'location', text: 'Onitsha, Anambra, Nigeria' },
]
