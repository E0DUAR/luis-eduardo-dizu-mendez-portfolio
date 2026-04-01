import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-canvas text-fg">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
