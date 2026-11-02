export const profile = {
  name: 'Muhammad Sohail',
  firstName: 'Muhammad',
  lastName: 'Sohail',
  initials: 'MS',
  role: 'Frontend Developer',
  roles: ['Frontend Developer', 'React Developer', 'UI Engineer', 'BSCS Student'],
  tagline: 'I design and build fast, accessible and genuinely beautiful web experiences.',
  about: [
    "I'm a frontend developer and Computer Science student based in Rawalpindi, Pakistan. I love turning ideas and designs into clean, responsive interfaces that feel effortless to use.",
    'Right now I am in my 5th semester of a BS Computer Science degree and interning as a frontend developer at HiFi Company. I have also worked with Jugrafia, where I built data-driven UI for a geo-informatics product.',
    'When I am not studying or shipping features, you will find me rebuilding popular interfaces, exploring new React patterns, and polishing micro-interactions until they feel just right.',
  ],
  email: 'sohailbangash845@gmail.com',
  phone: '0312 9939906',
  phoneRaw: '+923129939906',
  location: 'Chakri Road, Mora Chappar, Rawalpindi',
  locationShort: 'Rawalpindi, Pakistan',
  timezone: 'Asia/Karachi',
  availability: 'Open to internships & freelance work',
  resumeUrl: '#/resume',
  photo: './images/profile.jpg',
  socials: [
    { name: 'GitHub', url: 'https://github.com/', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/', icon: 'twitter' },
    { name: 'Instagram', url: 'https://instagram.com/', icon: 'instagram' },
  ],
}

export const stats = [
  { value: '4', suffix: '', label: 'Semesters completed', sub: 'BSCS · in progress' },
  { value: '2', suffix: '+', label: 'Internships', sub: 'HiFi & Jugrafia' },
  { value: '10', suffix: '+', label: 'Projects built', sub: 'React & JavaScript' },
  { value: '1', suffix: '+', label: 'Years of coding', sub: 'and still counting' },
]

export const services = [
  {
    icon: 'layout',
    title: 'Frontend Development',
    text: 'Production-ready React interfaces with reusable components, clean state and a focus on performance.',
    points: ['React + Vite', 'Component architecture', 'Responsive layouts'],
  },
  {
    icon: 'wand',
    title: 'UI / UX Implementation',
    text: 'Pixel-accurate implementation of Figma or Adobe XD designs — with motion that adds meaning, not noise.',
    points: ['Design to code', 'Micro-interactions', 'Design systems'],
  },
  {
    icon: 'mobile',
    title: 'Responsive & Accessible',
    text: 'Interfaces that work beautifully from a 320px phone to an ultrawide monitor, keyboard included.',
    points: ['Mobile first', 'Semantic HTML', 'WCAG aware'],
  },
  {
    icon: 'stack',
    title: 'API Integration',
    text: 'Connecting frontends to real data with REST APIs, loading states, error handling and caching.',
    points: ['REST APIs', 'Async UX', 'Data visualisation'],
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'code',
    skills: [
      { name: 'React', level: 88 },
      { name: 'JavaScript (ES6+)', level: 86 },
      { name: 'HTML5 & CSS3', level: 94 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Bootstrap', level: 84 },
    ],
  },
  {
    title: 'Programming',
    icon: 'terminal',
    skills: [
      { name: 'C++', level: 76 },
      { name: 'Python', level: 72 },
      { name: 'MySQL / SQL', level: 78 },
      { name: 'Data Structures', level: 80 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: 'tool',
    skills: [
      { name: 'Git & GitHub', level: 84 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 72 },
      { name: 'Vite & npm', level: 82 },
      { name: 'REST APIs', level: 80 },
    ],
  },
]

export const techStack = [
  'React',
  'JavaScript',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Framer Motion',
  'Bootstrap',
  'Git',
  'GitHub',
  'Vite',
  'REST APIs',
  'C++',
  'Python',
  'MySQL',
  'Figma',
]

export const projects = [
  {
    id: 'devfolio',
    title: 'DevFolio',
    tagline: 'This portfolio, but for developers',
    category: 'React',
    year: '2026',
    featured: true,
    description:
      'A multi-page personal portfolio built with React, Tailwind CSS and Framer Motion. Includes page transitions, a live status dock, dark/light theming and a print-ready resume.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    fallback: ['#0e7490', '#4c1d95'],
    tags: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
    highlights: ['7 routed pages', 'Animated page transitions', 'Fully responsive'],
    live: '#/',
    github: 'https://github.com/',
  },
  {
    id: 'shopsphere',
    title: 'ShopSphere',
    tagline: 'A modern storefront experience',
    category: 'E-commerce',
    year: '2025',
    featured: true,
    description:
      'An e-commerce storefront with product filters, a persistent cart, wishlist and a smooth checkout summary. Built around a reusable component system and Context API.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
    fallback: ['#0f766e', '#0c4a6e'],
    tags: ['React', 'Context API', 'Tailwind', 'REST API'],
    highlights: ['Cart & wishlist state', 'Product filtering', 'Mobile-first grid'],
    live: '#/projects',
    github: 'https://github.com/',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    tagline: 'Plan the day, finish the day',
    category: 'Productivity',
    year: '2025',
    featured: true,
    description:
      'A kanban-style task manager with drag & drop, priorities, due dates and localStorage persistence. Includes a compact focus mode for deep work sessions.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    fallback: ['#1e3a8a', '#065f46'],
    tags: ['React', 'Drag & Drop', 'localStorage', 'CSS Grid'],
    highlights: ['Drag & drop board', 'Offline persistence', 'Focus timer'],
    live: '#/projects',
    github: 'https://github.com/',
  },
  {
    id: 'weatherlens',
    title: 'WeatherLens',
    tagline: 'Live weather, beautifully told',
    category: 'API',
    year: '2025',
    featured: false,
    description:
      'A weather dashboard that turns raw forecast data into readable cards and charts, with geolocation, city search and graceful empty/error states.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80',
    fallback: ['#0369a1', '#312e81'],
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
    highlights: ['City search', '5-day forecast', 'Geolocation'],
    live: '#/projects',
    github: 'https://github.com/',
  },
  {
    id: 'geoexplorer',
    title: 'GeoExplorer',
    tagline: 'Maps, layers and location data',
    category: 'Geo / Data',
    year: '2026',
    featured: false,
    description:
      'Inspired by my internship at Jugrafia: an interactive map explorer with switchable layers, markers and a searchable side panel for location records.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
    fallback: ['#14532d', '#0f766e'],
    tags: ['React', 'Leaflet', 'GeoJSON', 'Tailwind'],
    highlights: ['Interactive layers', 'Marker clustering', 'Search panel'],
    live: '#/projects',
    github: 'https://github.com/',
  },
  {
    id: 'quizmaster',
    title: 'QuizMaster',
    tagline: 'A quiz app that keeps score',
    category: 'Web App',
    year: '2024',
    featured: false,
    description:
      'A timed quiz application with question categories, animated progress, score history and a shareable result card. My first complete JavaScript project.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80',
    fallback: ['#7c2d12', '#4c1d95'],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'localStorage'],
    highlights: ['Timer & scoring', 'Category picker', 'Result sharing'],
    live: '#/projects',
    github: 'https://github.com/',
  },
]

export const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'HiFi Company',
    location: 'Rawalpindi, Pakistan',
    period: 'Sep 2026 — Present',
    duration: '1+ month',
    current: true,
    summary:
      'Working with the product team to build and refine responsive React interfaces for client projects.',
    points: [
      'Build reusable UI components with React and Tailwind CSS.',
      'Translate Figma designs into pixel-accurate, responsive pages.',
      'Connect screens to REST APIs and handle loading, empty and error states.',
      'Review and polish UI details — spacing, motion and accessibility.',
    ],
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Git'],
  },
  {
    role: 'Web Development Intern',
    company: 'Jugrafia',
    location: 'Rawalpindi, Pakistan',
    period: 'Aug 2026 — Sep 2026',
    duration: '1 month',
    current: false,
    summary:
      'One-month internship at a geo-informatics company, contributing to the frontend of a mapping product.',
    points: [
      'Built responsive dashboard layouts for map and location data.',
      'Improved table, filter and detail-panel components in HTML, CSS and JavaScript.',
      'Worked closely with the GIS team to present data clearly.',
      'Documented components so the team could reuse them easily.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
]

export const education = [
  {
    degree: 'BS Computer Science',
    institute: 'University — Rawalpindi',
    period: '2024 — 2028 (expected)',
    status: 'In progress · 4 semesters completed',
    current: true,
    details: [
      'Currently in the 5th semester.',
      'Core focus: programming fundamentals, data structures, databases and web technologies.',
      'Consistently building side projects alongside coursework.',
    ],
  },
  {
    degree: 'Intermediate (D.com)',
    institute: 'Government College of Commerce — Kohat',
    period: '2022 — 2024',
    status: 'Completed',
    current: false,
    details: ['Computer science, mathematics and physics.', 'First exposure to programming and web basics.'],
  },
]

export const testimonials = [
  {
    quote:
      'Sohail picks up new patterns quickly and cares about the small details. His components are clean, responsive and easy for the rest of the team to reuse.',
    name: 'Team Lead',
    role: 'HiFi Company',
    initials: 'HC',
  },
  {
    quote:
      'During his internship he was dependable and curious. He turned dense location data into screens our users could actually read.',
    name: 'Project Manager',
    role: 'Jugrafia',
    initials: 'JG',
  },
  {
    quote:
      'One of the most consistent students in the batch. He does not just finish assignments — he rebuilds them until the interface feels right.',
    name: 'Course Instructor',
    role: 'Computer Science Department',
    initials: 'CS',
  },
]

export const faqs = [
  {
    q: 'Are you available for an internship or junior role?',
    a: 'Yes. I am currently interning at HiFi Company and I am open to frontend internships, junior React roles and freelance projects that fit around my university schedule.',
  },
  {
    q: 'What does your frontend stack look like?',
    a: 'React with Vite, Tailwind CSS for styling, Framer Motion for interaction, and vanilla JavaScript when a project does not need a framework. On the backend side I am comfortable with MySQL and REST APIs.',
  },
  {
    q: 'How quickly can you start a project?',
    a: 'For small landing pages or UI fixes, usually within a few days. For larger builds I will share a clear timeline after understanding the scope.',
  },
  {
    q: 'Do you work with designs from Figma?',
    a: 'Yes — I regularly convert Figma and Adobe XD files into responsive, accessible interfaces, and I am happy to suggest improvements along the way.',
  },
]

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
]
