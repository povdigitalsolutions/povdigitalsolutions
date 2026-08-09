import { ServiceItem, ProblemItem, ProcessStep, PricingPlan, TeamMember, FaqItem } from '@/lib/types';

export const services: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'Professional websites that help customers discover and trust your business.',
    icon: 'Globe',
    features: ['Responsive Design', 'SEO Basics', 'Fast Loading', 'Mobile Friendly'],
  },
  {
    id: 'booking-systems',
    title: 'Booking & Appointment Systems',
    description:
      'Allow customers to book appointments, tables, rooms or services online.',
    icon: 'CalendarCheck',
    features: ['Online Booking', 'Automated Reminders', 'Availability Management', 'Booking Calendar'],
  },
  {
    id: 'erp-systems',
    title: 'ERP & Management Systems',
    description:
      'Digitize internal business processes such as inventory, employees, customers, billing and operations.',
    icon: 'LayoutDashboard',
    features: ['Inventory Management', 'Employee Management', 'Billing & Invoices', 'Centralized Dashboard'],
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description:
      'Automate repetitive tasks and improve business efficiency.',
    icon: 'Workflow',
    features: ['Workflow Automation', 'Notifications', 'Reports', 'Data Management'],
  },
  {
    id: 'custom-applications',
    title: 'Custom Web Applications',
    description:
      'Build software specifically around the customer\u2019s workflow.',
    icon: 'Code2',
    features: ['Custom Workflows', 'Role-Based Access', 'API Integrations', 'Scalable Architecture'],
  },
  {
    id: 'hosting-maintenance',
    title: 'Hosting & Maintenance',
    description:
      'Deployment, hosting, updates, maintenance and technical support.',
    icon: 'ServerCog',
    features: ['Reliable Hosting', 'SSL & Security', 'Regular Updates', 'Technical Support'],
  },
];

export const trustIndicators = [
  { label: 'Affordable Solutions', icon: 'Wallet' },
  { label: 'Custom Built', icon: 'Wrench' },
  { label: 'Mobile Responsive', icon: 'Smartphone' },
  { label: 'Business Focused', icon: 'Briefcase' },
  { label: 'Local Support', icon: 'Headphones' },
];

export const problems: ProblemItem[] = [
  {
    problem: 'Manual Appointment Book',
    solution: 'Online Booking System',
    result: 'Easier Customer Management',
    icon: 'CalendarDays',
  },
  {
    problem: 'Manual Inventory',
    solution: 'Inventory Management System',
    result: 'Better Stock Visibility',
    icon: 'Boxes',
  },
  {
    problem: 'No Online Presence',
    solution: 'Professional Website',
    result: 'More Reach & Customer Trust',
    icon: 'Globe',
  },
  {
    problem: 'Scattered WhatsApp Info',
    solution: 'Centralized Dashboard',
    result: 'Organized Business Data',
    icon: 'MessageSquare',
  },
  {
    problem: 'Manual Business Records',
    solution: 'ERP Application',
    result: 'Efficient Operations',
    icon: 'ClipboardList',
  },
  {
    problem: 'Repeated Customer Questions',
    solution: 'Website with FAQs',
    result: 'Less Repetitive Work',
    icon: 'HelpCircle',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We visit or speak with your business and understand your requirements.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Recommend',
    description:
      'We suggest the most suitable digital solution based on your business.',
    icon: 'Lightbulb',
  },
  {
    number: '03',
    title: 'Demonstrate',
    description:
      'We show you a working example of how your website or system could look.',
    icon: 'MonitorPlay',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'We customize and develop the solution for your business.',
    icon: 'Code2',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'We deploy the website/application and make it accessible to your customers/team.',
    icon: 'Rocket',
  },
  {
    number: '06',
    title: 'Support',
    description:
      'We provide maintenance and future improvements when required.',
    icon: 'LifeBuoy',
  },
];

