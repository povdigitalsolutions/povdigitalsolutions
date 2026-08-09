'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

type Variant = 'solutions' | 'showcase' | 'about' | 'process' | 'pricing' | 'contact';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  variant: Variant;
}

const variantConfig: Record<Variant, { pattern: ReactNode; accent: string }> = {
  solutions: {
    accent: 'from-brand-bright/20 to-transparent',
    pattern: <SolutionsPattern />,
  },
  showcase: {
    accent: 'from-brand/20 to-transparent',
    pattern: <ShowcasePattern />,
  },
  about: {
    accent: 'from-copper/15 to-transparent',
    pattern: <AboutPattern />,
  },
  process: {
    accent: 'from-brand-bright/20 to-transparent',
    pattern: <ProcessPattern />,
  },
  pricing: {
    accent: 'from-copper/15 to-transparent',
    pattern: <PricingPattern />,
  },
  contact: {
    accent: 'from-brand/20 to-transparent',
    pattern: <ContactPattern />,
  },
};

export function PageHero({ eyebrow, title, description, variant }: PageHeroProps) {
  const prefersReduced = useReducedMotion();
  const config = variantConfig[variant];

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20">
      {/* Deep navy background */}
      <div className="absolute inset-0 -z-10 bg-navy-gradient" />

      {/* Variant-specific animated pattern */}
      <div className="absolute inset-0 -z-10">{config.pattern}</div>

      {/* Grid texture */}
      <div className="absolute inset-0 -z-10 grid-lines opacity-40" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-copper rounded-full" />
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copper-light backdrop-blur-sm border border-white/10">
              {eyebrow}
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-copper rounded-full" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-center font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-center text-base text-white/70 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}

/* === Variant-specific animated background patterns === */

function SolutionsPattern() {
  const prefersReduced = useReducedMotion();
  return (
    <>
      <motion.div
        className="absolute -top-20 left-1/4 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 50% / 0.2) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 -right-20 h-60 w-60 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(213 100% 58% / 0.15) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* System blocks pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none">
          <rect x="100" y="80" width="120" height="80" rx="8" />
          <rect x="260" y="120" width="120" height="80" rx="8" />
          <rect x="420" y="80" width="120" height="80" rx="8" />
          <line x1="220" y1="120" x2="260" y2="160" />
          <line x1="380" y1="160" x2="420" y2="120" />
        </g>
      </svg>
    </>
  );
}

function ShowcasePattern() {
  const prefersReduced = useReducedMotion();
  return (
    <>
      <motion.div
        className="absolute -top-10 right-1/4 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 50% / 0.18) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Website preview frames */}
      <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none">
          <rect x="150" y="60" width="140" height="100" rx="6" />
          <rect x="350" y="100" width="140" height="100" rx="6" />
          <rect x="550" y="60" width="140" height="100" rx="6" />
          <rect x="750" y="100" width="140" height="100" rx="6" />
          <rect x="950" y="60" width="140" height="100" rx="6" />
        </g>
        <motion.g
          animate={prefersReduced ? undefined : { x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="150" y="60" width="140" height="100" rx="6" fill="hsl(217 91% 50% / 0.08)" />
        </motion.g>
      </svg>
    </>
  );
}

function AboutPattern() {
  const prefersReduced = useReducedMotion();
  return (
    <>
      <motion.div
        className="absolute -top-20 left-1/3 h-64 w-64 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(28 65% 48% / 0.15) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 50% / 0.15) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Growth graph */}
      <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <motion.path
          d="M100,300 Q300,280 500,220 T900,150 T1100,100"
          stroke="hsl(217 91% 60%)"
          strokeWidth="2"
          fill="none"
          initial={prefersReduced ? undefined : { pathLength: 0 }}
          animate={prefersReduced ? undefined : { pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </svg>
    </>
  );
}

function ProcessPattern() {
  const prefersReduced = useReducedMotion();
  return (
    <>
      <motion.div
        className="absolute -top-10 left-1/4 h-64 w-64 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 50% / 0.18) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Journey path */}
      <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <motion.path
          d="M100,200 Q300,100 600,200 T1100,200"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
          initial={prefersReduced ? undefined : { strokeDashoffset: 0 }}
          animate={prefersReduced ? undefined : { strokeDashoffset: -24 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        {[100, 350, 600, 850, 1100].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={200}
            r="5"
            fill={i === 0 ? 'hsl(28 65% 55%)' : 'hsl(217 91% 60%)'}
            animate={prefersReduced ? undefined : { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        ))}
      </svg>
    </>
  );
}

function PricingPattern() {
  const prefersReduced = useReducedMotion();
  return (
    <>
      <motion.div
        className="absolute -top-20 right-1/3 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(28 65% 48% / 0.12) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 50% / 0.15) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </>
  );
}

function ContactPattern() {
  const prefersReduced = useReducedMotion();
  return (
    <>
      <motion.div
        className="absolute -top-10 left-1/3 h-64 w-64 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 50% / 0.18) 0%, transparent 70%)' }}
        animate={prefersReduced ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Connection network */}
      <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
          <line x1="200" y1="100" x2="500" y2="200" />
          <line x1="500" y1="200" x2="800" y2="100" />
          <line x1="800" y1="100" x2="1000" y2="250" />
          <line x1="500" y1="200" x2="300" y2="300" />
          <line x1="500" y1="200" x2="700" y2="300" />
        </g>
        {[
          { cx: 200, cy: 100 }, { cx: 500, cy: 200 }, { cx: 800, cy: 100 },
          { cx: 1000, cy: 250 }, { cx: 300, cy: 300 }, { cx: 700, cy: 300 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill={i === 1 ? 'hsl(28 65% 55%)' : 'hsl(217 91% 60%)'}
            animate={prefersReduced ? undefined : { scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
      </svg>
    </>
  );
}
