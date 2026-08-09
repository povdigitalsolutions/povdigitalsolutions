'use client';

import { useEffect, useState } from 'react';
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

    const typingTexts = [
    'Websites',
    'Booking Systems',
    'ERP Solutions',
    'Business Automation',
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    const speed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

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
          <div
              className="mt-6 h-10 animate-fade-up flex items-center justify-center"
              style={{ animationDelay: '0.2s' }}
            >
              <p className="text-lg font-semibold text-white/90 sm:text-3xl">
                <span className="text-copper drop-shadow-[0_2px_8px_rgba(255,255,255,0.50)]">{displayText}</span>
                <span className="ml-1 inline-block h-9 w-[2px] translate-y-1 animate-pulse bg-copper-light" />
              </p>
            </div>

            
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.3s' }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-orange-800 text-white shadow-lg shadow-orange-500/30 hover:from-amber-300 hover:via-orange-400 hover:to-orange-700 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all"
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

      {/* === TRUST INDICATORS — Light strip === */}
      <section className="border-y border-border/60 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.08}>
            {trustIndicators.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <StaggerItem key={item.label} direction="fade">
                  <div className="flex items-center justify-center gap-2.5 text-center group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light transition-all group-hover:bg-brand-gradient">
                      <Icon className="h-5 w-5 text-brand transition-colors group-hover:text-white" />
                    </div>
                    <span className="text-sm font-semibold text-ink">{item.label}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* === WHAT WE DO — Light section === */}
      <section className="section-py surface-mesh">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Digital Solutions Built Around Your Business"
            description="We don't force businesses into one generic solution. We understand your requirements and build according to your actual business needs."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
            {services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <StaggerItem key={service.id} direction="up">
                  <Card className="card-premium group h-full">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light transition-all duration-300 group-hover:bg-navy-gradient group-hover:shadow-lg group-hover:shadow-brand-dark/20">
                        <Icon className="h-6 w-6 text-brand transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl transition-colors group-hover:text-brand">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="link" className="mt-4 h-auto p-0 text-brand group/link">
                        <Link href="/solutions">
                          Learn More
                          <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* === PROBLEM SECTION — Dark navy section === */}
      <section className="section-py surface-navy relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-40 left-1/4 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-glow" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-copper/10 blur-3xl" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-copper rounded-full" />
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copper-light backdrop-blur-sm border border-white/10">
                The Problem
              </span>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-copper rounded-full" />
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Is Your Business Still Managing Everything Manually?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
              Many businesses struggle with the same challenges. The good news? Every one of these has a digital solution.
            </p>
          </div>

          {/* Problem list */}
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {[
              'Customers cannot easily find your business online',
              'Information is scattered across WhatsApp',
              'Appointments are managed manually',
              'Customers repeatedly ask the same questions',
              'Inventory is difficult to track',
              'Business records are maintained manually',
              'No centralized dashboard',
              'Difficult to manage growing operations',
              "Customers don't know your latest products/services",
            ].map((problem, i) => (
              <StaggerItem key={i} direction="scale">
                <div className="flex items-start gap-3 rounded-xl glass-dark p-4 transition-all hover:border-red-400/30">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <X className="h-3 w-3 text-red-400" />
                  </div>
                  <p className="text-sm text-white/80">{problem}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Transformation arrow */}
          <Reveal direction="up" className="mt-12 text-center">
            <p className="font-display text-2xl font-bold text-white sm:text-3xl">
              We can digitize it.
            </p>
            <div className="mx-auto mt-3 flex justify-center">
              <div className="flex flex-col items-center gap-1">
                <div className="h-8 w-px bg-gradient-to-b from-copper to-brand" />
                <ArrowRight className="h-5 w-5 text-copper-light rotate-90" />
              </div>
            </div>
          </Reveal>

          {/* Problem → Solution → Result cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {problems.map((item, i) => {
              const Icon = getIcon(item.icon);
              const directions: ('left' | 'right' | 'up')[] = ['left', 'up', 'right'];
              return (
                <Reveal key={i} direction={directions[i] || 'up'} delay={i * 0.1}>
                  <div className="h-full rounded-2xl glass-dark p-6 card-dark">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20">
                      <Icon className="h-5 w-5 text-brand-bright" />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-red-400">
                          Problem
                        </span>
                        <p className="text-sm font-medium text-white">{item.problem}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowLeftRight className="h-4 w-4 text-copper-light" />
                        <span className="text-sm font-semibold text-brand-bright">{item.solution}</span>
                      </div>
                      <div className="rounded-lg bg-green-500/10 px-3 py-2 border border-green-500/20">
                        <span className="text-xs font-semibold uppercase tracking-wide text-green-400">
                          Result
                        </span>
                        <p className="text-sm font-medium text-green-300">{item.result}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE POV — Light section === */}
      <section className="section-py surface-mesh">
        <div className="container-px mx-auto max-w-7xl">
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
                  <div className="flex gap-4 rounded-2xl border border-border/60 bg-white p-6 card-premium h-full group">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light transition-all group-hover:bg-navy-gradient">
                      <Icon className="h-5 w-5 text-brand transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* === PROCESS PREVIEW — Dark navy section === */}
      <section className="section-py surface-navy relative overflow-hidden">
        <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-glow" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="container-px relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-copper rounded-full" />
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copper-light backdrop-blur-sm border border-white/10">
                How We Work
              </span>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-copper rounded-full" />
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Our Process
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
              A clear, step-by-step approach that keeps things simple for you.
            </p>
          </div>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
            {processSteps.map((step) => {
              const Icon = getIcon(step.icon);
              return (
                <StaggerItem key={step.number} direction="up">
                  <div className="relative rounded-2xl glass-dark p-6 card-dark h-full group">
                    <div className="absolute right-5 top-5 font-display text-3xl font-bold text-white/10 transition-colors group-hover:text-copper/30">
                      {step.number}
                    </div>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient shadow-md shadow-brand-dark/30">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-bright">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60">{step.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <Reveal direction="up" className="mt-8 text-center">
            <Button asChild variant="outline" className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/40 hover:scale-[1.02] transition-all">
              <Link href="/process">
                See Full Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* === PRICING PREVIEW — Light section === */}
      <section className="section-py surface-mesh">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent Starting Prices"
            description="Final pricing depends on your requirements, complexity and integrations. These ranges give you a clear starting point."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.id} direction="up">
                <Card
                  className={
                    plan.featured
                      ? 'card-premium relative border-brand ring-2 ring-brand/20 h-full'
                      : 'card-premium h-full'
                  }
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-copper-gradient px-4 py-1 text-xs font-semibold text-white shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-display text-2xl font-bold text-ink">{plan.price}</p>
                    <ul className="mt-4 space-y-2">
                      {plan.features.slice(0, 5).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`mt-5 w-full transition-all hover:scale-[1.02] ${
                        plan.featured ? 'bg-navy-gradient btn-shine' : ''
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
          <Reveal direction="up" className="mt-8 text-center">
            <Button asChild variant="link" className="text-brand group/link">
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
