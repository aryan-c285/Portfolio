// All project data lives in one array. To add a new project later,
// just add a new object here - the layout below handles the rest.
const projects = [
  {
    title: "CIDER — Crime Investigation Data & Evidence Record System",
    period: "Jan '26 – Apr '26",
    description:
      "A role-based web app for managing criminal case records. Normalised MySQL schema across 5+ entities, 15+ optimised SQL queries for analytics, and separate dashboards for investigators and admins.",
    tech: ["MySQL", "Python", "Streamlit"],
    github: "https://github.com/aryan-c285/CIDER-Database-System",
  },
  {
    title: "RISC-V Assembler & Simulator",
    period: "Jan '25 – Apr '25",
    description:
      "A complete RISC-V toolchain built from scratch — a two-pass assembler for all 6 instruction formats, plus a cycle-accurate simulator with its own register file, memory, and execution trace generation.",
    tech: ["Python", "RISC-V ISA", "Computer Architecture"],
    github: "https://github.com/aryan-c285/Assembler",
  },
  {
    title: "University ERP System",
    period: "Oct '25 – Nov '25",
    description:
      "A desktop ERP with role-based access for Admin, Instructor, and Student. Dual-database architecture separating auth from academic data, with PBKDF2 password hashing and salting.",
    tech: ["Java", "Swing", "MySQL"],
    github: "https://github.com/aryan-c285/University-ERP",
  },
];

// A single project card. Pulled out as its own function so Projects()
// below stays short and readable.
function ProjectCard({ project }) {
  return (
    <div className="border border-slate-800 rounded-lg p-6 hover:border-teal-400/50 transition-colors bg-slate-900/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-100">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-slate-500 whitespace-nowrap">
          {project.period}
        </span>
      </div>

      <p className="mt-3 text-slate-400 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-1 rounded bg-slate-800 text-teal-400"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block font-mono text-sm text-teal-400 hover:underline"
      >
        View code →
      </a>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <p className="font-mono text-teal-400 text-sm mb-2">$ ls ./projects</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-10">Projects</h2>

      {/* Grid of cards. .map() loops over the array and renders one card per project */}
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;