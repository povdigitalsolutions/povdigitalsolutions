import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  CheckCircle2,
  ArrowLeftRight,
  Sparkles,
  X,
  TrendingUp,
} from 'lucide-react';
import { SectionHeading, CTASection } from '@/components/site/section-components';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { DigitalEcosystem } from '@/components/site/digital-ecosystem';
import { ServicesEcosystem } from '@/components/site/services-ecosystem';
import { ProcessFlow } from '@/components/site/process-flow';
import { WebsiteShowcase } from '@/components/site/website-showcase';
import { getIcon } from '@/lib/icon-map';
import {
  services,
  trustIndicators,
  problems,
  processSteps,
  whyChoose,
  pricingPlans,
  faqs,
} from '@/data/site-data';
import { whatsappLink } from '@/lib/site-config';

export default function HomePage() {
  return (
    <>
      {/* === FULL-SCREEN HERO === */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Living digital ecosystem background */}
        <DigitalEcosystem />

        {/* Hero content — centered over the full-screen environment */}
        <div className="relative z-30 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm border border-white/15">
              <Sparkles className="h-3.5 w-3.5 text-copper-light" />
              <span className="text-sm font-semibold text-white">We Build, You Grow</span>
            </div>
          </div>
          <h1
            className="mt-6 animate-fade-up font-display text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Turn Your Local Business Into a{' '}
            <span className="text-gradient-hero">Digital Business.</span>
          </h1>
          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg text-white/85 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            We build affordable websites, booking systems, ERP applications and custom
            digital solutions that help businesses grow, manage and automate their operations.
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.3s' }}
          >
            <Button
              asChild
              size="lg"
              className="btn-shine bg-brand-gradient shadow-lg shadow-brand-dark/40 hover:shadow-xl hover:shadow-brand/30 hover:scale-[1.03] transition-all"
            >
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/40 hover:scale-[1.03] transition-all"
            >
              <Link href="/showcase">Explore Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/40">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* === TRUST INDICATORS — Dark navy section === */}
      <section className="border-y border-white/10 bg-gradient-to-br from-navy via-navy-light to-brand-darker/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.08}>
            {trustIndicators.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <StaggerItem key={item.label} direction="fade">
                  <div className="flex items-center justify-center gap-2.5 text-center group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-copper/20 transition-all group-hover:bg-copper-gradient group-hover:shadow-lg group-hover:shadow-copper/30">
                      <Icon className="h-5 w-5 text-copper-light transition-colors group-hover:text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white/90">{item.label}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* === SERVICES ECOSYSTEM — Connected visual system === */}
      <section className="section-py surface-mesh">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Digital Solutions Ecosystem"
            description="We don't force businesses into one generic solution. We understand your requirements and build connected digital systems according to your actual business needs."
          />
          <div className="mt-16">
            <ServicesEcosystem services={services} />
          </div>
        </div>
      </section>

      {/* === PROBLEM → SOLUTION → RESULT — Animated transformation === */}
      <section className="section-py surface-navy relative overflow-hidden">
        {/* Decorative animated glows */}
        <div className="absolute -top-40 left-1/4 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-glow" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-copper/10 blur-3xl" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-copper rounded-full" />
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copper-light backdrop-blur-sm border border-white/10">
                The Challenge
              </span>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-copper rounded-full" />
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Is Your Business Still Managing Everything Manually?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
              Every business faces similar challenges. The good news? Every one has a digital solution.
            </p>
          </div>

          {/* Problem statements */}
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {[
              'Customers cannot easily find your business online',
              'Information is scattered across WhatsApp and emails',
              'Appointments are managed manually on paper',
              'Customers repeatedly ask the same questions',
              'Inventory is difficult to track',
              'Business records are maintained manually',
              'No centralized dashboard for operations',
              'Difficult to manage and scale operations',
              "Customers don't know your latest products/services",
            ].map((problem, i) => (
              <StaggerItem key={i} direction="scale">
                <div className="flex items-start gap-3 rounded-xl glass-dark p-4 transition-all hover:border-red-400/30 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <X className="h-3 w-3 text-red-400" />
                  </div>
                  <p className="text-sm text-white/80">{problem}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Transformation arrow */}
          <Reveal direction="up" className="mt-16 text-center">
            <div className="inline-block">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent" />
                <p className="font-display text-xl font-bold text-copper-light">
                  POV transforms this
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-white/30 to-transparent" />
              </div>
            </div>
          </Reveal>

          {/* Problem → Solution → Result transformation cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {problems.map((item, i) => {
              const Icon = getIcon(item.icon);
              const directions: ('left' | 'right' | 'up')[] = ['left', 'up', 'right'];
              return (
                <Reveal key={i} direction={directions[i] || 'up'} delay={i * 0.15}>
                  <div className="h-full rounded-2xl glass-dark p-6 card-dark">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/20">
                      <Icon className="h-6 w-6 text-brand-bright" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-red-400/80">
                          Problem
                        </span>
                        <p className="mt-1 text-sm font-medium text-white/90">{item.problem}</p>
                      </div>
                      <div className="flex items-center gap-3 py-2">
                        <div className="flex-1 h-px bg-gradient-to-r from-copper/0 via-copper to-copper/0" />
                        <ArrowLeftRight className="h-4 w-4 text-copper-light flex-shrink-0" />
                        <div className="flex-1 h-px bg-gradient-to-r from-copper/0 via-copper to-copper/0" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-brand-bright">
                          Solution
                        </span>
                        <p className="mt-1 text-sm font-medium text-white/80">{item.solution}</p>
                      </div>
                      <div className="rounded-lg bg-emerald-500/15 px-3 py-3 border border-emerald-500/30">
                        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-300/90">
                          Result
                        </span>
                        <p className="mt-1 text-sm font-medium text-emerald-200/90">{item.result}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE POV — Light section with enhanced design === */}
      <section className="section-py surface-mesh relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why POV"
            title="Why Choose POV?"
            description="We focus on what actually helps your business — not on selling you things you don't need."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {whyChoose.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <StaggerItem key={item.title} direction="up">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-white p-6 card-premium group">
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-px bg-gradient-to-br from-brand via-copper to-brand pointer-events-none" />
                    <div className="relative flex h-full flex-col gap-4 bg-white rounded-2xl p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-copper/10 transition-all group-hover:from-navy-gradient group-hover:to-copper-gradient group-hover:shadow-lg group-hover:shadow-brand/30">
                        <Icon className="h-6 w-6 text-brand transition-colors group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* === PROCESS FLOW — Animated journey === */}
      <section className="section-py surface-navy relative overflow-hidden">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-glow" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Development Process"
            description="A clear, step-by-step approach that keeps things simple for you."
            light
          />
          <div className="mt-16">
            <ProcessFlow steps={processSteps} />
          </div>
          <Reveal direction="up" className="mt-12 text-center">
            <Button asChild variant="outline" className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/40 hover:scale-[1.02] transition-all">
              <Link href="/process">
                See Full Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* === WEBSITE SHOWCASE — Interactive business type previews === */}
      <section className="section-py surface-mesh relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="See How We Can Transform Different Businesses"
            description="From furniture stores to hospitals, gyms to hotels — we build beautiful, functional websites for any industry."
          />
          <div className="mt-16">
            <WebsiteShowcase />
          </div>
        </div>
      </section>

      {/* === PRICING — Dark gradient cards === */}
      <section className="section-py surface-navy relative overflow-hidden">
        <div className="absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-copper/10 blur-3xl animate-glow-shift" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent Starting Prices"
            description="Final pricing depends on your requirements, complexity and integrations. These ranges give you a clear starting point."
            light
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.id} direction="up">
                <Card
                  className={
                    plan.featured
                      ? 'card-premium relative border-copper ring-2 ring-copper/30 h-full bg-gradient-to-br from-navy/90 to-navy-light/80 text-white'
                      : 'card-premium h-full bg-gradient-to-br from-navy-light/80 to-brand-darker/60 text-white border-white/10'
                  }
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-copper-gradient px-4 py-1 text-xs font-semibold text-white shadow-md shadow-copper/40">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-white/60">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-display text-2xl font-bold bg-gradient-to-r from-copper-light via-copper to-copper-dark bg-clip-text text-transparent">{plan.price}</p>
                    <ul className="mt-4 space-y-2">
                      {plan.features.slice(0, 5).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-copper-light" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`mt-6 w-full transition-all hover:scale-[1.02] ${
                        plan.featured ? 'bg-copper-gradient btn-shine text-white hover:shadow-lg hover:shadow-copper/40' : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      variant={plan.featured ? 'default' : 'outline'}
                    >
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal direction="up" className="mt-10 text-center">
            <Button asChild variant="link" className="text-white group/link hover:text-copper-light">
              <Link href="/pricing">
                View Full Pricing Details
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* === FAQ — Light section === */}
      <section className="section-py surface-mesh">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <Reveal direction="up" className="mt-10">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium text-ink hover:text-brand transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        title="Your Competitors Are Already Online."
        description="Give your customers an easier way to discover, contact and trust your business."
        primaryLabel="Start Your Website"
        primaryHref="/contact"
        secondaryLabel="Talk to POV"
        secondaryHref="/contact"
      />
    </>
  );
}
