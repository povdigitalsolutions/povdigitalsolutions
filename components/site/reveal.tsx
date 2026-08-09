'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const offset = 60;

const getVariants = (direction: Direction, prefersReduced: boolean | null): Variants => {
  if (prefersReduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  switch (direction) {
    case 'up':
      return {
        hidden: { opacity: 0, y: offset },
        visible: { opacity: 1, y: 0 },
      };
    case 'down':
      return {
        hidden: { opacity: 0, y: -offset },
        visible: { opacity: 1, y: 0 },
      };
    case 'left':
      return {
        hidden: { opacity: 0, x: -offset },
        visible: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: offset },
        visible: { opacity: 1, x: 0 },
      };
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1 },
      };
    case 'fade':
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  amount = 0.15,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const variants = getVariants(direction, Boolean(prefersReduced));

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = 0.15,
}: StaggerGroupProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: prefersReduced ? 0 : 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: prefersReduced ? 0 : stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  direction?: Direction;
  className?: string;
}

export function StaggerItem({
  children,
  direction = 'up',
  className,
}: StaggerItemProps) {
  const prefersReduced = useReducedMotion();
  const variants = getVariants(direction, Boolean(prefersReduced));

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
