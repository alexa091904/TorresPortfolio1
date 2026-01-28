import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

/**
 * Contact Section Component
 * Provides contact form and social links
 * Includes form validation and interactive feedback
 */
const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('ndZ-aYUtVnxutpZ6h')
  }, [])

  // Contact information
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'alextorres9194@gmail.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+6396 123 567 234',
      link: 'tel:+15550000000',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Butuan City, Philippines',
      link: '#',
    },
  ]

  // Social links
  const socialLinks = [
    { icon: FaGithub, url: '#', label: 'GitHub' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const templateParams = {
        to_email: 'alextorres9194@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(
        'service_fqk2w2q',
        'template_4pl90ks',
        templateParams
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again later.')
      console.error('Email error:', err)
    } finally {
      setLoading(false)
    }
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="contact"
      className="py-20 bg-primary"
      ref={ref}
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-highlight">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info Cards */}
          {contactInfo.map((info) => {
            const IconComponent = info.icon
            return (
              <motion.a
                key={info.label}
                href={info.link}
                variants={itemVariants}
                className="bg-secondary p-6 rounded-lg border border-accent hover:border-highlight transition-all duration-300 group text-center"
                whileHover={{ y: -5 }}
              >
                <IconComponent className="text-4xl text-highlight mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold mb-2">{info.label}</h3>
                <p className="text-gray-400 hover:text-highlight transition-colors duration-300">
                  {info.value}
                </p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Form and Social */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-secondary rounded-lg p-8 border border-accent"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center h-64"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your message has been sent. I'll get back to you soon!
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-red-300 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-accent rounded-lg px-4 py-2 focus:outline-none focus:border-highlight transition-colors duration-300 text-white"
                    placeholder="Your name"
                    aria-label="Your full name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-accent rounded-lg px-4 py-2 focus:outline-none focus:border-highlight transition-colors duration-300 text-white"
                    placeholder="your.email@example.com"
                    aria-label="Your email address"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-accent rounded-lg px-4 py-2 focus:outline-none focus:border-highlight transition-colors duration-300 text-white"
                    placeholder="Project inquiry"
                    aria-label="Message subject"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-primary border border-accent rounded-lg px-4 py-2 focus:outline-none focus:border-highlight transition-colors duration-300 text-white resize-none"
                    placeholder="Tell me about your project..."
                    aria-label="Your message"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-highlight text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-secondary"
                  aria-label="Send message"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Social Links and Additional Info */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            {/* Social Links Section */}
            <div className="bg-secondary rounded-lg p-8 border border-accent">
              <h3 className="text-lg font-bold mb-6">Follow Me</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-primary rounded-lg border border-accent hover:border-highlight hover:bg-accent transition-all duration-300 group"
                      aria-label={`Visit my ${social.label} profile`}
                    >
                      <IconComponent className="text-2xl text-highlight group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Response */}
            <motion.div
              className="bg-accent rounded-lg p-6 border border-highlight"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-center">
                💡 I typically respond within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
