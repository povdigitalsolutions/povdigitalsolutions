export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  solutions: SolutionItem[];
}

export interface SolutionItem {
  title: string;
  description: string;
  benefits: string[];
  useCases: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  initials: string;
  image: string;
  linkedin?: string;
  instagram?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProblemItem {
  problem: string;
  solution: string;
  result: string;
  icon: string;
}

export interface ShowcaseTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  thumbnail: string;
  url: string;
  status: 'published' | 'draft' | 'coming-soon';
  version: string;
  tags?: string[];
  features?: string[];
}

export interface LeadSubmission {
  name: string;
  business: string;
  category: string;
  phone: string;
  requirement: string;
  budget: string;
  message?: string;
  email?: string;
}

export interface ContactSubmission {
  name: string;
  businessName?: string;
  phone: string;
  email: string;
  category: string;
  need: string;
  message: string;
}
