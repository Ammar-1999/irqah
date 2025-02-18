export const sliderVariants = {
  incoming: (direction) => ({
    scale: 1.1,
    opacity: 0,
    originY: direction > 0 ? 1 : 0, // 1 = right, 0 = left
    originX: 1, // Always bottom
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    scale: 1.1,
    opacity: 0.2,
    originY: direction > 0 ? 1 : 0, // 1 = right, 0 = left
    originX: 1, // Always bottom
  }),
};
export const ease = [0.33, 1, 0.68, 1];
export const heroContentVariants = {
  initial: (delay: number) => ({
    opacity: 0,
    y: 20,
    transition: { delay, duration: 0.8, ease },
  }),
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease },
  }),
};
export const heroContactVariants = {
  initial: {
    opacity: 0,
    y: -20,
    transition: { delay: 1, duration: 0.8, ease },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 0.8, ease },
  },
};

export const heroActionVariants = {
  initial: {
    opacity: 0,
    x: -20,
    transition: { delay: 1, duration: 0.8, ease },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, duration: 0.8, ease },
  },
};
export const heroImageControllerVariants = {
  initial: {
    opacity: 0,
    x: 20,
    transition: { delay: 1, duration: 0.8, ease },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, duration: 0.8, ease },
  },
};

export const sliderTransition = {
  duration: 1.2,
  ease: [0.56, 0.03, 0.12, 1.04],
};
export const dotsTransition = {
  type: "spring",
  stiffness: 100,
  damping: 10,
};
export const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.7 },
};
export const overlayTransition = {
  duration: 0.8,
  delay: 1,
  ease: "easeInOut",
};

export const analysis = {
  initial: {
    opacity: 0,
    y: 20,
    transition: { delay: 1, duration: 0.8, ease },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 0.8, ease },
  },
};

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay },
  }),
};

export const spring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

