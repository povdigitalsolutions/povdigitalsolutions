import { ShowcaseTemplate } from '@/lib/types';

/**
 * Showcase Template Registry
 *
 * This is the central registry for all industry showcase templates.
 * To add a new template:
 *   1. Create the template website in /public/showcase/<id>/
 *   2. Add a metadata entry below
 *   3. The API and Business Showcase page will automatically pick it up
 *
 * No frontend code changes are needed when adding a template.
 *
 * Future planned categories:
 * - hospital, furniture, advocate, car-accessories, bakery,
 *   clothing, gym, salon, hotel
 *
 * Templates are marked "coming-soon" until the actual demo website
 * is built and uploaded. The Business Showcase page handles this
 * state gracefully.
 */

export const showcaseTemplates: ShowcaseTemplate[] = [
  {
    id: 'hospital',
    name: 'Hospital',
    category: 'Healthcare',
    description:
      'A professional website for hospitals and clinics with departments, doctors, services and appointment booking.',
    thumbnail: '/showcase/hospital/thumbnail.jpg',
    url: '/showcase/hospital/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['healthcare', 'appointment booking', 'doctors'],
    features: [
      'Hospital introduction',
      'Doctors & departments',
      'Services & facilities',
      'Emergency contact',
      'Appointment booking',
      'Location & WhatsApp',
    ],
  },
  {
    id: 'furniture',
    name: 'Furniture',
    category: 'Furniture & Interior',
    description:
      'A premium product showcase website for furniture stores and interior businesses.',
    thumbnail: '/showcase/furniture/thumbnail.jpg',
    url: '/showcase/furniture/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['furniture', 'product showcase', 'gallery'],
    features: [
      'Product catalog',
      'Furniture categories',
      'Interior project gallery',
      'Custom furniture enquiry',
      'WhatsApp integration',
      'Contact & location',
    ],
  },
  {
    id: 'advocate',
    name: 'Advocate',
    category: 'Legal Services',
    description:
      'A professional website for advocates with practice areas, experience and consultation requests.',
    thumbnail: '/showcase/advocate/thumbnail.jpg',
    url: '/showcase/advocate/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['legal', 'consultation', 'professional'],
    features: [
      'Advocate profile',
      'Practice areas',
      'Experience & credentials',
      'Consultation request',
      'Fees information',
      'Contact',
    ],
  },
  {
    id: 'car-accessories',
    name: 'Car Accessories',
    category: 'Automotive',
    description:
      'A dynamic website for car accessory shops with products, services and project galleries.',
    thumbnail: '/showcase/car-accessories/thumbnail.jpg',
    url: '/showcase/car-accessories/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['automotive', 'accessories', 'gallery'],
    features: [
      'Accessories catalog',
      'Services',
      'Modified cars gallery',
      'Before/after showcase',
      'Enquiry & WhatsApp',
      'Location',
    ],
  },
  {
    id: 'bakery',
    name: 'Bakery',
    category: 'Food & Bakery',
    description:
      'A delightful website for bakeries with cake galleries, custom orders and location.',
    thumbnail: '/showcase/bakery/thumbnail.jpg',
    url: '/showcase/bakery/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['bakery', 'cakes', 'food'],
    features: [
      'Cake gallery',
      'Product menu',
      'Custom cake orders',
      'Order enquiry',
      'WhatsApp & location',
    ],
  },
  {
    id: 'clothing',
    name: 'Clothing',
    category: 'Fashion & Retail',
    description:
      'A stylish website for clothing stores with collections, new arrivals and offers.',
    thumbnail: '/showcase/clothing/thumbnail.jpg',
    url: '/showcase/clothing/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['fashion', 'clothing', 'retail'],
    features: [
      'Collections',
      "Men's, Women's, Kids",
      'New arrivals',
      'Gallery & offers',
      'Contact & WhatsApp',
    ],
  },
  {
    id: 'gym',
    name: 'Gym',
    category: 'Fitness & Wellness',
    description:
      'An energetic website for gyms with trainers, facilities, membership plans and trial booking.',
    thumbnail: '/showcase/gym/thumbnail.jpg',
    url: '/showcase/gym/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['fitness', 'gym', 'membership'],
    features: [
      'Gym introduction',
      'Trainers & facilities',
      'Membership plans',
      'Transformation gallery',
      'Timetable & trial booking',
      'Contact',
    ],
  },
  {
    id: 'salon',
    name: 'Salon & Makeup Studio',
    category: 'Beauty & Salon',
    description:
      'An elegant website for salons and makeup studios with services, packages and appointment booking.',
    thumbnail: '/showcase/salon/thumbnail.jpg',
    url: '/showcase/salon/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['salon', 'beauty', 'makeup', 'booking'],
    features: [
      'Services & pricing',
      'Packages',
      'Stylists',
      'Gallery',
      'Appointment booking',
      'WhatsApp & contact',
    ],
  },
  {
    id: 'hotel',
    name: 'Hotel / Lodge',
    category: 'Hospitality',
    description:
      'A premium website for hotels and lodges with rooms, amenities, pricing and room booking.',
    thumbnail: '/showcase/hotel/thumbnail.jpg',
    url: '/showcase/hotel/',
    status: 'coming-soon',
    version: '1.0',
    tags: ['hotel', 'lodge', 'booking', 'hospitality'],
    features: [
      'Rooms & details',
      'Gallery & amenities',
      'Pricing',
      'Room availability & booking',
      'Table booking',
      'Contact & location',
    ],
  },
];
