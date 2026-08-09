'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface MobileScrollCardsProps {
  children: ReactNode;
  className?: string;
}

export function MobileScrollCards({ children, className = '' }: MobileScrollCardsProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={`scroll-cards-container ${className}`}
      initial={prefersReduced ? {} : { opacity: 0 }}
      whileInView={prefersReduced ? {} : { opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  colorClass?: string;
}

export function ScrollCard({ children, className = '', delay = 0, colorClass }: ScrollCardProps) {
  const prefersReduced = useReducedMotion();

  const colorGradients: Record<string, string> = {
    'blue': 'from-brand-light to-blue-50 border-brand/20',
    'copper': 'from-orange-50 to-amber-50 border-copper/20',
    'navy': 'from-navy-light/20 to-brand-darker/10 border-navy/30',
    'emerald': 'from-emerald-50 to-green-50 border-emerald/20',
    'violet': 'from-violet-50 to-purple-50 border-violet/20',
  };

  const bgGradient = colorGradients[colorClass || 'blue'] || colorGradients.blue;

  return (
    <motion.div
      className={`scroll-card`}
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '100px' }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <motion.div
        className={`rounded-xl border-2 bg-gradient-to-br ${bgGradient} p-6 h-full min-w-[280px] sm:min-w-[320px] ${className}`}
        whileHover={prefersReduced ? {} : { scale: 1.03, y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
