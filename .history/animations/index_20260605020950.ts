import { Variants } from "framer-motion";

export const rsvpAnim: Variants = {
  initial: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
};

export const SideBarAnim: Variants = {
  initial: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  entry: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },
};

export const modalAnim: Variants = {
  initial: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.7, 0, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
};
