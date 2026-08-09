'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  TrendingUp,
  CalendarCheck,
  Users,
  BarChart3,
  ShoppingBag,
  Bell,
  Heart,
  Dumbbell,
  BedDouble,
  Stethoscope,
  Sofa,
  type LucideIcon,
} from 'lucide-react';

/* ============================================================
   FLOATING WEBSITE PREVIEW WINDOWS
   Miniature fake websites that float across the hero
   ============================================================ */

interface WebsitePreview {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  x: string;
  y: string;
  delay: number;
  floatDuration: number;
  rotate: number;
  scale: number;
  depth: number;
  browserBar: string;
  // content
  heroColor: string;
  heroText: string;
  cards: { color: string; text: string }[];
}

const previews: WebsitePreview[] = [
  {
    id: 'furniture',
    label: 'Furniture Store',
    icon: Sofa,
    accent: 'text-amber-300',
    x: '6%',
    y: '18%',
    delay: 0.4,
    floatDuration: 8,
    rotate: -6,
    scale: 1,
    depth: 0.4,
    browserBar: 'from-amber-900/40 to-amber-700/30',
    heroColor: 'from-amber-800/50 to-amber-900/40',
    heroText: 'Modern Living',
    cards: [
      { color: 'bg-amber-700/30', text: 'Sofa' },
      { color: 'bg-amber-600/25', text: 'Table' },
      { color: 'bg-amber-800/30', text: 'Chair' },
    ],
  },
  {
    id: 'hospital',
    label: 'Hospital',
    icon: Stethoscope,
    accent: 'text-sky-300',
    x: '78%',
    y: '14%',
    delay: 0.7,
    floatDuration: 9,
    rotate: 5,
    scale: 0.9,
    depth: 0.6,
    browserBar: 'from-sky-900/40 to-sky-700/30',
    heroColor: 'from-sky-800/50 to-sky-900/40',
    heroText: 'Care & Health',
    cards: [
      { color: 'bg-sky-700/30', text: 'Doctors' },
      { color: 'bg-sky-600/25', text: 'Booking' },
      { color: 'bg-sky-800/30', text: 'Pharmacy' },
    ],
  },
  {
    id: 'gym',
    label: 'Fitness Center',
    icon: Dumbbell,
    accent: 'text-emerald-300',
    x: '10%',
    y: '62%',
    delay: 1.0,
    floatDuration: 7,
    rotate: 4,
    scale: 0.85,
    depth: 0.8,
    browserBar: 'from-emerald-900/40 to-emerald-700/30',
    heroColor: 'from-emerald-800/50 to-emerald-900/40',
    heroText: 'Train Hard',
    cards: [
      { color: 'bg-emerald-700/30', text: 'Plans' },
      { color: 'bg-emerald-600/25', text: 'Schedule' },
      { color: 'bg-emerald-800/30', text: 'Trainers' },
    ],
  },
  {
    id: 'hotel',
    label: 'Hotel & Lodge',
    icon: BedDouble,
    accent: 'text-violet-300',
    x: '74%',
    y: '58%',
    delay: 1.3,
    floatDuration: 10,
    rotate: -4,
    scale: 0.95,
    depth: 0.5,
    browserBar: 'from-violet-900/40 to-violet-700/30',
    heroColor: 'from-violet-800/50 to-violet-900/40',
    heroText: 'Book Your Stay',
    cards: [
      { color: 'bg-violet-700/30', text: 'Rooms' },
      { color: 'bg-violet-600/25', text: 'Spa' },
      { color: 'bg-violet-800/30', text: 'Dining' },
    ],
  },
];

