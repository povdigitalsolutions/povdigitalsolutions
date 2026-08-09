import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Lightbulb, ArrowRight, Search, PenTool, Code2, Rocket, LifeBuoy } from 'lucide-react';
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
              A small, dedicated team focused on helping your business grow.
            </p>
          </div>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.15}>
            {teamMembers.map((member, i) => {
              const directions: ('left' | 'up' | 'right')[] = ['left', 'up', 'right'];
              return (
                <StaggerItem key={member.name} direction={directions[i]}>
                  <div className="card-dark group rounded-2xl p-8 text-center h-full">
                    <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-brand-gradient shadow-lg shadow-brand-dark/25 transition-transform duration-300 group-hover:scale-105 ring-2 ring-white/10">
                      <span className="font-display text-3xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-bright">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-copper-light">{member.role}</p>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <p className="mt-8 text-center text-sm text-white/40">
            Team details will be updated with actual information soon.
          </p>
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
