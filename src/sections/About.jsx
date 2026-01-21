import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

/**
 * About Section Component
 * Displays professional summary with animated entrance
 * Uses intersection observer for scroll-triggered animations
 */
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="about"
      className="py-20 bg-primary"
      ref={ref}
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-highlight">Me</span>
            </h2>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with a keen interest in creating
                beautiful, functional web applications. With over 5 years of experience
                in web development, I've worked with startups and enterprises to deliver
                high-quality solutions.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My approach combines technical expertise with user-centered design thinking.
                I believe in writing clean, maintainable code and creating interfaces that
                not only look great but also provide excellent user experiences.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="bg-secondary p-4 rounded-lg border border-accent">
                <h3 className="text-highlight font-bold text-2xl mb-2">50+</h3>
                <p className="text-gray-300 text-sm">Projects Completed</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-accent">
                <h3 className="text-highlight font-bold text-2xl mb-2">5+</h3>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden bg-gradient-to-br from-accent to-highlight">
              {/* Placeholder for image - replace with actual image */}
                <img 
                    src="/image.jpg" 
                    alt="Your Name - Profile"
                    className="w-full h-full object-cover"
                />

              {/* Decorative Border */}
              <motion.div
                className="absolute inset-0 border-2 border-highlight rounded-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(233, 69, 96, 0.3)',
                    '0 0 40px rgba(233, 69, 96, 0.6)',
                    '0 0 20px rgba(233, 69, 96, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