/* ============================================================
   FLOATING UI FRAGMENTS (notifications, metrics)
   ============================================================ */

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
  { icon: TrendingUp, label: '+34%', sublabel: 'Growth', x: '46%', y: '10%', delay: 0.8, duration: 7, accent: 'copper' },
  { icon: CalendarCheck, label: '12', sublabel: 'Bookings Today', x: '88%', y: '40%', delay: 1.1, duration: 8 },
  { icon: Users, label: '1,240', sublabel: 'Customers', x: '3%', y: '44%', delay: 1.4, duration: 9 },
  { icon: Bell, label: 'New Order', sublabel: 'Just now', x: '40%', y: '88%', delay: 1.0, duration: 6.5 },
  { icon: ShoppingBag, label: 'Products', sublabel: 'Updated', x: '90%', y: '80%', delay: 1.6, duration: 8.5, accent: 'copper' },
  { icon: BarChart3, label: 'Analytics', sublabel: 'Live', x: '6%', y: '82%', delay: 0.9, duration: 7.5 },
];

/* ============================================================
   NETWORK NODES
   ============================================================ */

const networkNodes = [
  { cx: 120, cy: 100, delay: 0 },
  { cx: 380, cy: 80, delay: 0.3 },
  { cx: 640, cy: 120, delay: 0.6 },
  { cx: 900, cy: 90, delay: 0.9 },
  { cx: 1100, cy: 200, delay: 1.2 },
  { cx: 200, cy: 300, delay: 0.4 },
  { cx: 500, cy: 250, delay: 0.7 },
  { cx: 800, cy: 300, delay: 1.0 },
  { cx: 1050, cy: 350, delay: 1.3 },
  { cx: 350, cy: 450, delay: 0.5 },
  { cx: 650, cy: 400, delay: 0.8 },
  { cx: 950, cy: 450, delay: 1.1 },
];

const networkConnections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11],
  [6, 1], [7, 2], [10, 7],
];

/* ============================================================
   TRANSFORMATION FLOW
   BUSINESS → WEBSITE → CUSTOMERS → DIGITAL SYSTEM → GROWTH
   ============================================================ */

