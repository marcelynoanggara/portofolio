export const profile = {
  name: 'Marcelyno Anggara',
  shortName: 'Marcel',
  initials: 'MA',
  role: 'Information Technology Student',
  university: 'Telkom University Surabaya',
  headlineA: 'Welcome in,',
  headlineB: 'have a look around.',
  intro:
    "I'm Marcelyno Anggara, an IT student at Telkom University Surabaya. I build web projects, drill programming fundamentals, and like turning an idea into something people can actually use.",
  github: 'https://github.com/marcelynoanggara',
  instagram: 'https://www.instagram.com/marchanggara',
  liveSite: 'https://marchanggara.my.id/',
}

export const techMarquee = [
  'Golang',
  'C++',
  'Python',
  'Git & GitHub',
  'VS Code',
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
      'One page for my projects, skills, and how I learn. Rebuilt with a dark, playful design.',
    points: [
      'Looks right on phone and desktop',
      'Built from React components',
      'Deploys to GitHub Pages on every push',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://marchanggara.my.id/',
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
      'Upload a CSV and get AI-written summaries plus charts, so the numbers are easier to read.',
    points: [
      'Explore data straight from a CSV file',
      'AI summaries of what the data says',
      'Charts that make the takeaway obvious',
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
      'A QR code generator that runs entirely in the browser. Type, click, done.',
    points: [
      'QR codes in one click',
      'One job, no clutter',
      'Runs entirely in your browser',
    ],
    tech: ['React', 'TypeScript'],
    liveUrl: 'https://qr.marchanggara.my.id/',
    repoUrl: 'https://github.com/marcelynoanggara/qr-generator',
    bg: '#4a3a2f',
    visual: 'qr',
  },
  {
    number: '04',
    brand: 'Learning Web',
    year: '2026',
    title: 'Learning Japanese',
    description:
      'A web app for learning Japanese from zero. Kana flashcards, a kanji explorer, vocabulary search, and quizzes with audio examples.',
    points: [
      'Practice writing kana by hand; the app grades it for you',
      '30 modules from basics to N1',
      'Set up your own quizzes; progress stays in your browser',
    ],
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://nihongo.marchanggara.my.id/',
    repoUrl: 'https://github.com/marcelynoanggara/belajar-bahasa-jepang',
    bg: '#6b3232',
    visual: 'browser',
  },
  {
    number: '05',
    brand: 'Web App',
    year: '2026',
    title: 'CV Builder',
    description:
      'A resume maker with live A4 preview. Switch templates and fonts, export to PDF, and it tells you when a new version is out.',
    points: [
      'The A4 page updates as you type',
      'Templates, fonts, and accent colors',
      'Export to PDF; the app checks for updates itself',
    ],
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://cv.marchanggara.my.id/',
    repoUrl: 'https://github.com/marcelynoanggara/cv-builder',
    bg: '#31435c',
    visual: 'browser',
  },
]

export const services = [
  {
    title: 'Web Development',
    desc: 'Responsive, component-based interfaces with React, TypeScript, Vite, and Tailwind CSS. Landing pages to small web utilities.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    highlight: true,
  },
  {
    title: 'Programming Foundations',
    desc: 'Problem-solving through C++, Golang, and Python coursework. Data structures, algorithms, and code people can read.',
    tags: ['C++', 'Golang', 'Python'],
    highlight: false,
  },
  {
    title: 'Data & Analysis',
    desc: 'Raw data into something readable: CSV exploration, AI-assisted insights, and clear charts.',
    tags: ['CSV Analysis', 'Visualization', 'AI Insights'],
    highlight: false,
  },
  {
    title: 'Tools & Workflow',
    desc: 'Version control and an organized workflow with Git, GitHub, and VS Code, plus documentation in Microsoft Office.',
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
    desc: 'Data structures and algorithms first. Frameworks change; problem-solving stays.',
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
    desc: 'READMEs, commits, and notes make progress visible, and the next step easier.',
  },
  {
    title: 'Improve iteratively',
    desc: 'Ship a basic version, get it live, then refine. This portfolio itself works that way.',
  },
]

export const faqs = [
  {
    q: 'What are you studying?',
    a: "I'm a second-year IT undergraduate at Telkom University Surabaya. My coursework is mostly programming, data structures, and software development.",
  },
  {
    q: 'What kind of projects do you build?',
    a: 'Mostly web projects with React and TypeScript: small utilities like a QR generator, data analysis tools, plus coursework in C++, Golang, and Python. Everything is on my GitHub.',
  },
  {
    q: 'Are you open to collaboration?',
    a: "Yes. I'm open to learning opportunities, student project collaborations, and talking about web development and software. The fastest way to reach me is GitHub or Instagram.",
  },
  {
    q: 'How can I see your code?',
    a: 'Every featured project links straight to its GitHub repo, so you can read the source, check the commit history, and try the live version.',
  },
]
