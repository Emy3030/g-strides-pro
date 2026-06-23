import Hero         from '../components/Hero'
import About        from '../components/About'
import Portfolio    from '../components/Portfolio'
import Services     from '../components/Services'
import Testimonials from '../components/Testimonials'
import Technologies from '../components/Technologies'
import Articles     from '../components/Articles'
import Contact      from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Technologies />
      <Articles />
      <Contact />
    </main>
  )
}
