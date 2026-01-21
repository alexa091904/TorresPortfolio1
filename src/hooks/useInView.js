import { useEffect, useRef, useState } from 'react'

/**
 * Custom Hook: useInView
 * Detects when an element enters the viewport
 * Triggers animations on scroll with optional one-time trigger
 *
 * @param {Object} options - Configuration options
 * @param {boolean} options.triggerOnce - If true, animation triggers only once
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @returns {Object} { ref, inView } - Reference and visibility state
 */
export const useInView = (options = {}) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const { triggerOnce = false, threshold = 0.1 } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [triggerOnce, threshold])

  return { ref, inView }
}
