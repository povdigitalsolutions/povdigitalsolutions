'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  TrendingUp,
  CalendarCheck,
  Users,
  BarChart3,
  ShoppingBag,
  Bell,
  Globe,
  ServerCog,
  type LucideIcon,
} from 'lucide-react';

interface FloatingFragment {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  x: string;
  y: string;
  delay: number;
  duration: number;
  accent?: 'blue' | 'copper';
}

const fragments: FloatingFragment[] = [
  { icon: TrendingUp, label: '+34%', sublabel: 'Growth', x: '5%', y: '15%', delay: 0.5, duration: 7, accent: 'copper' },
  { icon: CalendarCheck, label: '12', sublabel: 'Bookings Today', x: '72%', y: '8%', delay: 0.8, duration: 8 },
  { icon: Users, label: '1,240', sublabel: 'Customers', x: '78%', y: '62%', delay: 1.1, duration: 9 },
  { icon: BarChart3, label: 'Analytics', sublabel: 'Live Dashboard', x: '8%', y: '68%', delay: 0.6, duration: 7.5, accent: 'copper' },
  { icon: Bell, label: 'New Order', sublabel: 'Just now', x: '45%', y: '5%', delay: 1.4, duration: 6 },
  { icon: ShoppingBag, label: 'Products', sublabel: 'Updated', x: '50%', y: '78%', delay: 1.0, duration: 8.5 },
];

export function HeroWaveSystem() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [prefersReduced]);

  const parallaxX = prefersReduced ? 0 : mousePos.x * 15;
  const parallaxY = prefersReduced ? 0 : mousePos.y * 10;

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-lg mx-auto"
      aria-hidden="true"
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-brand/8 blur-3xl animate-glow" />

      {/* Deep navy backdrop card */}
      <div className="absolute inset-2 rounded-3xl bg-navy-gradient overflow-hidden shadow-2xl shadow-brand-dark/30">
        {/* Grid texture */}
        <div className="absolute inset-0 grid-glow-light opacity-40" />

        {/* Radial glow top */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-brand/25 blur-3xl" />
        {/* Copper glow bottom */}
        <div className="absolute -bottom-16 right-0 h-40 w-40 rounded-full bg-copper/15 blur-3xl" />

        {/* SVG Wave Layers */}
        {!prefersReduced && mounted && (
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(217 91% 50%)" stopOpacity="0.35" />
                <stop offset="50%" stopColor="hsl(224 76% 20%)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(217 91% 50%)" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(217 91% 50%)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(224 76% 20%)" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(28 65% 48%)" stopOpacity="0.12" />
                <stop offset="100%" stopColor="hsl(217 91% 50%)" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="wave4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(217 91% 50%)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(27 80% 62%)" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Background wave — slowest */}
            <g className="animate-wave-slow" style={{ transformOrigin: 'center' }}>
              <path
                d="M-50,120 Q50,80 100,120 T250,120 T450,120 L450,400 L-50,400 Z"
                fill="url(#wave1)"
              />
            </g>

            {/* Mid wave 1 */}
            <g className="animate-wave" style={{ transformOrigin: 'center' }}>
              <path
                d="M-50,180 Q60,140 120,180 T260,180 T460,180 L460,400 L-50,400 Z"
                fill="url(#wave2)"
              />
            </g>

            {/* Mid wave 2 — reverse direction */}
            <g className="animate-wave-reverse" style={{ transformOrigin: 'center' }}>
              <path
                d="M-50,240 Q70,200 140,240 T280,240 T480,240 L480,400 L-50,400 Z"
                fill="url(#wave4)"
              />
            </g>

            {/* Foreground wave — copper accent */}
            <g className="animate-wave-slow" style={{ transformOrigin: 'center', animationDelay: '2s' }}>
              <path
                d="M-50,300 Q80,260 150,300 T300,300 T500,300 L500,400 L-50,400 Z"
                fill="url(#wave3)"
              />
            </g>
          </svg>
        )}

        {/* Static decorative waves for reduced motion */}
        {(prefersReduced || !mounted) && (
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="none">
            <path d="M-50,180 Q60,140 120,180 T260,180 T460,180 L460,400 L-50,400 Z" fill="url(#wave2)" />
            <path d="M-50,300 Q80,260 150,300 T300,300 T500,300 L500,400 L-50,400 Z" fill="url(#wave3)" />
          </svg>
        )}

        {/* Connection lines between nodes */}
        {!prefersReduced && mounted && (
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
            <g stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none">
              <motion.line
                x1="60" y1="80" x2="200" y2="200"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.line
                x1="340" y1="60" x2="200" y2="200"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <motion.line
                x1="60" y1="320" x2="200" y2="200"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
              <motion.line
                x1="340" y1="280" x2="200" y2="200"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.1 }}
              />
            </g>
            {/* Glowing nodes */}
            {[
              { cx: 60, cy: 80, delay: 0.6 },
              { cx: 340, cy: 60, delay: 0.8 },
              { cx: 60, cy: 320, delay: 1.0 },
              { cx: 340, cy: 280, delay: 1.2 },
              { cx: 200, cy: 200, delay: 0.4 },
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.cx}
                cy={node.cy}
                r="3"
                fill="hsl(217 91% 60%)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.7] }}
                transition={{ duration: 1, delay: node.delay, repeat: Infinity, repeatDelay: 3 }}
              />
            ))}
          </svg>
        )}

        {/* Central dashboard card */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 w-[45%] -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ x: parallaxX * 0.5, y: parallaxY * 0.5 }}
        >
          <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                <div className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
                <div className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
              </div>
              <Globe className="h-3 w-3 text-white/40" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 rounded bg-white/15" />
              <div className="flex gap-1.5">
                <div className="h-8 flex-1 rounded bg-brand/30" />
                <div className="h-8 flex-1 rounded bg-copper/20" />
              </div>
              <div className="flex items-end gap-1 h-8">
                {[40, 60, 45, 75, 55, 85, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-brand/40"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating UI Fragments */}
        {fragments.map((frag, i) => {
          const Icon = frag.icon;
          return (
            <motion.div
              key={i}
              className="absolute z-20"
              style={{ left: frag.x, top: frag.y }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: frag.delay }}
            >
              <motion.div
                animate={
                  prefersReduced
                    ? undefined
                    : { y: [0, -10, 0], x: [0, parallaxX * 0.3, 0] }
                }
                transition={{
                  duration: frag.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-2.5 py-2 shadow-lg">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                      frag.accent === 'copper' ? 'bg-copper/25' : 'bg-brand/25'
                    }`}
                  >
                    <Icon
                      className={`h-3.5 w-3.5 ${
                        frag.accent === 'copper' ? 'text-copper-light' : 'text-brand'
                      }`}
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[0.65rem] font-bold text-white">{frag.label}</span>
                    <span className="text-[0.55rem] text-white/50">{frag.sublabel}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Bottom status bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2.5 border-t border-white/10 bg-brand-darker/40 backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[0.6rem] font-medium text-white/60">System Live</span>
          </div>
          <div className="flex items-center gap-1">
            <ServerCog className="h-3 w-3 text-white/30" />
            <span className="text-[0.6rem] text-white/40">POV Platform</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
