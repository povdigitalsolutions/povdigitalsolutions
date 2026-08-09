'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const useDarkText = scrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass-nav shadow-sm'
          : isHome
            ? 'bg-transparent'
            : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-20">
        {/* Logo */}
            <Link
              href="/"
              className="group relative flex h-16 w-[190px] shrink-0 items-center"
              aria-label="POV Digital Solutions home"
            >
              <div className="relative h-24 w-[190px] -ml-2">
                <div className="absolute inset-4 rounded-full bg-copper/10 blur-xl opacity-50" />

                <Image
                  src="/brand/POV_logo-transparent.png"
                  alt="POV Digital Solutions"
                  fill
                  sizes="(max-width: 639px) 115px, 190px"
                  className="object-contain object-left transition-transform duration-500
                    scale-[1.15] sm:scale-[1.35] lg:scale-[1.75]
                    group-hover:scale-[1.2] sm:group-hover:scale-[1.4] lg:group-hover:scale-[1.80]"
                  priority
                />
              </div>
            </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-300',
                  useDarkText
                    ? isActive
                      ? 'text-brand'
                      : 'text-foreground/70 hover:text-foreground'
                    : isActive
                      ? 'text-copper-light'
                      : 'text-white/70 hover:text-white'
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-copper"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            className={cn(
              'btn-shine shadow-md hover:shadow-lg hover:scale-[1.02] transition-all',
              useDarkText
                ? 'bg-navy-gradient shadow-brand-dark/25 hover:shadow-brand-dark/30'
                : 'bg-white text-brand-dark shadow-white/20 hover:bg-white/90'
            )}
          >
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className={cn('h-5 w-5', !useDarkText && 'text-white')} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs p-0">
            <div className="flex h-full flex-col bg-gradient-to-b from-white to-brand-light/30">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <SheetTitle className="flex items-center gap-3">
                 <div className="relative h-10 w-[115px] sm:h-11 sm:w-[135px]">
                  <Image
                    src="/brand/POV_logo-transparent.png"
                    alt="POV Digital Solutions"
                    fill
                    sizes="(max-width: 640px) 115px, 135px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
                </SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {siteConfig.nav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors',
                        pathname === item.href
                          ? 'bg-brand-light text-brand-dark border-l-2 border-copper'
                          : 'text-foreground/80 hover:bg-muted'
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="border-t p-4">
                <SheetClose asChild>
                  <Button asChild className="w-full btn-shine bg-navy-gradient">
                    <Link href="/contact">Get a Free Consultation</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
