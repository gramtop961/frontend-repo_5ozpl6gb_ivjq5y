import { CheckCircle2 } from 'lucide-react'

const modules = [
  {
    title: 'Foundations of Modern AI',
    items: [
      'Python for AI, NumPy, Pandas',
      'Deep Learning with PyTorch',
      'Transformers & Attention'
    ]
  },
  {
    title: 'LLMs & Prompt Engineering',
    items: [
      'Tokenization & embeddings',
      'Prompt patterns & evaluation',
      'Fine-tuning & adapters'
    ]
  },
  {
    title: 'Building AI Applications',
    items: [
      'Retrieval Augmented Generation (RAG)',
      'Agents & tools',
      'FastAPI backends'
    ]
  },
  {
    title: 'MLOps & Deployment',
    items: [
      'Data pipelines',
      'Experiment tracking',
      'Serving & monitoring'
    ]
  }
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative bg-gradient-to-b from-black to-gray-950 text-white py-24">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-700/10 via-fuchsia-700/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Curriculum Overview</h2>
          <p className="mt-3 text-gray-300">A step-by-step journey from fundamentals to production systems.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-4">{m.title}</h3>
              <ul className="space-y-3">
                {m.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
