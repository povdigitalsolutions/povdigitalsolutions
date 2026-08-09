'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { getIcon } from '@/lib/icon-map';
import { ProcessStep } from '@/lib/types';

interface ProcessFlowProps {
  steps: ProcessStep[];
}

export function ProcessFlow({ steps }: ProcessFlowProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative">
      {/* Animated timeline path */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217 91% 50%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(217 91% 50%)" stopOpacity="0.3" />
            <stop offset="70%" stopColor="hsl(28 65% 48%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(28 65% 48%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {!prefersReduced && (
          <motion.line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="url(#path-gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        )}
      </svg>

      <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
        {steps.map((step) => {
          const Icon = getIcon(step.icon);
          return (
            <StaggerItem key={step.number} direction="up">
              <div className="relative h-full">
                <motion.div
                  className="rounded-2xl glass-dark p-6 card-dark h-full group"
                  animate={prefersReduced ? undefined : {
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: parseInt(step.number) * 0.3,
                  }}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-copper-light to-copper shadow-lg shadow-copper/40 border-2 border-white/20">
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient shadow-md shadow-brand-dark/30 transition-all group-hover:shadow-lg group-hover:shadow-brand/40">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-bright">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{step.description}</p>

                  {/* Connection dot for next step */}
                  {parseInt(step.number) < steps.length && (
                    <motion.div
                      className="absolute -right-4 top-1/2 h-2 w-2 rounded-full bg-copper-light shadow-lg shadow-copper/60 -translate-y-1/2"
                      animate={prefersReduced ? undefined : {
                        scale: [1, 1.3, 1],
                        boxShadow: ['0 0 8px hsl(27 80% 62%)', '0 0 16px hsl(27 80% 62%)', '0 0 8px hsl(27 80% 62%)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </motion.div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </div>
  );
}
