import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import AchievementTimeline from '../components/AchievementTimeline'
import Experience from '../components/Experience'
import Education from '../components/Education'
import { ContactSection } from '../components/Contactandfooter'
import ScrollToHash from '../components/ScrollToHash'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AchievementTimeline />
        <Experience />
        <Education />
        <ContactSection />
      </main>
    </div>
  )
}