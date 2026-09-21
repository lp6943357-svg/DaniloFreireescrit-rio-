import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Diferentials from '@/components/Diferentials'
import Contact from '@/components/Contact'
import Location from '@/components/Location'
import GsapMotion from '@/components/GsapMotion'

// Build trigger: ensure Vercel deploys the current main branch.
export default function Home() {
  return (
    <>
      <GsapMotion />
      <Hero />
      <About />
      <Services />
      <Diferentials />
      <Location />
      <Contact />
    </>
  )
}
