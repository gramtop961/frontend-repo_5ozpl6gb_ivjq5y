import { UserRound } from 'lucide-react'

export default function Instructor() {
  return (
    <section id="instructor" className="bg-gradient-to-b from-black to-gray-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Meet your instructor</h2>
          <p className="mt-4 text-gray-300">Your guide has built and shipped AI products used by thousands. You'll learn the patterns, not just the tools.</p>
          <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
            <li>Real-world experience with LLM apps and agents</li>
            <li>Open-source contributor and educator</li>
            <li>Focus on clarity, intuition, and practice</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1">
            <div className="w-full h-full rounded-full bg-black border border-white/10 flex items-center justify-center">
              <UserRound className="w-24 h-24 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
