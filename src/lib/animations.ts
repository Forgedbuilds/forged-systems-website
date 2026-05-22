import { type Variants } from 'framer-motion';

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 0 0px rgba(255,107,26,0)' },
  hover: {
    y: -6,
    boxShadow: '0 0 30px rgba(255,107,26,0.2)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const glowPulse: Variants = {
  initial: { boxShadow: '0 0 20px rgba(255,107,26,0.2)' },
  animate: {
    boxShadow: ['0 0 20px rgba(255,107,26,0.2)', '0 0 40px rgba(255,107,26,0.4)', '0 0 20px rgba(255,107,26,0.2)'],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const typewriterVariant: Variants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1.5, ease: 'linear' },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
