const skillGroups = [
  {
    category: 'Programming',
    skills: ['Golang'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'Productivity',
    skills: ['Microsoft Word', 'Excel', 'PowerPoint'],
  },
]

function Skills() {
  return (
    <section className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Skills
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Technologies I work with.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/25 hover:bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills