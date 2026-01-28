// Animation constants
export const MODAL_TRANSITION_DURATION = 300; // ms

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

export const FADE_IN_RIGHT = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
};

export const DEFAULT_VIEWPORT = { once: true };
