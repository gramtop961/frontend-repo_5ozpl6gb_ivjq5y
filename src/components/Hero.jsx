import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-violet-300/90">Cohort-based • Hands-on • Project-first</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Master Applied AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400"> by Building Real Projects</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            A modern, immersive course that takes you from fundamentals to production AI systems. Learn LLMs, agents, vector search, MLOps, and ship portfolio-ready projects.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#enroll" className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">Enroll Now</a>
            <a href="#curriculum" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition-colors">View Curriculum</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
