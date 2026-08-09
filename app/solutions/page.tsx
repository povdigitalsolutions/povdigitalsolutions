import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading, CTASection } from '@/components/site/section-components';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { PageHero } from '@/components/site/page-hero';
import { getIcon } from '@/lib/icon-map';
import { solutionCategories } from '@/data/solutions';
import { whatsappLink } from '@/lib/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Explore our digital solutions: websites, booking systems, ERP, business management, automation and custom web applications for growing businesses.',
};

const cardDirections: ('left' | 'right' | 'up' | 'scale')[] = ['left', 'up', 'right', 'scale', 'left', 'right'];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Solutions for Every Business Need"
        description="From a simple website to a full ERP system, we have a solution that fits your business and your budget."
        variant="solutions"
      />

      {/* Solutions grid — Light section */}
      <section className="pb-16 surface-mesh">
        <div className="container-px mx-auto max-w-7xl space-y-16">
          {solutionCategories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <div key={category.id}>
                <Reveal direction="left">
                  <div className="mb-8 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-gradient shadow-md shadow-brand-dark/25">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                        {category.title}
                      </h2>
                      <p className="mt-2 max-w-2xl text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </Reveal>

                <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
                  {category.solutions.map((solution, i) => (
                    <StaggerItem key={i} direction={cardDirections[i % cardDirections.length]}>
                      <Card className="card-premium group flex h-full flex-col">
                        <CardHeader>
                          <CardTitle className="text-lg transition-colors group-hover:text-brand">{solution.title}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {solution.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col">
                          <div className="space-y-1.5">
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              Benefits
                            </p>
                            <ul className="space-y-1.5">
                              {solution.benefits.map((benefit) => (
                                <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4 space-y-1.5">
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              Example Use Cases
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {solution.useCases.map((useCase) => (
                                <span
                                  key={useCase}
                                  className="rounded-md bg-brand-light px-2 py-1 text-xs text-brand-dark"
                                >
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Button asChild variant="link" className="mt-5 self-start p-0 text-brand group/link">
                            <Link href="/contact">
                              Discuss Your Requirement
                              <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Solution You Need?"
        description="Tell us about your business and we'll recommend the right digital solution — no pressure, no jargon."
        primaryLabel="Get a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Chat on WhatsApp"
        secondaryHref={whatsappLink()}
      />
    </>
  );
}
