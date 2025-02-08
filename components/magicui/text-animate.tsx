"use client";
import { Variants } from "framer-motion";

type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

const defaultContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const defaultItemAnimationVariants: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.3 },
      }),
      exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { filter: "blur(10px)" },
      show: { filter: "blur(0px)" },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { filter: "blur(10px)", y: 20 },
      show: { filter: "blur(0px)", y: 0 },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { filter: "blur(10px)", y: -20 },
      show: { filter: "blur(0px)", y: 0 },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 20 },
      show: { y: 0 },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: -20 },
      show: { y: 0 },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 20 },
      show: { x: 0 },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: -20 },
      show: { x: 0 },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 0.8 },
      show: { scale: 1 },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 1.2 },
      show: { scale: 1 },
    },
  },
};

export default defaultItemAnimationVariants;
