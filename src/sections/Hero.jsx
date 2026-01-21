import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

/**
 * Hero Section Component
 * Introduction section with animated greeting and CTA
 * Features smooth fade-in and slide animations
 */
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Floating animation for the arrow
  const floatVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary via-secondary to-primary relative overflow-hidden pt-20"
      role="banner"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-screen opacity-10 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-highlight rounded-full mix-blend-screen opacity-10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Main Content */}
      <motion.div
        className="container-custom text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-highlight font-medium mb-4 tracking-widest uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-highlight">Alexa S. Torres</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-3xl text-gray-300 mb-8 font-light"
        >
          Full Stack Developer & Creative Problem Solver
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          I craft beautiful, responsive web experiences and build scalable applications
          using modern technologies. Let me help bring your ideas to life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-highlight text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primary"
            aria-label="View my projects"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-highlight text-highlight font-semibold rounded-lg hover:bg-highlight hover:text-primary transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primary"
            aria-label="Get in touch with me"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div variants={floatVariants} animate="animate">
            <FaArrowDown className="text-highlight text-2xl" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
