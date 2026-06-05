import { Variants } from "framer-motion";


export const rsvpAnim : Variants = {
  initial: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: transition,
  },
  exit: {
    opacity: 0,
    transition: transition,
  },
};
