import { Variants } from "framer-motion";


export const rsvpAnim : Variants = {
  initial: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};