const flowSteps = [
  { label: 'Business', icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6' },
  { label: 'Website', icon: 'M3 6h18M3 12h18M3 18h18M7 6v12M17 6v12' },
  { label: 'Customers', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { label: 'Digital System', icon: 'M4 4h16v16H4zM4 9h16M9 9v11' },
  { label: 'Growth', icon: 'M3 3v18h18M19 9l-5 5-4-4-3 3' },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export function DigitalEcosystem() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const yShift1 = useTransform(scrollY, [0, 800], [0, -120]);
  const yShift2 = useTransform(scrollY, [0, 800], [0, -220]);
  const yShift3 = useTransform(scrollY, [0, 800], [0, -60]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;
    let rafId: number;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePos({ x, y });
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReduced]);

  const parallaxX = prefersReduced ? 0 : mousePos.x * 30;
  const parallaxY = prefersReduced ? 0 : mousePos.y * 20;

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ opacity: heroOpacity }}
    >
      {/* === LAYER 0: Deep navy base === */}
      <div className="absolute inset-0 bg-navy-gradient" />

      {/* === LAYER 1: Large animated gradient blobs === */}
      <motion.div
        className="absolute -top-40 -left-20 h-[650px] w-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 50% / 0.28) 0%, transparent 70%)',
          y: yShift1,
          x: parallaxX * 0.3,
        }}
        animate={prefersReduced ? undefined : {
          scale: [1, 1.18, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[550px] w-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(213 100% 58% / 0.22) 0%, transparent 70%)',
          y: yShift2,
          x: parallaxX * -0.2,
        }}
        animate={prefersReduced ? undefined : {
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Copper accent glow */}
      <motion.div
        className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(28 65% 48% / 0.14) 0%, transparent 70%)',
          y: yShift3,
        }}
        animate={prefersReduced ? undefined : {
          scale: [1, 1.35, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* === LAYER 2: Grid pattern === */}
      <div className="absolute inset-0 grid-lines opacity-50" />

      {/* === LAYER 3: SVG Waves === */}
      {!prefersReduced && mounted && (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="hero-wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 50%)" stopOpacity="0.18" />
              <stop offset="50%" stopColor="hsl(213 100% 58%)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="hsl(224 76% 20%)" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="hero-wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 50%)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="hsl(224 76% 20%)" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="hero-wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(28 65% 48%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(217 91% 50%)" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <g className="animate-wave-slow" style={{ transformOrigin: 'center' }}>
            <path d="M-100,280 Q200,230 400,280 T800,280 T1300,280 L1300,800 L-100,800 Z" fill="url(#hero-wave1)" />
          </g>
          <g className="animate-wave" style={{ transformOrigin: 'center' }}>
            <path d="M-100,380 Q250,330 500,380 T900,380 T1300,380 L1300,800 L-100,800 Z" fill="url(#hero-wave2)" />
          </g>
          <g className="animate-wave-reverse" style={{ transformOrigin: 'center', animationDelay: '2s' }}>
            <path d="M-100,480 Q200,430 450,480 T850,480 T1300,480 L1300,800 L-100,800 Z" fill="url(#hero-wave3)" />
          </g>
        </svg>
      )}

      {/* === LAYER 4: Network nodes + connection lines === */}
      {!prefersReduced && mounted && (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Connection lines */}
          <g stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none">
            {networkConnections.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={networkNodes[a].cx}
                y1={networkNodes[a].cy}
                x2={networkNodes[b].cx}
                y2={networkNodes[b].cy}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </g>

          {/* Animated dashed data-flow lines */}
          <g stroke="hsl(217 91% 60%)" strokeWidth="1.5" fill="none" opacity="0.35">
            {networkConnections.slice(0, 7).map(([a, b], i) => (
              <line
                key={`dash-${i}`}
                x1={networkNodes[a].cx}
                y1={networkNodes[a].cy}
                x2={networkNodes[b].cx}
                y2={networkNodes[b].cy}
                className="animate-dash"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </g>

          {/* Glowing blue nodes */}
          {networkNodes.map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r="4"
              fill="hsl(217 91% 60%)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.6] }}
              transition={{ duration: 1.5, delay: node.delay, repeat: Infinity, repeatDelay: 4, ease: 'easeOut' }}
              style={{ filter: 'drop-shadow(0 0 6px hsl(217 91% 60% / 0.6))' }}
            />
          ))}

          {/* Copper accent nodes */}
          {[2, 7, 9].map((idx, i) => (
            <motion.circle
              key={`copper-${i}`}
              cx={networkNodes[idx].cx}
              cy={networkNodes[idx].cy}
              r="5"
              fill="hsl(28 65% 55%)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.8, 1], opacity: [0, 1, 0.5] }}
              transition={{ duration: 2, delay: 1 + i * 0.5, repeat: Infinity, repeatDelay: 5, ease: 'easeOut' }}
              style={{ filter: 'drop-shadow(0 0 8px hsl(28 65% 55% / 0.5))' }}
            />
          ))}
        </svg>
      )}

      {/* === LAYER 5: Cursor-following glow === */}
      {!prefersReduced && mounted && (
        <motion.div
          className="absolute h-72 w-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(213 100% 58% / 0.14) 0%, transparent 70%)',
            left: '50%',
            top: '50%',
            x: parallaxX * 6,
            y: parallaxY * 6,
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* === LAYER 6: Floating website-preview windows === */}
      {mounted && previews.map((preview, i) => {
        const Icon = preview.icon;
        return (
          <motion.div
            key={preview.id}
            className="absolute z-20 hidden lg:block"
            style={{
              left: preview.x,
              top: preview.y,
              x: parallaxX * preview.depth,
              y: parallaxY * preview.depth,
            }}
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: preview.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Continuous float + rotate */}
            <motion.div
              animate={prefersReduced ? undefined : {
                y: [0, -16, 0],
                x: [0, i % 2 === 0 ? 8 : -8, 0],
                rotate: [preview.rotate, preview.rotate + 2, preview.rotate],
              }}
              transition={{
                duration: preview.floatDuration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ rotate: preview.rotate, scale: preview.scale }}
            >
              <div className="w-56 overflow-hidden rounded-xl border border-white/10 bg-brand-darker/80 shadow-2xl backdrop-blur-md">
                {/* Browser bar */}
                <div className={`flex items-center gap-1.5 bg-gradient-to-r ${preview.browserBar} px-3 py-2`}>
                  <div className="h-2 w-2 rounded-full bg-red-400/60" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
                  <div className="h-2 w-2 rounded-full bg-green-400/60" />
                  <div className="ml-2 flex-1">
                    <div className="h-3 w-24 rounded-sm bg-white/10" />
                  </div>
                </div>
                {/* Website hero */}
                <div className={`relative h-16 bg-gradient-to-br ${preview.heroColor}`}>
                  <div className="absolute left-3 top-2 flex items-center gap-1.5">
                    <Icon className={`h-3.5 w-3.5 ${preview.accent}`} />
                    <span className="text-[0.6rem] font-bold text-white/80">{preview.heroText}</span>
                  </div>
                  <div className="absolute bottom-2 left-3 right-3">
                    <div className="h-1.5 w-20 rounded-full bg-white/20" />
                    <div className="mt-1 h-1.5 w-14 rounded-full bg-white/10" />
                  </div>
                </div>
                {/* Website cards */}
                <div className="grid grid-cols-3 gap-1.5 p-2">
                  {preview.cards.map((card, j) => (
                    <div key={j} className="space-y-1">
                      <div className={`h-8 rounded ${card.color}`} />
                      <div className="h-1 w-full rounded-full bg-white/10" />
                      <div className="h-1 w-2/3 rounded-full bg-white/5" />
                    </div>
                  ))}
                </div>
                {/* CTA bar */}
                <div className="px-2 pb-2">
                  <div className="h-4 rounded bg-brand/30" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* === LAYER 7: Floating UI fragments === */}
      {mounted && fragments.map((frag, i) => {
        const Icon = frag.icon;
        return (
          <motion.div
            key={i}
            className="absolute z-20 hidden md:block"
            style={{
              left: frag.x,
              top: frag.y,
              x: parallaxX * (0.4 + i * 0.12),
              y: parallaxY * (0.4 + i * 0.08),
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: frag.delay }}
          >
            <motion.div
              animate={prefersReduced ? undefined : { y: [0, -14, 0], x: [0, i % 2 === 0 ? 7 : -7, 0] }}
              transition={{ duration: frag.duration, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2.5 rounded-xl glass-dark px-3 py-2.5 shadow-xl">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${frag.accent === 'copper' ? 'bg-copper/25' : 'bg-brand/25'}`}>
                  <Icon className={`h-4 w-4 ${frag.accent === 'copper' ? 'text-copper-light' : 'text-brand-bright'}`} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold text-white">{frag.label}</span>
                  <span className="text-[0.6rem] text-white/50">{frag.sublabel}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* === LAYER 8: Transformation flow (bottom of hero) === */}
      {mounted && (
        <div className="absolute bottom-16 left-1/2 z-20 hidden w-full max-w-4xl -translate-x-1/2 px-4 md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              {flowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-1 sm:gap-2">
                  <motion.div
                    className="flex flex-col items-center gap-1.5"
                    animate={prefersReduced ? undefined : { y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm sm:h-10 sm:w-10">
                      <svg
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${i === flowSteps.length - 1 ? 'text-copper-light' : 'text-brand-bright'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d={step.icon} />
                      </svg>
                    </div>
                    <span className="text-[0.6rem] font-medium text-white/60 sm:text-xs">{step.label}</span>
                  </motion.div>
                  {i < flowSteps.length - 1 && (
                    <svg className="h-5 w-8 sm:w-12" viewBox="0 0 48 20" fill="none">
                      <line
                        x1="2"
                        y1="10"
                        x2="46"
                        y2="10"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      {!prefersReduced && (
                        <motion.circle
                          cx="4"
                          cy="10"
                          r="2"
                          fill={i === flowSteps.length - 2 ? 'hsl(28 65% 55%)' : 'hsl(217 91% 60%)'}
                          animate={{ cx: [4, 44, 4] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                          style={{ filter: 'drop-shadow(0 0 4px currentColor)' }}
                        />
                      )}
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </motion.div>
  );
}
