import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { siteConfig, whatsappLink, emailLink } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-darker text-white/80">
      {/* Decorative top line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-dark via-brand to-copper" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-glow-light opacity-20" />

      {/* Glow accents */}
      <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-copper/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center">
              <div className="relative h-40 w-80 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src="/brand/POV_logo.png"
                  alt="POV Digital Solutions"
                  fill
                  sizes="350px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Your Business. Digitally Better.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-all hover:bg-brand/30 hover:scale-105"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-all hover:bg-brand/30 hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-all hover:bg-brand/30 hover:scale-105"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <div className="mt-4 h-px w-8 bg-copper/50 rounded-full" />
            <ul className="mt-4 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <div className="mt-4 h-px w-8 bg-copper/50 rounded-full" />
            <ul className="mt-4 space-y-3">
              {siteConfig.services.map((service) => (
                <li key={service}>
                  <Link
                    href="/solutions"
                    className="text-sm text-white/60 transition-colors hover:text-white hover:translate-x-1 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <div className="mt-4 h-px w-8 bg-copper/50 rounded-full" />
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={emailLink()}
                  className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" />
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-green-400" />
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-white/60">
                  <MapPin className="h-4 w-4 shrink-0 text-copper-light" />
                  {siteConfig.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-white/50">
            &copy; 2026 POV Digital Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
