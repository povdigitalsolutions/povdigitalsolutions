import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Info } from 'lucide-react';
import { CTASection } from '@/components/site/section-components';
import { StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { PageHero } from '@/components/site/page-hero';
import { pricingPlans } from '@/data/site-data';
import { whatsappLink } from '@/lib/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent starting prices for websites, booking systems, ERP and business automation. Final pricing depends on your requirements.',
};

const cardDirections: ('left' | 'up' | 'right' | 'scale')[] = ['left', 'up', 'right', 'scale'];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent Starting Prices"
        description="We keep pricing clear and honest. These ranges are starting points — your final quote depends on your specific requirements, complexity and integrations."
        variant="pricing"
      />

      {/* Pricing cards — Light section with dark featured card */}
      <section className="pb-12 surface-mesh">
        <div className="container-px mx-auto max-w-7xl">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {pricingPlans.map((plan, i) => (
              <StaggerItem key={plan.id} direction={cardDirections[i % cardDirections.length]}>
                <Card
                  className={
                    plan.featured
                      ? 'card-premium relative border-brand ring-2 ring-brand/20 h-full bg-navy-gradient text-white'
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
                    <CardTitle className={`text-lg ${plan.featured ? 'text-white' : ''}`}>{plan.name}</CardTitle>
                    <CardDescription className={`text-sm ${plan.featured ? 'text-white/70' : ''}`}>
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={`font-display text-2xl font-bold ${plan.featured ? 'text-white' : 'text-ink'}`}>
                      {plan.price}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-2 text-sm ${
                            plan.featured ? 'text-white/80' : 'text-muted-foreground'
                          }`}
                        >
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-copper-light' : 'text-brand'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`mt-5 w-full transition-all hover:scale-[1.02] ${
                        plan.featured ? 'bg-white text-brand-dark hover:bg-white/90 btn-shine' : 'bg-navy-gradient btn-shine'
                      }`}
                    >
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-xl bg-muted/60 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-ink">Note:</span> Final pricing depends on
              requirements, complexity and integrations. Contact us for a custom quote tailored to
              your business.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Quote?"
        description="Tell us about your business and we'll provide a quote that fits your needs and budget."
        primaryLabel="Get a Custom Quote"
        primaryHref="/contact"
        secondaryLabel="Chat on WhatsApp"
        secondaryHref={whatsappLink()}
      />
    </>
  );
}
