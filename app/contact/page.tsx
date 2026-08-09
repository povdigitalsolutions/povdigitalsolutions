import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/site/contact-form';
import { LeadForm } from '@/components/site/lead-form';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { PageHero } from '@/components/site/page-hero';
import { siteConfig, whatsappLink, emailLink } from '@/lib/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Tell us what your business needs. We'll understand your requirement and suggest the right digital solution. Get a free consultation today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Something For Your Business."
        description="Tell us what your business needs. We'll understand your requirement and suggest the right solution."
        variant="contact"
      />

      {/* Quick Contact Methods — Light section */}
      <section className="pb-8 surface-mesh">
        <div className="container-px mx-auto max-w-7xl">
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {[
              { href: whatsappLink(), external: true, icon: MessageCircle, bg: 'bg-green-50', color: 'text-green-600', label: 'WhatsApp Us', sub: 'Quick response' },
              { href: emailLink('Requirement Inquiry'), external: false, icon: Mail, bg: 'bg-brand-light', color: 'text-brand', label: 'Email Us', sub: siteConfig.contactEmail },
              { href: `tel:${siteConfig.phone}`, external: false, icon: Phone, bg: 'bg-brand-light', color: 'text-brand', label: 'Call Us', sub: siteConfig.phone },
              { href: null, external: false, icon: MapPin, bg: 'bg-brand-light', color: 'text-brand', label: 'Location', sub: siteConfig.location },
            ].map((item, i) => {
              const directions: ('left' | 'up' | 'right' | 'scale')[] = ['left', 'up', 'right', 'scale'];
              return (
                <StaggerItem key={i} direction={directions[i]}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="card-premium flex items-center gap-3 rounded-2xl border border-border/60 bg-white p-5"
                    >
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.bg}`}>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.sub}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white p-5 card-premium">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.bg}`}>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.sub}</p>
                      </div>
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Contact Form — Light section */}
      <section className="py-12 surface-mesh">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal direction="up">
            <div className="mb-8 text-center">
              <h2 className="font-display text-2xl font-bold text-ink">Send Your Requirement</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>
          </Reveal>
          <Reveal direction="scale">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Lead Capture Form — Dark section */}
      <section className="section-py surface-navy relative overflow-hidden">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-glow" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-3xl">
          <Reveal direction="up">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-copper rounded-full" />
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copper-light backdrop-blur-sm border border-white/10">
                  Quick Capture
                </span>
                <span className="h-px w-6 bg-gradient-to-l from-transparent to-copper rounded-full" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-white">Quick Requirement Capture</h2>
              <p className="mt-2 text-sm text-white/70">
                A quick way to share your business needs and budget.
              </p>
            </div>
          </Reveal>
          <Reveal direction="scale">
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
