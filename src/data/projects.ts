import { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    id: 'enterprise-drupal-platform',
    title: 'Enterprise Drupal 10/11 Architecture Platform',
    category: 'Drupal',
    domain: 'Enterprise CMS',
    description:
      'Custom enterprise content and workflow platform featuring modular architecture, multi-level Webform submission handlers, and granular RBAC governance.',
    longDescription:
      'Engineered an enterprise-grade digital portal powered by Drupal (updated across versions 9, 10, and 11). Built custom Drupal modules to manage complex organizational workflows, role-specific content staging, and audit logging. Integrated dynamic Webform elements with conditional routing, approval loops, and automated notification triggers.',
    technologies: ['Drupal 10/11', 'PHP 8.x', 'Twig', 'MySQL', 'Webforms API', 'REST API', 'Git'],
    featured: true,
    metrics: '99.9% Uptime • 50+ Custom Webform Handlers',
  },
  {
    id: 'crm-sync-integration',
    title: 'Enterprise CRM & Bi-Directional API Integration Hub',
    category: 'API / Integration',
    domain: 'Integrations',
    description:
      'Unified data synchronization pipeline connecting Drupal & Laravel web applications with HubSpot, Sugar CRM, TrueNorth, and Microsoft Service APIs.',
    longDescription:
      'Designed and deployed high-throughput API middleware to ingest, map, and synchronize customer data between web applications and CRM systems. Handled webhook failures gracefully with queue-based retry workers, rate-limit throttlers, and encrypted payload storage.',
    technologies: ['REST APIs', 'HubSpot API', 'Sugar CRM', 'TrueNorth API', 'Laravel', 'PHP', 'MySQL', 'Webhooks'],
    featured: true,
    metrics: 'Real-time sync • Zero data loss fault-tolerant queue',
  },
  {
    id: 'ecommerce-payment-gateway',
    title: 'Multi-Gateway Payment & Invoicing Engine',
    category: 'Full-Stack',
    domain: 'E-Commerce',
    description:
      'PCI-compliant checkout pipeline integrating Stripe and PayPal with asynchronous webhook verification, automatic invoice generation, and refunds.',
    longDescription:
      'Architected end-to-end checkout and billing system supporting one-time payments, recurring subscriptions, and dynamic tax calculation. Implemented backend webhook signatures verification to prevent replay attacks and ensure instantaneous database status updates.',
    technologies: ['PHP', 'Laravel', 'Stripe API', 'PayPal SDK', 'MySQL', 'React', 'PDF Export'],
    featured: true,
    metrics: 'Sub-second webhook response • 100% Reconciliation accuracy',
  },
  {
    id: 'booking-reservation-engine',
    title: 'Real-Time Travel & Activity Reservation Engine',
    category: 'Full-Stack',
    domain: 'Booking',
    description:
      'Comprehensive reservation system connecting external hotel and tour activity booking engines via real-time XML and JSON feeds.',
    longDescription:
      'Engineered a high-concurrency booking platform with live room availability queries, dynamic pricing calculators, Google Maps location visualizers, and instant booking confirmation dispatch via SMS and transactional email.',
    technologies: ['PHP', 'MySQL', 'MongoDB', 'REST / XML APIs', 'Google Maps API', 'JavaScript', 'AJAX'],
    featured: true,
    metrics: 'Live inventory sync • Multi-vendor aggregation',
  },
  {
    id: 'healthcare-patient-portal',
    title: 'Secure Healthcare & Patient Onboarding Portal',
    category: 'Backend / Security',
    domain: 'Healthcare',
    description:
      'Security-centric patient intake system with multi-step health questionnaires, encrypted record storage, and physician notification workflows.',
    longDescription:
      'Developed a secure healthcare web application emphasizing data privacy, CSRF guardrails, and role-based doctor/patient access levels. Included automated appointment scheduling and downloadable PDF medical summaries.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Data Encryption', 'RBAC', 'HTML5/CSS3', 'PDF Engine'],
    featured: false,
    metrics: 'Zero security incidents • End-to-end validation',
  },
  {
    id: 'data-processing-reporting',
    title: 'High-Volume Data Migration & Automated Reporting Suite',
    category: 'Database / Tools',
    domain: 'Finance',
    description:
      'Batch processing engine capable of ingesting large CSV/Excel datasets, validating records, optimizing database writes, and generating executive reports.',
    longDescription:
      'Built automated cron-scheduled data migration pipelines with memory-efficient streaming readers. Capable of parsing hundreds of thousands of records, generating formatted Excel/PDF financial summaries, and emailing reports to stakeholders.',
    technologies: ['PHP', 'MySQL Indexing', 'Cron Automation', 'CSV/Excel Parsers', 'FPDF/TCPDF', 'Bash'],
    featured: false,
    metrics: '10x Faster query execution • Stream-based memory efficiency',
  },
];
