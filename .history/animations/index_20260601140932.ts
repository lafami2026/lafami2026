const transition = { duration: 0.6, ease: [0.7, 0, 0.3, 1]};


export const P = {
  initial: {
    height: "0dvh",
  },
  entry: {
    height: "100dvh",
    transition: transition,
  },
  exit: {
    height: "0dvh",
    transition: transition,
  },
};