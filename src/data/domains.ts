import { ProjectDomain } from '../types';

export const projectDomains: ProjectDomain[] = [
  {
    id: 'enterprise-cms',
    title: 'Enterprise CMS Platforms',
    icon: 'Building2',
    tagline: 'Configurable enterprise architectures, custom modules, workflows and governance.',
    capabilities: [
      'Custom Drupal 8/9/10/11 module & theme architecture',
      'Advanced Webform engineering & dynamic multi-step submission flows',
      'Enterprise CRM integrations (HubSpot, Sugar CRM, TrueNorth)',
      'Granular Role-Based Access Control (RBAC) & workflow permissions',
      'Executive dashboard reporting & automated data synchronization',
      'Decoupled & Headless CMS architectures',
    ],
    accentColor: 'from-blue-500/20 to-indigo-500/10',
  },
  {
    id: 'ecommerce-booking',
    title: 'E-Commerce & Booking Engines',
    icon: 'ShoppingCart',
    tagline: 'High-availability reservation engines, real-time inventories, and payment pipelines.',
    capabilities: [
      'Real-time hotel & activity booking XML/JSON API integrations',
      'Secure PayPal & Stripe checkout with webhook reconciliation',
      'Dynamic shopping carts, catalog filtering, and multi-tier pricing',
      'User account portals, booking history, and ticket generation',
      'Automated background inventory sync & availability calendars',
      'High-concurrency session security & checkout protection',
    ],
    accentColor: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Patient Portals',
    icon: 'HeartPulse',
    tagline: 'Compliance-ready patient onboarding, confidential health intake, and appointment systems.',
    capabilities: [
      'HIPAA-aware data collection & patient health questionnaires',
      'Prescription & diagnostic order management workflows',
      'Encrypted patient accounts and session lifecycle protection',
      'Automated doctor notifications, alerts, and email confirmation triggers',
      'Strict input sanitization & multi-stage data validation',
      'Audit logging for administrative data modifications',
    ],
    accentColor: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    id: 'finance-rental',
    title: 'Finance & Rental Platforms',
    icon: 'BadgeDollarSign',
    tagline: 'Precision loan calculation engines, asset rental calendars, and enterprise reporting.',
    capabilities: [
      'Interactive financial & loan interest rate calculators',
      'Geolocation & Google Maps store/asset locator integration',
      'Cron-automated recurring billing and scheduled fee calculations',
      'High-speed Excel, CSV, and PDF report generation pipelines',
      'Multi-currency processing and invoice PDF delivery',
      'Business intelligence dashboards with chart visualizers',
    ],
    accentColor: 'from-amber-500/20 to-orange-500/10',
  },
];
