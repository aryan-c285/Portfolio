function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      {/* Terminal-style label - fits a CS/backend engineer's portfolio */}
      <p className="font-mono text-teal-400 text-sm mb-4">$ whoami</p>

      <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 tracking-tight">
        Aryan Choudhary
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl">
        B.Tech CSB student at IIIT Delhi. I build backend systems, dev tools,
        and full-stack applications — currently sharpening my front-end
        skills with React and Tailwind.
      </p>

      {/* Buttons row */}
      <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
        <a
          href="https://github.com/aryan-c285"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 bg-teal-400 text-slate-950 font-semibold rounded hover:bg-teal-300 transition-colors"
        >
          View GitHub →
        </a>
        <a
          href="#projects"
          className="px-5 py-3 border border-slate-700 text-slate-300 rounded hover:border-teal-400 hover:text-teal-400 transition-colors"
        >
          See projects
        </a>
      </div>
    </section>
  );
}

export default Hero;