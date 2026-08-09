'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  light = false,
  className,
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();
  return (
    <div
      className={cn(
        'max-w-3xl',
        center && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className={cn('mb-4', center && 'flex justify-center')}
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-copper rounded-full" />
            <Badge
              variant="secondary"
              className={cn(
                'font-semibold border',
                light
                  ? 'bg-white/10 text-copper-light border-white/15'
                  : 'bg-brand-light text-brand-dark border-brand/10'
              )}
            >
              {eyebrow}
            </Badge>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-copper rounded-full" />
          </div>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={cn(
          'font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight',
          light ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={cn(
            'mt-4 text-base sm:text-lg',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  const prefersReduced = useReducedMotion();
  return (
    <section className="section-py relative overflow-hidden surface-navy">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 grid-lines opacity-40" />

        {/* Moving gradient blobs */}
        {!prefersReduced && (
          <>
            <motion.div
              className="absolute -top-20 -left-10 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-copper/15 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-bright/10 blur-3xl"
              animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </>
        )}

        {/* Network lines */}
        <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
            <motion.line x1="100" y1="100" x2="400" y2="200" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
            <motion.line x1="400" y1="200" x2="800" y2="100" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }} />
            <motion.line x1="800" y1="100" x2="1100" y2="250" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4 }} />
            <motion.line x1="400" y1="200" x2="300" y2="350" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }} />
            <motion.line x1="400" y1="200" x2="700" y2="350" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
          </g>
          {[
            { cx: 100, cy: 100, d: 0 }, { cx: 400, cy: 200, d: 0.3 },
            { cx: 800, cy: 100, d: 0.6 }, { cx: 1100, cy: 250, d: 0.9 },
            { cx: 300, cy: 350, d: 0.4 }, { cx: 700, cy: 350, d: 0.7 },
          ].map((n, i) => (
            <motion.circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r="4"
              fill={i % 3 === 0 ? 'hsl(28 65% 55%)' : 'hsl(217 91% 60%)'}
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: n.d }}
            />
          ))}
        </svg>
      </div>

      <div className="container-px relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mx-auto max-w-2xl text-center"
        >
          {/* Copper accent line */}
          <div className="absolute -top-4 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-copper to-copper-light" />

          <motion.h2
            initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl font-bold text-white sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg text-white/80"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="btn-shine bg-white text-brand-dark hover:bg-white/90 hover:scale-[1.03] transition-all shadow-lg">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/40 hover:scale-[1.03] transition-all"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
