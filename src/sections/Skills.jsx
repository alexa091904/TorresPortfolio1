import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  FaReact,
  FaNode,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaJsSquare,
  FaCss3Alt,
} from 'react-icons/fa'

/**
 * Skills Section Component
 * Displays technical skills with animated progress bars and icons
 * Staggered animations for visual interest
 */
const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Skills data with proficiency levels
  const technicalSkills = [
    { name: 'React.js', level: 95, icon: FaReact, color: 'text-blue-400' },
    { name: 'Node.js', level: 90, icon: FaNode, color: 'text-green-400' },
    { name: 'JavaScript', level: 95, icon: FaJsSquare, color: 'text-yellow-400' },
    { name: 'CSS/Tailwind', level: 92, icon: FaCss3Alt, color: 'text-blue-300' },
    { name: 'Python', level: 85, icon: FaPython, color: 'text-blue-500' },
    { name: 'Database Design', level: 88, icon: FaDatabase, color: 'text-orange-400' },
    { name: 'Git & GitHub', level: 90, icon: FaGitAlt, color: 'text-red-500' },
    { name: 'Docker', level: 80, icon: FaDocker, color: 'text-cyan-400' },
  ]

  // Soft skills data
  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Communication',
    'UI/UX Design',
    'Agile Development',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Progress bar animation
  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: 'easeOut' },
    }),
  }

  return (
    <section
      id="skills"
      className="py-20 bg-secondary"
      ref={ref}
      role="region"
      aria-labelledby="skills-heading"
    >
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-highlight">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {technicalSkills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-primary p-6 rounded-lg border border-accent hover:border-highlight transition-colors duration-300"
              >
                {/* Skill Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className={`text-2xl ${skill.color}`} aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <p className="text-highlight text-sm font-bold">{skill.level}%</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden border border-accent">
                  <motion.div
                    className="h-full bg-gradient-to-r from-highlight to-pink-500 rounded-full"
                    custom={skill.level}
                    variants={progressVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-highlight">Soft</span> Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-accent p-4 rounded-lg text-center hover:bg-highlight transition-colors duration-300 transform hover:scale-105 cursor-pointer"
                role="article"
                tabIndex={0}
              >
                <p className="font-semibold">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
