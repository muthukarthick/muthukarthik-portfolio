import { ArchitectureNode } from '../types';

export const architectureLayers: ArchitectureNode[] = [
  {
    id: 'client-layer',
    layer: 'Layer 01',
    title: 'Client & Experience Layer',
    subtitle: 'Responsive UI / SPAs / Modern Frontends',
    description:
      'Engineered with React, TypeScript, and modern component systems for blazing-fast interactivity, mobile responsiveness, and accessible UX.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Blade / Twig'],
    icon: 'Monitor',
  },
  {
    id: 'api-layer',
    layer: 'Layer 02',
    title: 'API & Gateway Layer',
    subtitle: 'RESTful Endpoints / Webhooks / Contracts',
    description:
      'Strict API-first contract design with token authentication (JWT/OAuth), rate limiting, payload validation, and CORS security.',
    technologies: ['REST APIs', 'JSON / XML', 'Webhooks', 'API Rate Limiting', 'CORS & CSRF Guard'],
    icon: 'Workflow',
  },
  {
    id: 'application-layer',
    layer: 'Layer 03',
    title: 'Application & Business Logic',
    subtitle: 'Laravel / Drupal 8-11 / WordPress / Node.js',
    description:
      'Domain-driven design, SOLID principles, repository patterns, custom Drupal modules/Webforms, and event-driven background queues.',
    technologies: ['PHP 8.x', 'Drupal 10/11 Modules', 'Laravel MVC', 'Service Layers', 'Queue Workers'],
    icon: 'Cpu',
  },
  {
    id: 'data-layer',
    layer: 'Layer 04',
    title: 'Persistence & Data Layer',
    subtitle: 'MySQL / MongoDB / Index Optimization',
    description:
      'Normalized relational schema design, query optimization, composite indexing, transactions, and NoSQL storage for high-speed retrieval.',
    technologies: ['MySQL 8.x', 'MongoDB', 'Query Indexing', 'Data Migrations', 'Transactions'],
    icon: 'Database',
  },
  {
    id: 'integration-layer',
    layer: 'Layer 05',
    title: 'Third-Party Integrations',
    subtitle: 'CRMs / Payment Gateways / Enterprise Services',
    description:
      'Resilient webhook listeners, retry mechanisms, and bi-directional synchronization with enterprise CRM and financial systems.',
    technologies: ['HubSpot CRM', 'Sugar CRM', 'TrueNorth API', 'Microsoft API', 'Stripe & PayPal'],
    icon: 'Layers',
  },
];
