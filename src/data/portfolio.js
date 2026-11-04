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
    { name: 'GitHub', url: 'https://github.com/SohailBangash007', icon: 'github' },
    { name: 'Email', url: 'mailto:sohailbangash845@gmail.com', icon: 'mail' },
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
    id: 'ecommerce',
    title: 'Aura E-Commerce',
    tagline: 'A full storefront, from catalogue to checkout',
    category: 'E-Commerce',
    year: '2025',
    featured: true,
    description:
      'A complete e-commerce build with a product catalogue, search overlay, cart drawer, checkout and order flow. The storefront runs on React Query and GSAP, backed by an Express + MongoDB API with JWT auth and an admin dashboard for products, categories and orders.',
    image: '/images/projects/ecommerce.png',
    fallback: ['#0e7490', '#4c1d95'],
    tags: ['React', 'React Query', 'GSAP', 'Tailwind', 'Express', 'MongoDB'],
    highlights: ['Cart, checkout & orders', 'JWT auth + admin panel', 'Product search & filters'],
    live: null,
    github: 'https://github.com/SohailBangash007/ecommerce',
  },
  {
    id: 'restaurant-ai',
    title: 'Restaurant AI Voice Agent',
    tagline: 'Your restaurant phone, answered by AI',
    category: 'AI / SaaS',
    year: '2026',
    featured: true,
    description:
      'A Next.js 14 dashboard for an AI voice agent that answers restaurant calls, takes bookings and orders, and keeps the team in control. Includes call logs, caller profiles, menu and order management, staff tools, billing and a super-admin console.',
    image: '/images/projects/restaurant.png',
    fallback: ['#7c2d12', '#4c1d95'],
    tags: ['Next.js', 'React', 'Twilio Voice', 'Zustand', 'Tailwind', 'Framer Motion'],
    highlights: ['AI call handling', 'Bookings & order dashboard', 'Multi-role admin panels'],
    live: null,
    github: 'https://github.com/SohailBangash007?tab=repositories',
    isPrivate: true,
  },
  {
    id: 'hotel-booking',
    title: 'StayHub Hotel Booking',
    tagline: 'Search, compare and book a stay',
    category: 'Booking',
    year: '2026',
    featured: true,
    description:
      'A hotel booking platform with room search, date and guest filters, detailed room pages and a booking history for guests. Clerk handles authentication while the frontend stays fast and fully responsive across mobile and desktop.',
    image: '/images/projects/hotel.png',
    fallback: ['#14532d', '#0c4a6e'],
    tags: ['React', 'Vite', 'Tailwind', 'Clerk', 'Express', 'MongoDB'],
    highlights: ['Room search & filters', 'Booking history', 'Clerk authentication'],
    live: null,
    github: 'https://github.com/SohailBangash007?tab=repositories',
    isPrivate: true,
  },
  {
    id: 'yadea-clone',
    title: 'Yadea Electric Scooters',
    tagline: 'A cinematic product landing experience',
    category: 'Landing Page',
    year: '2025',
    featured: false,
    description:
      'A close rebuild of the Yadea electric scooter site: a video-led hero, scroll-driven product sections, model comparison, test-drive booking, blog and a working cart drawer. Built with React Router and a fully responsive Tailwind layout.',
    image: '/images/projects/yadea.jpg',
    fallback: ['#1e3a8a', '#065f46'],
    tags: ['React', 'Vite', 'Tailwind', 'React Router', 'Lucide'],
    highlights: ['Video hero & scroll sections', 'Test-drive booking flow', 'Cart drawer & model pages'],
    live: null,
    github: 'https://github.com/SohailBangash007/Yadea-Clone',
  },
  {
    id: 'agentify-erp',
    title: 'Agentify ERP',
    tagline: 'An ERP platform for real-estate teams',
    category: 'ERP / SaaS',
    year: '2026',
    featured: false,
    description:
      'A large multi-module ERP covering properties, CRM, appointments, accounting, HR, reports and a marketing site editor. The React + Recharts client talks to a Supabase and Express backend, with role-based dashboards and a Capacitor mobile app.',
    image: '/images/projects/agentify.png',
    fallback: ['#312e81', '#0f766e'],
    tags: ['React', 'Recharts', 'Supabase', 'Express', 'Capacitor'],
    highlights: ['Role-based dashboards', 'CRM, finance & HR modules', 'Reports & charting'],
    live: null,
    github: 'https://github.com/SohailBangash007/Agentify-ERP',
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
