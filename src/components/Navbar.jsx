import { useState } from 'react'
import { Menu, X, Brain, BookOpen } from 'lucide-react'

function NavLink({ label, href }) {
  return (
    <a href={href} className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white font-semibold">
            <div className="p-2 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <Brain className="w-5 h-5" />
            </div>
            <span className="hidden sm:block">AI Course</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink label="Curriculum" href="#curriculum" />
            <NavLink label="Outcomes" href="#outcomes" />
            <NavLink label="Instructor" href="#instructor" />
            <NavLink label="Enroll" href="#enroll" />
            <a href="#enroll" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
              <BookOpen className="w-4 h-4" />
              Enroll Now
            </a>
          </nav>

          <button
            className="md:hidden text-gray-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <NavLink label="Curriculum" href="#curriculum" />
            <NavLink label="Outcomes" href="#outcomes" />
            <NavLink label="Instructor" href="#instructor" />
            <NavLink label="Enroll" href="#enroll" />
            <a href="#enroll" className="inline-flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
              <BookOpen className="w-4 h-4" />
              Enroll Now
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
