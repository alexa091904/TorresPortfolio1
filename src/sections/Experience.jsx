import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

/**
 * Experience Section Component
 * Displays work experience and education in a timeline format
 * Animated content reveal with staggered animations
 */
const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  // Experience data
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      description: 'Led development of multiple high-traffic web applications, mentored junior developers, and optimized application performance.',
      achievements: ['Increased app performance by 40%', 'Led team of 5 developers', 'Deployed to production 100+ times'],
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      period: '2021 - 2023',
      description: 'Developed responsive web applications, implemented RESTful APIs, and collaborated with design teams.',
      achievements: ['Built 15+ client projects', 'Implemented CI/CD pipelines', 'Reduced load time by 50%'],
    },
    {
      id: 3,
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Technology',
      period: 'Graduated 2021',
      description: 'Graduated with honors. Focused on full-stack development and software engineering best practices.',
      achievements: ['GPA: 3.8/4.0', 'Dean\'s List all semesters', 'President of CS Club'],
    },
    {
      id: 4,
      type: 'work',
      title: 'Junior Developer',
      company: 'StartUp Co.',
      period: '2020 - 2021',
      description: 'Started career building responsive front-end interfaces and learning back-end development.',
      achievements: ['Learned React and Node.js', 'Built first production app', 'Fixed 100+ bugs'],
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="experience"
      className="py-20 bg-secondary"
      ref={ref}
      role="region"
      aria-labelledby="experience-heading"
    >
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-highlight">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8 relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-highlight via-accent to-primary -translate-x-1/2" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`flex gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center items-center">
                <div className="relative">
                  <div className="w-6 h-6 bg-highlight rounded-full border-4 border-secondary" />
                  <div className="absolute inset-0 w-6 h-6 bg-highlight rounded-full animate-ping opacity-30" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 bg-primary rounded-lg p-6 border border-accent hover:border-highlight transition-colors duration-300">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      experience.type === 'work'
                        ? 'bg-highlight text-white'
                        : 'bg-accent text-white'
                    }`}
                  >
                    {experience.type === 'work' ? 'Work' : 'Education'}
                  </span>
                  <span className="text-gray-400 text-sm">{experience.period}</span>
                </div>

                {/* Title and Company */}
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <p className="text-highlight font-semibold mb-3">{experience.company}</p>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="space-y-1">
                  {experience.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-highlight font-bold mt-0.5">✓</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
