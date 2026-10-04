export const profile = {
  name: 'Marcelyno Anggara',
  shortName: 'Marcel',
  initials: 'MA',
  role: 'Information Technology Student',
  university: 'Telkom University Surabaya',
  headlineA: 'Welcome to my',
  headlineB: 'digital home.',
  intro:
    "I'm Marcelyno Anggara, an Information Technology student at Telkom University Surabaya who enjoys building web projects, strengthening programming foundations, and turning ideas into working software.",
  github: 'https://github.com/marcelynoanggara',
  instagram: 'https://www.instagram.com/marchanggara',
  liveSite: 'https://marcelynoanggara.github.io/portofolio/',
}

export const techMarquee = [
  'React',
  'TypeScript',
  'Golang',
  'C++',
  'Python',
  'Tailwind CSS',
  'Git & GitHub',
  'VS Code',
  'Vite',
  'Data Structures',
]

export type Project = {
  number: string
  brand: string
  year: string
  title: string
  description: string
  points: string[]
  tech: string[]
  liveUrl: string
  repoUrl: string
  bg: string
  visual: 'browser' | 'chart' | 'qr' | 'code'
}

export const projects: Project[] = [
  {
    number: '01',
    brand: 'Personal Project',
    year: '2026',
    title: 'Personal Portfolio Website',
    description:
      'A one-page portfolio to present my projects, skills, and learning journey — rebuilt with a dark, playful, premium look.',
    points: [
      'Responsive one-page experience',
      'Component-based React architecture',
      'Automated deployment to GitHub Pages',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://marcelynoanggara.github.io/portofolio/',
    repoUrl: 'https://github.com/marcelynoanggara/portofolio',
    bg: '#43594f',
    visual: 'browser',
  },
  {
    number: '02',
    brand: 'Data Tool',
    year: '2026',
    title: 'AI Data Analyze',
    description:
      'A CSV data analysis web application that uses AI to help provide insights and visualizations for better decision-making.',
    points: [
      'CSV-based data exploration',
      'AI-assisted insight summaries',
      'Visual output for faster decisions',
    ],
    tech: ['TypeScript', 'Python'],
    liveUrl: 'https://data-analyze-doy73sy5q-mangga2.vercel.app/',
    repoUrl: 'https://github.com/marcelynoanggara/data-analyze',
    bg: '#274156',
    visual: 'chart',
  },
  {
    number: '03',
    brand: 'Web Utility',
    year: '2026',
    title: 'QR Generator',
    description:
      'A simple web-based QR code generator that lets users create QR codes quickly and easily, right from the browser.',
    points: [
      'Instant QR code creation',
      'Simple, focused workflow',
      'Runs fully in the browser',
    ],
    tech: ['React', 'TypeScript'],
    liveUrl: 'https://marcelynoanggara.github.io/qr-generator/',
    repoUrl: 'https://github.com/marcelynoanggara/qr-generator',
    bg: '#4a3a2f',
    visual: 'qr',
  },
]

export const services = [
  {
    title: 'Web Development',
    desc: 'Building responsive, component-based interfaces with React, TypeScript, Vite, and Tailwind CSS — from landing pages to small web utilities.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    highlight: true,
  },
  {
    title: 'Programming Foundations',
    desc: 'Strengthening problem-solving through C++, Golang, and Python coursework — data structures, algorithms, and clean, readable code.',
    tags: ['C++', 'Golang', 'Python'],
    highlight: false,
  },
  {
    title: 'Data & Analysis',
    desc: 'Exploring how data becomes decisions: CSV exploration, AI-assisted insights, and clear visualizations that are easy to read.',
    tags: ['CSV Analysis', 'Visualization', 'AI Insights'],
    highlight: false,
  },
  {
    title: 'Tools & Workflow',
    desc: 'Version control and an organized workflow with Git, GitHub, and VS Code — plus solid documentation with Microsoft Office.',
    tags: ['Git', 'GitHub', 'VS Code'],
    highlight: false,
  },
]

export const notes = [
  {
    title: 'Building in public, one project at a time',
    desc: 'Each repository is a checkpoint: what I tried, what broke, and what I learned fixing it.',
  },
  {
    title: 'Foundations before frameworks',
    desc: 'Data structures and algorithms first — frameworks change, problem-solving stays.',
  },
  {
    title: 'Small tools, real problems',
    desc: 'A QR generator or a data analyzer may look simple, but shipping them teaches the full cycle.',
  },
]

export const principles = [
  {
    title: 'Learn by building',
    desc: 'I understand technology best when I turn it into a working project, not just notes.',
  },
  {
    title: 'Keep it simple',
    desc: 'Clear structure and readable code beat clever tricks that nobody can maintain.',
  },
  {
    title: 'Document the process',
    desc: 'READMEs, commits, and notes make progress visible — and make the next step easier.',
  },
  {
    title: 'Improve iteratively',
    desc: 'Ship a basic version, get it live, then refine. This portfolio itself works that way.',
  },
]

export const faqs = [
  {
    q: 'What are you studying?',
    a: "I'm an undergraduate Information Technology student at Telkom University Surabaya, currently in my second year. My coursework focuses on programming, data structures, and software development.",
  },
  {
    q: 'What kind of projects do you build?',
    a: 'Mostly web-based projects with React and TypeScript, small utilities like a QR generator, data analysis tools, and programming coursework in C++, Golang, and Python. Everything lives on my GitHub.',
  },
  {
    q: 'Are you open to collaboration?',
    a: "Yes — I'm open to learning opportunities, collaboration on student projects, and discussing ideas around web development and software. The fastest way to reach me is through GitHub or Instagram.",
  },
  {
    q: 'How can I see your code?',
    a: 'All featured projects on this page link directly to their GitHub repositories, so you can read the source, check the commit history, and try the live versions.',
  },
]