export const whyChoose = [
  {
    title: 'Affordable',
    description:
      'Digital solutions designed for businesses without unnecessary costs.',
    icon: 'Wallet',
  },
  {
    title: 'Customized',
    description:
      'We build according to actual business requirements.',
    icon: 'Wrench',
  },
  {
    title: 'Practical',
    description:
      'We focus on features that genuinely help the business.',
    icon: 'Target',
  },
  {
    title: 'Modern',
    description:
      'Responsive and modern websites that work across devices.',
    icon: 'Smartphone',
  },
  {
    title: 'Scalable',
    description:
      'Start with a simple website and add advanced features later.',
    icon: 'TrendingUp',
  },
  {
    title: 'Personal Support',
    description:
      'Direct communication and support instead of complicated processes.',
    icon: 'Headphones',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter-website',
    name: 'Starter Website',
    price: '\u20B98,000 \u2013 \u20B910,000',
    description: 'For businesses that need a professional online presence.',
    features: [
      'Responsive website',
      'Landing page',
      'Business information',
      'Contact section',
      'WhatsApp integration',
      'Google Maps',
      'Basic gallery',
      'Deployment',
    ],
    cta: 'Get a Custom Quote',
  },
  {
    id: 'business-website',
    name: 'Business Website',
    price: '\u20B910,000+',
    description: 'For businesses requiring more pages and features.',
    features: [
      'Multiple pages',
      'Products/services',
      'Gallery',
      'Enquiry forms',
      'WhatsApp',
      'SEO basics',
      'Custom sections',
    ],
    featured: true,
    cta: 'Get a Custom Quote',
  },
  {
    id: 'booking-website',
    name: 'Booking / Appointment Website',
    price: '\u20B912,000+',
    description: 'Suitable for Hotels, Salons, Gyms, Advocates, Hospitals, Restaurants.',
    features: [
      'Online booking system',
      'Appointment management',
      'Availability calendar',
      'Automated notifications',
      'Booking confirmations',
      'Admin dashboard',
      'Mobile responsive',
    ],
    cta: 'Get a Custom Quote',
  },
  {
    id: 'erp-automation',
    name: 'ERP / Business Automation',
    price: 'Custom Pricing',
    description: 'For inventory, employees, customers, billing, dashboards and custom workflows.',
    features: [
      'Inventory management',
      'Employee management',
      'Customer management',
      'Billing & invoices',
      'Hospital management',
      'Stock management',
      'Dashboards',
      'Custom workflows',
    ],
    cta: 'Get a Custom Quote',
  },
];

export const teamMembers: TeamMember[] = [
 
  {
    name: 'Vedant Giri',
    role: 'CEO & Solutions Architect',
    description:
      'Works directly with business owners to understand requirements and design the right digital solution.',
    initials: 'CF',
    image: 'team/vedant.jpeg',
    linkedin: 'https://www.linkedin.com/in/vedant-giri-5655433b4/',
    instagram: 'https://www.instagram.com/vedant_giri_99/',
  },
  {
    name: 'Parth Bhosale',
    role: 'CTO & Lead Developer',
    description:
      'Leads development and architecture for websites, ERP systems and custom applications.',
    initials: 'CF',
    image: 'team/parth.png',
    linkedin: 'https://www.linkedin.com/in/parth-bhosale-95027632a/',
    instagram: 'https://www.instagram.com/itz_parthbhosale007/',

  },
  
  {
    name: 'Omkar Deshmukh',
    role: 'CFO & Business Strategist',
    description:
      'Focuses on business growth, client relationships and making technology accessible to local businesses.',
    initials: 'CF',
    image: 'team/omkar.jpeg',
    linkedin: 'https://www.linkedin.com/in/omkar-deshmukh-86b078386/',
    instagram: 'https://www.instagram.com/i_omkar_1528/',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'How much does a website cost?',
    answer:
      'Our basic websites start around \u20B98,000\u2013\u20B910,000. Final pricing depends on features and requirements.',
  },
  {
    question: 'Can you customize the website according to my business?',
    answer:
      'Yes. Every website can be customized according to your business, branding, images, services and requirements.',
  },
  {
    question: 'Can you build ERP software?',
    answer:
      'Yes. We develop customized ERP and business-management applications.',
  },
  {
    question: 'Can I start with a simple website and add features later?',
    answer:
      'Yes. Our solutions are designed to be scalable.',
  },
  {
    question: 'Do you provide hosting?',
    answer:
      'Yes. Hosting and deployment options are available.',
  },
  {
    question: 'Can you add online booking?',
    answer:
      'Yes. Appointment, table, room and other booking systems can be developed.',
  },
  {
    question: 'Do you provide maintenance?',
    answer:
      'Yes. Maintenance and future improvements can be provided according to the requirement.',
  },
];

export const budgetOptions = [
  'Under \u20B910,000',
  '\u20B910,000\u2013\u20B925,000',
  '\u20B925,000\u2013\u20B950,000',
  '\u20B950,000+',
  'Not Sure',
];

export const businessCategories = [
  'Website',
  'Booking System',
  'ERP',
  'Business Automation',
  'Custom Application',
  'Other',
];
