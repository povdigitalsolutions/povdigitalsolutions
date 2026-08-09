'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/site/section-components';
import { PageHero } from '@/components/site/page-hero';
import { getIcon } from '@/lib/icon-map';
import { processSteps } from '@/data/site-data';
import { whatsappLink } from '@/lib/site-config';

export default function ProcessPage() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Our Process"
        description="We follow a clear, step-by-step process that keeps things simple and transparent for you — from first conversation to ongoing support."
        variant="process"
      />

      {/* Animated Timeline — Dark section */}
      <section className="section-py surface-navy relative overflow-hidden">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-glow" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-4xl">
          <div className="relative">
            {/* Vertical progress line */}
            <div className="absolute left-6 top-0 h-full w-px bg-white/10 sm:left-1/2" />
            {/* Animated progress fill */}
            <motion.div
              className="absolute left-6 top-0 w-px bg-gradient-to-b from-brand via-brand-bright to-copper sm:left-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: prefersReduced ? 0 : 2.5, ease: 'easeInOut' }}
            />

            <div className="space-y-8">
              {processSteps.map((step, i) => {
                const Icon = getIcon(step.icon);
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, y: prefersReduced ? 0 : 30, x: prefersReduced ? 0 : (isLeft ? -20 : 20) }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: prefersReduced ? 0 : i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Node */}
                    <motion.div
                      className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-gradient shadow-lg shadow-brand-dark/30 sm:left-1/2"
                      initial={{ scale: prefersReduced ? 1 : 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.4, delay: prefersReduced ? 0 : i * 0.15 + 0.2 }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                      {/* Copper ring */}
                      <div className="absolute inset-0 rounded-full ring-1 ring-copper/30" />
                    </motion.div>

                    {/* Content */}
                    <div className={`ml-16 flex-1 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                      <div className="rounded-2xl glass-dark p-6 card-dark group">
                        <span className="font-display text-3xl font-bold text-white/10 transition-colors group-hover:text-copper/30">
                          {step.number}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-bright">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-white/60">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start?"
        description="Let's understand your business and recommend the right digital solution."
        primaryLabel="Get a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Chat on WhatsApp"
        secondaryHref={whatsappLink()}
      />
    </>
  );
}
