const transition = { duration: 0.6, ease: [0.7, 0, 0.3, 1]};


export const rsvpAnim = {
  initial: {
    opacity: "0",
  },
  entry: {
    opacity: "1",
    transition: transition,
  },
  exit: {
    opacity: "0",
    transition: transition,
  },
};