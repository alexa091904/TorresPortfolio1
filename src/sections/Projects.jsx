import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

/**
 * Projects Section Component
 * Showcases portfolio projects with animated cards
 * Features project descriptions, technologies, and links
 */
const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, team features, and intuitive drag-and-drop interface.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      image: '✓',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description:
        'Data visualization dashboard with interactive charts, real-time data processing, and comprehensive analytics.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: '📊',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Social Media App',
      description:
        'Social networking platform with user authentication, messaging, notifications, and content feed features.',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB'],
      image: '👥',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Learning Platform',
      description:
        'Online learning platform with video streaming, course management, progress tracking, and certification system.',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      image: '📚',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description:
        'AI-powered chatbot integrated with NLP, supporting multiple languages and providing 24/7 customer support.',
      technologies: ['React', 'Python', 'TensorFlow', 'REST API'],
      image: '🤖',
      link: '#',
      github: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 bg-primary"
      ref={ref}
      role="region"
      aria-labelledby="projects-heading"
    >
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-highlight">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating impactful solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-secondary rounded-lg overflow-hidden border border-accent hover:border-highlight transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-40 bg-gradient-to-br from-accent to-highlight flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-highlight transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent text-xs rounded-full text-gray-300 hover:bg-highlight hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-accent">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-highlight transition-colors duration-300 text-sm font-medium"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-highlight transition-colors duration-300 text-sm font-medium ml-auto"
                    aria-label={`View ${project.title} live demo`}
                  >
                    Demo <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
