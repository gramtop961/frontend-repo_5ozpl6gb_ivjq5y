import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Curriculum from './components/Curriculum'
import Outcomes from './components/Outcomes'
import Instructor from './components/Instructor'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Curriculum />
        <Outcomes />
        <Instructor />
        <CTA />
      </main>
      <footer className="bg-black/90 text-gray-400 text-sm py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AI Course. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#curriculum" className="hover:text-white">Curriculum</a>
            <a href="#outcomes" className="hover:text-white">Outcomes</a>
            <a href="#instructor" className="hover:text-white">Instructor</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
