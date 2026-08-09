'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  PackageOpen,
  Monitor,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { SectionHeading, CTASection } from '@/components/site/section-components';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { whatsappLink } from '@/lib/site-config';
import type { ShowcaseTemplate } from '@/lib/types';

export default function ShowcasePage() {
  const [templates, setTemplates] = useState<ShowcaseTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTemplates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/showcase/templates', { cache: 'no-store' });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error('Invalid response format');
      setTemplates(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load templates');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  const publishedTemplates = templates.filter((t) => t.status === 'published');
  const comingSoonTemplates = templates.filter((t) => t.status === 'coming-soon');

  return (
    <>
      <PageHero
        eyebrow="Business Showcase"
        title="See How Your Business Could Look Online"
        description="Before building your website, we can show you a working example designed specifically for your industry."
        variant="showcase"
      />

      {/* Sales Message — Light section */}
      <section className="pb-12 surface-mesh">
        <div className="container-px mx-auto max-w-5xl">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-light/40 to-white p-6 sm:p-8">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-copper/8 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-gradient shadow-md shadow-brand-dark/20">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    Your Demo Can Become Your Website
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Choose your industry &rarr; See a working example &rarr; Share your requirements
                    &rarr; We customize it for your business.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    POV Digital Solutions maintains a growing collection of industry-specific website
                    templates that can be customized for individual businesses.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Templates Grid — Light section */}
      <section className="pb-16 surface-mesh">
        <div className="container-px mx-auto max-w-7xl">
          {loading && <ShowcaseSkeleton />}

          {!loading && error && (
            <div className="mx-auto max-w-lg text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Couldn't Load Templates
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Something went wrong while loading the showcase. Please try again.
              </p>
              <Button onClick={fetchTemplates} variant="outline" className="mt-5 hover:scale-[1.02] transition-all">
                <RefreshCw className="mr-2 h-4 w-4" />
                Retry
              </Button>
            </div>
          )}

          {!loading && !error && templates.length === 0 && (
            <div className="mx-auto max-w-lg text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                <PackageOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">
                New industry demos are coming soon.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We're building industry-specific demos. Check back soon or contact us to see a
                preview for your business.
              </p>
              <Button asChild className="mt-5 bg-navy-gradient btn-shine hover:scale-[1.02] transition-all">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          )}

          {!loading && !error && templates.length > 0 && (
            <div className="space-y-12">
              {publishedTemplates.length > 0 && (
                <div>
                  <Reveal direction="left">
                    <h2 className="mb-6 font-display text-2xl font-bold text-ink">
                      Available Demos
                    </h2>
                  </Reveal>
                  <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
                    {publishedTemplates.map((template) => (
                      <StaggerItem key={template.id} direction="scale">
                        <ShowcaseCard template={template} />
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              )}

              {comingSoonTemplates.length > 0 && (
                <div>
                  <Reveal direction="right">
                    <h2 className="mb-6 font-display text-2xl font-bold text-ink">
                      Coming Soon
                    </h2>
                  </Reveal>
                  <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
                    {comingSoonTemplates.map((template) => (
                      <StaggerItem key={template.id} direction="up">
                        <ShowcaseCard template={template} />
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want a Demo for Your Industry?"
        description="We can build a working example for your specific business type. Let us know what you need."
        primaryLabel="Request a Demo"
        primaryHref="/contact"
        secondaryLabel="Chat on WhatsApp"
        secondaryHref={whatsappLink()}
      />
    </>
  );
}

function ShowcaseCard({ template }: { template: ShowcaseTemplate }) {
  const isPublished = template.status === 'published';

  return (
    <Card className="card-premium group flex flex-col overflow-hidden h-full">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-light via-brand/5 to-brand-dark/10 transition-transform duration-500 group-hover:scale-105">
          <Monitor className="h-12 w-12 text-brand/30 transition-all duration-500 group-hover:scale-110 group-hover:text-brand/50" />
        </div>
        <div className="absolute left-3 top-3">
          <Badge
            className={
              isPublished
                ? 'bg-green-500 text-white hover:bg-green-500 shadow-md'
                : 'bg-amber-500/90 text-white hover:bg-amber-500/90 shadow-md'
            }
          >
            {isPublished ? 'Live' : 'Coming Soon'}
          </Badge>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardContent className="flex flex-1 flex-col p-5">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-copper">{template.category}</div>
        <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand">{template.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{template.description}</p>

        {template.features && template.features.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {template.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex-1" />
        {isPublished ? (
          <Button asChild className="w-full bg-navy-gradient btn-shine hover:scale-[1.02] transition-all group/btn">
            <a href={template.url} target="_blank" rel="noopener noreferrer">
              View Demo
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
        ) : (
          <Button asChild variant="outline" className="w-full hover:scale-[1.02] transition-all">
            <Link href="/contact">
              Notify Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function ShowcaseSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <div className="aspect-video animate-pulse bg-muted" />
          <CardContent className="p-5">
            <div className="mb-2 h-3 w-20 animate-pulse rounded bg-muted" />
            <div className="mb-3 h-5 w-32 animate-pulse rounded bg-muted" />
            <div className="mb-2 h-4 w-full animate-pulse rounded bg-muted" />
            <div className="mb-4 h-4 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded bg-muted" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
