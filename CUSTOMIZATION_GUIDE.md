/**
 * CUSTOMIZATION EXAMPLES
 * This file shows examples of how to customize portfolio content
 * Replace the data in your components with these examples
 */

// Hero Section Data
export const heroData = {
  name: 'Your Name',
  title: 'Full Stack Developer & Creative Problem Solver',
  summary: 'I craft beautiful, responsive web experiences and build scalable applications using modern technologies. Let me help bring your ideas to life.',
  ctaButtons: [
    { label: 'View My Work', href: '#projects' },
    { label: 'Get In Touch', href: '#contact' },
  ],
}

// About Section Data
export const aboutData = {
  heading: 'About Me',
  bio: [
    "I'm a passionate full-stack developer with a keen interest in creating beautiful, functional web applications. With over 5 years of experience in web development, I've worked with startups and enterprises to deliver high-quality solutions.",
    "My approach combines technical expertise with user-centered design thinking. I believe in writing clean, maintainable code and creating interfaces that not only look great but also provide excellent user experiences.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
  stats: [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '20+' },
  ],
}

// Skills Section Data
export const skillsData = {
  technical: [
    { name: 'React.js', level: 95, icon: 'FaReact' },
    { name: 'Node.js', level: 90, icon: 'FaNode' },
    { name: 'JavaScript', level: 95, icon: 'FaJsSquare' },
    { name: 'CSS/Tailwind', level: 92, icon: 'FaCss3Alt' },
    { name: 'Python', level: 85, icon: 'FaPython' },
    { name: 'Database Design', level: 88, icon: 'FaDatabase' },
    { name: 'Git & GitHub', level: 90, icon: 'FaGitAlt' },
    { name: 'Docker', level: 80, icon: 'FaDocker' },
  ],
  soft: [
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Communication',
    'UI/UX Design',
    'Agile Development',
  ],
}

// Projects Section Data
export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
    image: '🛒',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team features, and intuitive drag-and-drop interface.',
    image: '✓',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with interactive charts, real-time data processing, and comprehensive analytics.',
    image: '📊',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Social networking platform with user authentication, messaging, notifications, and content feed features.',
    image: '👥',
    technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    id: 5,
    title: 'Learning Platform',
    description: 'Online learning platform with video streaming, course management, progress tracking, and certification system.',
    image: '📚',
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    id: 6,
    title: 'AI Chat Assistant',
    description: 'AI-powered chatbot integrated with NLP, supporting multiple languages and providing 24/7 customer support.',
    image: '🤖',
    technologies: ['React', 'Python', 'TensorFlow', 'REST API'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
]

// Experience Section Data
export const experienceData = [
  {
    id: 1,
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2023 - Present',
    description: 'Led development of multiple high-traffic web applications, mentored junior developers, and optimized application performance.',
    achievements: [
      'Increased app performance by 40%',
      'Led team of 5 developers',
      'Deployed to production 100+ times',
    ],
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    period: '2021 - 2023',
    description: 'Developed responsive web applications, implemented RESTful APIs, and collaborated with design teams.',
    achievements: [
      'Built 15+ client projects',
      'Implemented CI/CD pipelines',
      'Reduced load time by 50%',
    ],
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    period: 'Graduated 2021',
    description: 'Graduated with honors. Focused on full-stack development and software engineering best practices.',
    achievements: [
      'GPA: 3.8/4.0',
      "Dean's List all semesters",
      'President of CS Club',
    ],
  },
  {
    id: 4,
    type: 'work',
    title: 'Junior Developer',
    company: 'StartUp Co.',
    period: '2020 - 2021',
    description: 'Started career building responsive front-end interfaces and learning back-end development.',
    achievements: [
      'Learned React and Node.js',
      'Built first production app',
      'Fixed 100+ bugs',
    ],
  },
]

// Contact Section Data
export const contactData = {
  email: 'your.email@example.com',
  phone: '+1 (555) 000-0000',
  location: 'City, State, Country',
  social: [
    { name: 'GitHub', url: 'https://github.com/username', icon: 'FaGithub' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'FaLinkedin' },
    { name: 'Twitter', url: 'https://twitter.com/username', icon: 'FaTwitter' },
  ],
}

// Color Scheme Configuration
export const colors = {
  primary: '#1a1a2e',      // Main dark background
  secondary: '#16213e',    // Secondary dark background
  accent: '#0f3460',       // Accent color for borders
  highlight: '#e94560',    // Primary highlight/CTA color
}

// Navigation Items
export const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

/**
 * USAGE EXAMPLES
 * 
 * In your components, you can either:
 * 1. Create data arrays directly in the component (current approach)
 * 2. Import from this constants file
 * 
 * Example in Hero.jsx:
 * 
 * import { heroData } from '../constants/data'
 * 
 * export default Hero = () => {
 *   return (
 *     <h1>Hi, I'm <span>{heroData.name}</span></h1>
 *     <h2>{heroData.title}</h2>
 *     <p>{heroData.summary}</p>
 *   )
 * }
 */
