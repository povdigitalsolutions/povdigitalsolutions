'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sofa, Stethoscope, Dumbbell, BedDouble, CakeSlice } from 'lucide-react';
import Link from 'next/link';

interface BusinessType {
  id: string;
  name: string;
  industry: string;
  icon: React.ReactNode;
  accent: string;
  gradient: string;
  features: string[];
  color: string;
}

const businesses: BusinessType[] = [
  {
    id: 'furniture',
    name: 'Modern Furniture Store',
    industry: 'Retail',
    icon: <Sofa className="h-8 w-8" />,
    accent: 'from-amber-500 to-amber-600',
    gradient: 'from-amber-50 to-orange-50',
    color: 'text-amber-600',
    features: ['Product Catalog', 'Shopping Cart', 'Online Checkout', 'Customer Reviews'],
  },
  {
    id: 'hospital',
    name: 'Healthcare Clinic',
    industry: 'Medical',
    icon: <Stethoscope className="h-8 w-8" />,
    accent: 'from-sky-500 to-blue-600',
    gradient: 'from-sky-50 to-blue-50',
    color: 'text-sky-600',
    features: ['Doctor Profiles', 'Appointment Booking', 'Medical Records', 'Lab Tests'],
  },
  {
    id: 'gym',
    name: 'Fitness Center',
    industry: 'Wellness',
    icon: <Dumbbell className="h-8 w-8" />,
    accent: 'from-emerald-500 to-green-600',
    gradient: 'from-emerald-50 to-green-50',
    color: 'text-emerald-600',
    features: ['Membership Plans', 'Class Schedule', 'Trainer Profiles', 'Progress Tracking'],
  },
  {
    id: 'hotel',
    name: 'Boutique Hotel',
    industry: 'Hospitality',
    icon: <BedDouble className="h-8 w-8" />,
    accent: 'from-violet-500 to-purple-600',
    gradient: 'from-violet-50 to-purple-50',
    color: 'text-violet-600',
    features: ['Room Booking', 'Amenities Info', 'Guest Reviews', 'Special Offers'],
  },
  {
    id: 'bakery',
    name: 'Artisan Bakery',
    industry: 'Food',
    icon: <CakeSlice className="h-8 w-8" />,
    accent: 'from-pink-500 to-rose-600',
    gradient: 'from-pink-50 to-rose-50',
    color: 'text-pink-600',
    features: ['Order Online', 'Menu Display', 'Delivery Info', 'Custom Orders'],
  },
];

export function WebsiteShowcase() {
  const [selectedId, setSelectedId] = useState('furniture');
  const prefersReduced = useReducedMotion();
  const selected = businesses.find((b) => b.id === selectedId) || businesses[0];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
      {/* Left: Business selector */}
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold text-ink">Choose Your Industry</h3>
        <p className="text-muted-foreground max-w-md">
          Every business type has unique digital needs. Here's how we build websites for different industries.
        </p>
        <div className="space-y-3 mt-8">
          {businesses.map((business) => (
            <motion.button
              key={business.id}
              onClick={() => setSelectedId(business.id)}
              className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                selectedId === business.id
                  ? `border-brand bg-gradient-to-r ${business.accent}/10 shadow-lg shadow-brand/20`
                  : 'border-border/40 bg-white hover:border-brand/30 hover:bg-white/80'
              }`}
              animate={prefersReduced ? undefined : {
                scale: selectedId === business.id ? 1.02 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${business.accent}`}>
                  <div className="text-white">{business.icon}</div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-ink">{business.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{business.industry}</p>
                </div>
                {selectedId === business.id && (
                  <motion.div
                    layoutId="selected-indicator"
                    className="flex-shrink-0 w-2 h-2 rounded-full bg-brand"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right: Website preview */}
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:sticky lg:top-32"
      >
        <div className={`rounded-2xl overflow-hidden border-2 border-border/60 bg-gradient-to-br ${selected.gradient} shadow-2xl`}>
          {/* Browser bar */}
          <div className={`flex items-center gap-1.5 bg-gradient-to-r ${selected.accent} px-4 py-3`}>
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <div className="ml-3 flex-1">
              <div className="h-2 w-40 rounded-sm bg-white/20" />
            </div>
          </div>

          {/* Website content */}
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Hero */}
              <div className={`mb-8 rounded-xl bg-gradient-to-br ${selected.accent} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">{selected.icon}</div>
                  <h2 className="font-display text-xl font-bold">{selected.name}</h2>
                </div>
                <p className="text-white/90 text-sm">Premium {selected.industry.toLowerCase()} solutions built for you</p>
              </div>

              {/* Features grid */}
              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-ink text-sm uppercase tracking-wide">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selected.features.map((feature) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-lg bg-white/60 p-3 border border-white/40"
                    >
                      <div className={`text-xs font-semibold ${selected.color}`}>{feature}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${selected.accent} text-white hover:shadow-lg transition-all`}
                >
                  <Link href="/contact">Get a Quote for {selected.industry}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
