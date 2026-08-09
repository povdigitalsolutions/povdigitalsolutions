'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getIcon } from '@/lib/icon-map';
import { ServiceItem } from '@/lib/types';
import Link from 'next/link';

interface ServicesEcosystemProps {
  services: ServiceItem[];
}

export function ServicesEcosystem({ services }: ServicesEcosystemProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative">
      {/* Central POV hub */}
      <div className="flex justify-center mb-16">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand via-brand-bright to-copper shadow-2xl shadow-brand/40">
            <div className="text-center">
              <div className="text-xs font-bold text-white uppercase tracking-wider">POV</div>
              <div className="text-[0.6rem] text-white/80 mt-1">Digital Hub</div>
            </div>
          </div>
          {/* Animated glow ring */}
          {!prefersReduced && (
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-brand/30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* Services grid with orbital layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = getIcon(service.icon);
          const directions = ['up', 'right', 'down', 'left', 'up', 'right'];
          const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5];

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: delays[index] }}
            >
              <Card className="card-premium group h-full relative overflow-hidden">
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-px bg-gradient-to-br from-brand via-copper to-brand pointer-events-none" />

                <div className="relative bg-white">
                  <CardHeader>
                    <motion.div
                      className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-light to-brand/10 transition-all duration-300 group-hover:from-navy-gradient group-hover:to-copper-gradient group-hover:shadow-lg group-hover:shadow-brand/30"
                      animate={prefersReduced ? undefined : {
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      }}
                    >
                      <Icon className="h-7 w-7 text-brand transition-colors duration-300 group-hover:text-white" />
                    </motion.div>
                    <CardTitle className="text-xl transition-colors group-hover:text-brand">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="link"
                      className="h-auto p-0 text-brand group/link font-semibold"
                    >
                      <Link href="/solutions">
                        Learn More
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Connection lines to hub (desktop only) */}
      <svg
        className="absolute inset-0 top-24 h-full w-full pointer-events-none hidden lg:block"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="connection-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 50%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(28 65% 48%)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <g stroke="url(#connection-grad)" strokeWidth="1" fill="none" opacity="0.3">
          <line x1="600" y1="100" x2="300" y2="300" />
          <line x1="600" y1="100" x2="900" y2="300" />
          <line x1="600" y1="100" x2="200" y2="500" />
          <line x1="600" y1="100" x2="1000" y2="500" />
          <line x1="600" y1="100" x2="600" y2="400" />
          <line x1="600" y1="100" x2="400" y2="700" />
        </g>
      </svg>
    </div>
  );
}
