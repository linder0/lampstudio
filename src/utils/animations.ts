import type { Variants, Transition } from 'framer-motion'

/**
 * Shared animation variants for consistent motion across the app.
 * Eliminates duplicated animation patterns in components.
 */

// Base fade-in-up animation
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Fade-in without movement
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

// Standard transition timing
export const defaultTransition: Transition = {
  duration: 0.5,
}

// Generate staggered delay for list items
export const staggeredTransition = (index: number, baseDelay = 0): Transition => ({
  delay: baseDelay + index * 0.1,
  duration: 0.5,
})

// Spring transition for interactive elements
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}
