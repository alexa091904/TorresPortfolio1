import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

/**
 * Footer Component
 * Simple footer with copyright and year
 * Accessibility compliant with semantic HTML
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-secondary border-t border-accent py-8"
      role="contentinfo"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright Text */}
          <p className="text-gray-400 text-center md:text-left">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart className="text-highlight" aria-hidden="true" />
            </motion.div>
            <span>by Your Name</span>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-highlight font-semibold hover:text-pink-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-secondary rounded px-2 py-1"
            aria-label="Scroll to top"
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
