const outcomes = [
  'Ship 3+ portfolio-grade AI apps',
  'Confidence working with LLMs & embeddings',
  'Understand when to fine-tune vs. engineer prompts',
  'Deploy production-ready backends with monitoring',
  'Collaborate using best practices & GitHub'
]

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">What you'll achieve</h2>
            <p className="mt-4 text-gray-300">Clear, measurable outcomes to level up your career.</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {outcomes.map(o => (
                <li key={o} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <span className="text-gray-200">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 p-8">
            <p className="text-gray-300">Built for engineers and ambitious beginners. We mix theory with hands-on projects so you build intuition while shipping real products.</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-4xl font-bold">8</div>
                <div className="text-sm text-gray-400">weeks</div>
              </div>
              <div>
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm text-gray-400">projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold">10h</div>
                <div className="text-sm text-gray-400">per week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
