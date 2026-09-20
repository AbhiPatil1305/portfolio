import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VantaBackground from './components/VantaBackground'

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent font-inter text-primaryText relative">
      <VantaBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseStudies />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
