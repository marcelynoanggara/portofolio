const projects = [
  {
    number: '01',
    title: 'My Personal Portfolio',
    description:
      'A personal portfolio website built to showcase my projects, skills, and learning journey.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://marcelynoanggara.github.io/portofolio/',
  },
  
  {
    number: '02',
    title: 'QR Code Maker',
    description:
      'A simple web-based QR code generator that allows users to create QR codes quickly and easily',
    tech: ['React', 'TypeScript'],
    url: 'https://marcelynoanggara.github.io/qr-generator/',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Projects
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Things I've built.
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[320px] flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">
                  {project.number}
                </span>

                <span className="text-neutral-600 transition group-hover:text-white">
                  ↗
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl font-medium">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects