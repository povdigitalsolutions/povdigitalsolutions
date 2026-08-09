export const siteConfig = {
  name: 'POV Digital Solutions',
  tagline: 'We Build, You Grow',
  supportingLine:
    'Affordable Websites, Smart Business Solutions & Custom Automation for Growing Businesses.',
  description:
    'POV Digital Solutions builds affordable websites, booking systems, ERP applications and custom digital solutions that help local businesses grow, manage and automate their operations.',
  url: 'https://povdigitalsolutions.com',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999',
  contactEmail: process.env.CONTACT_EMAIL || 'hello@povdigitalsolutions.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+91 99999 99999',
  location: 'Pune, Maharashtra, India',
  social: {
    instagram: 'https://instagram.com/povdigitalsolutions',
    linkedin: 'https://linkedin.com/company/povdigitalsolutions',
    facebook: 'https://facebook.com/povdigitalsolutions',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Business Showcase', href: '/showcase' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    'Website Development',
    'ERP Solutions',
    'Booking Systems',
    'Business Automation',
    'Custom Applications',
  ],
};

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ||
      'Hello POV Digital Solutions, I am interested in getting a digital solution for my business. I would like to discuss my requirements.'
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
};

export const emailLink = (subject?: string) => {
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${siteConfig.contactEmail}${s}`;
};
