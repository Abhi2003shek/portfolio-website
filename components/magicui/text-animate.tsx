"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import { ElementType } from "react";

type AnimationType = "text" | "word" | "character" | "line";
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

interface TextAnimateProps extends MotionProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: ElementType;
  by?: AnimationType;
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const defaultContainerVariants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const defaultItemAnimationVariants: Record<AnimationVariant, { container: Variants; item: Variants }> = {
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
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: (delay: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay, duration: 0.3 },
      }),
      exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
};

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion(Component);

  // Ensure animation is valid
  const animationVariants = defaultItemAnimationVariants[animation] || defaultItemAnimationVariants["fadeIn"];

  const finalVariants = {
    container: {
      ...animationVariants.container,
      show: {
        ...animationVariants.container.show,
        transition: { staggerChildren: staggerTimings[by] },
      },
      exit: {
        ...animationVariants.container.exit,
        transition: { staggerChildren: staggerTimings[by], staggerDirection: -1 },
      },
    },
    item: animationVariants.item,
  };

  const segments = by === "word" ? children.split(/(\s+)/) : children.split("");

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings[by]}
            className={cn(by === "line" ? "block" : "inline-block whitespace-pre", segmentClassName)}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}
