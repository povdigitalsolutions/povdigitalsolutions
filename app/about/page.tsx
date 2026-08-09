import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Lightbulb, ArrowRight, Search, PenTool, Code2, Rocket, LifeBuoy, Instagram, Linkedin } from 'lucide-react';
import { SectionHeading, CTASection } from '@/components/site/section-components';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { PageHero } from '@/components/site/page-hero';
import { teamMembers } from '@/data/site-data';
import { whatsappLink } from '@/lib/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'POV Digital Solutions helps local businesses go digital with affordable, practical and modern digital solutions.',
};

const approachSteps = [
  { icon: Search, label: 'Understand' },
  { icon: PenTool, label: 'Design' },
  { icon: Code2, label: 'Build' },
  { icon: Rocket, label: 'Launch' },
  { icon: LifeBuoy, label: 'Support' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We Help Local Businesses Go Digital."
        description="POV Digital Solutions was created with the goal of making modern technology accessible to businesses. We believe a business should not need to spend huge amounts of money to get a professional digital presence."
        variant="about"
      />

      
      {/* Co-Founders — Dark section */}
      <section className="section-py surface-navy relative overflow-hidden">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-copper/10 blur-3xl animate-glow" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-copper rounded-full" />
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copper-light backdrop-blur-sm border border-white/10">
                Our Team
              </span>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-copper rounded-full" />
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
              The Co-Founders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
             A focused team combining business strategy, technology and execution to build practical digital solutions for growing businesses.
            </p>
          </div>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.15}>
            {teamMembers.map((member, i) => {
              const directions: ('left' | 'up' | 'right')[] = ['left', 'up', 'right'];
              return (
                <StaggerItem key={member.name} direction={directions[i]}>
                 <div className="card-dark group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-copper/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-brand/20 sm:p-8">

                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-copper/10 blur-3xl" />

                  {/* Profile Photo */}
                  <div className="relative mx-auto mb-6 w-fit">

                    {/* Outer gradient frame */}
                    <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-brand via-blue-500/60 to-copper opacity-70 blur-[2px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-[3px]" />

                    <div className="relative h-40 w-40 overflow-hidden rounded-[1.8rem] border border-white/20 bg-navy-gradient shadow-2xl shadow-black/30 sm:h-44 sm:w-44">

                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="font-display text-4xl font-bold text-white">
                            {member.initials}
                          </span>
                        </div>
                      )}

                      {/* Bottom image gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="relative font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-brand-bright">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <div className="relative mt-2 inline-flex items-center rounded-full border border-copper/30 bg-copper/10 px-4 py-1.5">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper-light">
                      {member.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="relative mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/60">
                    {member.description}
                  </p>

                  <div className="mt-5 flex justify-center gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-110 hover:border-brand/40 hover:bg-brand/20 hover:text-white"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}

                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on Instagram`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-110 hover:border-copper/40 hover:bg-copper/20 hover:text-white"
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                  {/* Bottom accent */}
                  <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-copper to-transparent opacity-60 transition-all duration-500 group-hover:w-24" />

                  </div>
              </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Approach — Dark section */}
      <section className="section-py surface-navy relative overflow-hidden">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-glow" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-5xl">
          <Reveal direction="up">
            <div className="text-center">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-copper rounded-full" />
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copper-light backdrop-blur-sm border border-white/10">
                  Our Approach
                </span>
                <span className="h-px w-6 bg-gradient-to-l from-transparent to-copper rounded-full" />
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                How We Work With You
              </h2>
            </div>
          </Reveal>

          <StaggerGroup className="relative mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2 lg:gap-6" stagger={0.12}>
            {approachSteps.map((step, i) => (
              <StaggerItem key={step.label} direction="scale">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient shadow-md shadow-brand-dark/30 transition-all hover:scale-110 group">
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">{step.label}</span>
                  </div>
                  {i < approachSteps.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-copper/60 sm:block" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Mission & Vision — Light section */}
      <section className="section-py surface-mesh">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Mission, Vision & Belief"
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.15}>
            {[
              { icon: Target, title: 'Our Mission', text: 'To make affordable and practical digital solutions accessible to businesses.' },
              { icon: Eye, title: 'Our Vision', text: 'To become a trusted digital technology partner for businesses by helping them move from manual processes to efficient digital systems.' },
              { icon: Lightbulb, title: 'What We Believe', text: 'Technology should solve problems, not create more complexity.' },
            ].map((item, i) => {
              const directions: ('left' | 'up' | 'right')[] = ['left', 'up', 'right'];
              return (
                <StaggerItem key={item.title} direction={directions[i]}>
                  <Card className="card-premium group h-full">
                    <CardContent className="p-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-gradient shadow-md shadow-brand-dark/25 transition-transform group-hover:scale-110">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand">{item.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
      
      <CTASection
        title="Let's Build Something For Your Business."
        description="Tell us what your business needs. We'll understand your requirement and suggest the right solution."
        primaryLabel="Get a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Chat on WhatsApp"
        secondaryHref={whatsappLink()}
      />
    </>
  );
}
