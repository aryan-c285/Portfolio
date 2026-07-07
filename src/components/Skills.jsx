// Grouping skills the same way your resume does it
const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C/C++", "Java", "JavaScript", "SQL"],
  },
  {
    label: "Web",
    items: ["HTML", "CSS", "React", "Tailwind CSS", "Vite"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "MySQL", "Linux", "Figma", "VSCode"],
  },
];

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <p className="font-mono text-teal-400 text-sm mb-2">$ cat skills.txt</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-10">Skills</h2>

      <div className="grid sm:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-sm text-slate-500 mb-3">
              {group.label}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;