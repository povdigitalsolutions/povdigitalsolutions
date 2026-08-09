'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand via-copper to-brand rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-brand via-brand-bright to-copper text-white font-display font-bold text-lg sm:text-xl flex items-center justify-center rounded-lg h-10 w-10 sm:h-12 sm:w-12">
                POV
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-ink text-sm leading-tight">POV</div>
              <div className="text-xs text-copper-light font-semibold">Digital</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/solutions" className="text-sm font-medium text-ink hover:text-brand transition-colors">
              Solutions
            </Link>
            <Link href="/showcase" className="text-sm font-medium text-ink hover:text-brand transition-colors">
              Showcase
            </Link>
            <Link href="/about" className="text-sm font-medium text-ink hover:text-brand transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white bg-gradient-to-r from-brand to-copper-dark px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-brand/30 transition-all">
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Link href="/contact" className="text-sm font-medium text-white bg-gradient-to-r from-brand to-copper-dark px-3 py-1.5 rounded-lg hover:shadow-lg transition-all">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
