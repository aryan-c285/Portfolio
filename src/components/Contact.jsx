function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <p className="font-mono text-teal-400 text-sm mb-2">$ ping aryan</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-6">Get in touch</h2>

      <p className="text-slate-400 max-w-xl mb-8">
        Open to internship opportunities and interesting projects. Reach out
        through any of the links below.
      </p>

      <div className="flex flex-wrap gap-4 font-mono text-sm">
        <a
          href="mailto:aryan24121@iiitd.ac.in"
          className="px-5 py-3 border border-slate-700 rounded text-slate-300 hover:border-teal-400 hover:text-teal-400 transition-colors"
        >
          aryan24121@iiitd.ac.in
        </a>
        <a
          href="https://github.com/aryan-c285"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 border border-slate-700 rounded text-slate-300 hover:border-teal-400 hover:text-teal-400 transition-colors"
        >
          GitHub
        </a>
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-800 text-slate-600 text-sm font-mono">
        © {new Date().getFullYear()} Aryan Choudhary. Built with React + Tailwind.
      </footer>
    </section>
  );
}

export default Contact;