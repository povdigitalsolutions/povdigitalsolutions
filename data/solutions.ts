import { SolutionCategory } from '@/lib/types';

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'websites',
    title: 'Websites',
    icon: 'Globe',
    description:
      'Professional websites designed to help customers discover, understand and trust your business.',
    solutions: [
      {
        title: 'Landing Pages',
        description:
          'Single-page websites focused on converting visitors into customers. Perfect for campaigns, product launches or a quick online presence.',
        benefits: ['Fast to launch', 'Focused messaging', 'Mobile responsive', 'Lead capture ready'],
        useCases: ['New product launch', 'Campaign promotion', 'Quick online presence', 'Lead generation'],
      },
      {
        title: 'Business Websites',
        description:
          'Multi-page websites that present your business professionally with services, about, gallery and contact sections.',
        benefits: ['Professional online presence', 'Multiple pages', 'SEO friendly', 'Customer trust'],
        useCases: ['Service businesses', 'Retail stores', 'Professional services', 'Local businesses'],
      },
      {
        title: 'Portfolio Websites',
        description:
          'Showcase your work, projects and achievements in an organized and visually appealing format.',
        benefits: ['Visual showcase', 'Project gallery', 'Professional presentation', 'Easy to update'],
        useCases: ['Designers', 'Photographers', 'Consultants', 'Creative professionals'],
      },
      {
        title: 'Product Showcase Websites',
        description:
          'Display your products with categories, images, specifications and enquiry options.',
        benefits: ['Product catalog', 'Category organization', 'Enquiry forms', 'WhatsApp integration'],
        useCases: ['Furniture stores', 'Retail shops', 'Manufacturers', 'Distributors'],
      },
    ],
  },
  {
    id: 'customer-interaction',
    title: 'Customer Interaction',
    icon: 'MessageCircle',
    description:
      'Tools that make it easy for customers to reach you, book with you and get their questions answered.',
    solutions: [
      {
        title: 'Appointment Booking',
        description:
          'Let customers book appointments online with real-time availability and automatic confirmations.',
        benefits: ['24/7 booking', 'Reduced phone calls', 'Automated reminders', 'Calendar sync'],
        useCases: ['Salons', 'Clinics', 'Gyms', 'Consultants', 'Advocates'],
      },
      {
        title: 'Table Booking',
        description:
          'Allow customers to reserve tables at your restaurant or cafe online.',
        benefits: ['Real-time availability', 'Automatic confirmation', 'Reduced no-shows', 'Table management'],
        useCases: ['Restaurants', 'Cafes', 'Event venues'],
      },
      {
        title: 'Room Booking',
        description:
          'Enable guests to check room availability and request bookings for your hotel or lodge.',
        benefits: ['Room availability calendar', 'Booking requests', 'Guest management', 'Confirmation workflow'],
        useCases: ['Hotels', 'Lodges', 'Homestays', 'Resorts'],
      },
      {
        title: 'Contact Forms',
        description:
          'Structured enquiry forms that capture the right information from every visitor.',
        benefits: ['Structured leads', 'Spam protection', 'Email notifications', 'Easy to manage'],
        useCases: ['Any business website', 'Service enquiries', 'Product enquiries'],
      },
      {
        title: 'WhatsApp Integration',
        description:
          'Connect your website directly to WhatsApp so customers can message you with one click.',
        benefits: ['One-click chat', 'Pre-filled messages', 'Higher response rate', 'No app needed'],
        useCases: ['Local businesses', 'Retail stores', 'Service providers'],
      },
    ],
  },
  {
    id: 'business-management',
    title: 'Business Management',
    icon: 'LayoutDashboard',
    description:
      'Centralized systems to manage your inventory, employees, customers, billing and operations.',
    solutions: [
      {
        title: 'ERP',
        description:
          'Enterprise Resource Planning systems that bring all your business operations into one platform.',
        benefits: ['Centralized data', 'Process automation', 'Real-time reporting', 'Scalable architecture'],
        useCases: ['Growing businesses', 'Multi-location operations', 'Manufacturing', 'Retail chains'],
      },
      {
        title: 'Inventory Management',
        description:
          'Track stock levels, manage suppliers and get alerts when inventory runs low.',
        benefits: ['Real-time stock visibility', 'Low-stock alerts', 'Supplier management', 'Stock reports'],
        useCases: ['Retail stores', 'Furniture businesses', 'Wholesale', 'Manufacturing'],
      },
      {
        title: 'Employee Management',
        description:
          'Manage employee records, attendance, roles and performance in one place.',
        benefits: ['Attendance tracking', 'Role management', 'Performance records', 'Payroll ready'],
        useCases: ['Gyms', 'Salons', 'Hospitals', 'Hotels', 'Retail'],
      },
      {
        title: 'Customer Management',
        description:
          'Maintain customer profiles, history and communication records for better service.',
        benefits: ['Customer profiles', 'Interaction history', 'Follow-up tracking', 'Better service'],
        useCases: ['Service businesses', 'Salons', 'Clinics', 'Consultants'],
      },
      {
        title: 'Billing',
        description:
          'Generate invoices, track payments and manage financial records efficiently.',
        benefits: ['Invoice generation', 'Payment tracking', 'GST ready', 'Financial reports'],
        useCases: ['Any business with billing', 'Service providers', 'Retail'],
      },
      {
        title: 'Dashboards',
        description:
          'Visual dashboards that give you a clear picture of your business performance at a glance.',
        benefits: ['Real-time insights', 'Visual reports', 'Key metrics', 'Data-driven decisions'],
        useCases: ['Business owners', 'Managers', 'Multi-branch operations'],
      },
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: 'Workflow',
    description:
      'Automate repetitive tasks so your team can focus on growing the business.',
    solutions: [
      {
        title: 'Workflow Automation',
        description:
          'Automate multi-step business processes like order handling, approvals and notifications.',
        benefits: ['Reduced manual work', 'Fewer errors', 'Faster processes', 'Consistent operations'],
        useCases: ['Order processing', 'Approval workflows', 'Onboarding', 'Reporting'],
      },
      {
        title: 'Notifications',
        description:
          'Automated SMS, WhatsApp and email notifications for bookings, orders and reminders.',
        benefits: ['Automated reminders', 'Booking confirmations', 'Order updates', 'Customer engagement'],
        useCases: ['Booking systems', 'Order management', 'Appointment reminders'],
      },
      {
        title: 'Reports',
        description:
          'Automatically generated business reports delivered on schedule.',
        benefits: ['Scheduled reports', 'Custom formats', 'Email delivery', 'Performance tracking'],
        useCases: ['Sales reports', 'Inventory reports', 'Attendance reports'],
      },
      {
        title: 'Data Management',
        description:
          'Centralize, organize and protect your business data with structured management systems.',
        benefits: ['Centralized data', 'Data integrity', 'Secure storage', 'Easy retrieval'],
        useCases: ['Business records', 'Customer data', 'Product catalogs'],
      },
      {
        title: 'Custom Business Automation',
        description:
          'Tell us the repetitive task slowing your business down \u2014 we\u2019ll automate it.',
        benefits: ['Tailored to your workflow', 'Saves time', 'Reduces errors', 'Improves efficiency'],
        useCases: ['Any repetitive business process'],
      },
    ],
  },
];
