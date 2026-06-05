import { Variants } from "framer-motion";

const transition = { duration: 0.7, ease: [0.7, 0, 0.3, 1] };

export const rsvpAnim : Variants = {
  initial: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: transition,
  },
  exit: {
    opacity: "0",
    transition: transition,
  },
};
