import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Ribbon from './components/Ribbon'
import Notes from './components/Notes'
import Skills from './components/Skills'
import Principles from './components/Principles'
import About from './components/About'
import Faq from './components/Faq'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#07181f] font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Ribbon />
        <Notes />
        <Skills />
        <Principles />
        <About />
        <Faq />
      </main>
      <Contact />
    </div>
  )
}

export default App
