export default function CTA() {
  return (
    <section id="enroll" className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Ready to level up?</h2>
        <p className="mt-4 text-gray-300">Join the next cohort and build production-grade AI apps with guidance and community.</p>
        <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-2xl mx-auto">
          <input type="email" required placeholder="you@example.com" className="w-full rounded-md bg-white text-black px-4 py-3 placeholder-gray-500" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">Request Invite</button>
        </form>
        <p className="mt-3 text-xs text-gray-500">No spam. You'll get the syllabus and dates.</p>
      </div>
    </section>
  )
}
