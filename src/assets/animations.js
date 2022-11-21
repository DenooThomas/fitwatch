export const defaultVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  visibleDelayed: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export const textContVariants = {
  hidden: {

  },
  visible: {

    transition: {
      staggerChildren: 0.6,
    },
  },
};

export const titleLeftVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 15,
    },
  },
};

export const titleRightVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 15,
    },
  },
};
