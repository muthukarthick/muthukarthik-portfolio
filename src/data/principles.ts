import { EngineeringPrinciple } from '../types';

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 'api-first',
    title: 'API-First Design',
    subtitle: 'Contract-Driven Communication',
    description:
      'Designing clear, consistent RESTful contracts and schemas before implementation ensures smooth frontend-backend decoupling, independent scalability, and painless third-party integrations.',
    points: [
      'Standardized HTTP status codes & error payload structures',
      'Consistent JSON serialization & strict schema validation',
      'Asynchronous webhook patterns for event-driven reliability',
    ],
    icon: 'Network',
  },
  {
    id: 'modular-architecture',
    title: 'Modular Architecture',
    subtitle: 'High Cohesion, Low Coupling',
    description:
      'Applying SOLID principles, Clean Architecture, and domain separation to ensure modules, custom Drupal extensions, Laravel services, and React components can be tested and upgraded independently.',
    points: [
      'Single Responsibility & Dependency Inversion in service layers',
      'Reusable Drupal modules, Webform handlers, and plugins',
      'Isolated UI components with predictable props and state',
    ],
    icon: 'Boxes',
  },
  {
    id: 'database-engineering',
    title: 'Database Engineering',
    subtitle: 'Schema Integrity & Query Performance',
    description:
      'Treating databases as the core foundation of application speed. Thoughtful indexing, normalization, transaction boundaries, and query profiling prevent latency bottlenecks under load.',
    points: [
      'Composite indexing and EXPLAIN query analysis',
      'Safe ACID transaction management for financial operations',
      'Careful schema migration strategies with zero data loss',
    ],
    icon: 'Database',
  },
  {
    id: 'security-by-design',
    title: 'Security by Design',
    subtitle: 'Zero Trust & Proactive Defense',
    description:
      'Integrating security controls into every layer of software development rather than patching vulnerabilities retroactively.',
    points: [
      'Role-Based Access Control (RBAC) & granular permission scopes',
      'Strict input sanitization, parameterized queries (anti-SQLi), and CSRF tokens',
      'Encrypted payloads, secure token storage, and session lifecycle guards',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    subtitle: 'Lean Execution & Resource Efficiency',
    description:
      'Eliminating compute, memory, and network waste at every level from backend SQL execution to frontend asset delivery.',
    points: [
      'Multi-tiered caching (OPcache, Redis/Memcached, HTTP cache headers)',
      'Asynchronous background queues for heavy I/O operations',
      'Optimized client payloads with code splitting and lazy loading',
    ],
    icon: 'Zap',
  },
  {
    id: 'end-to-end-delivery',
    title: 'End-to-End Delivery & Leadership',
    subtitle: 'From Architecture to Production Support',
    description:
      'Bridging technical strategy with disciplined execution through Agile sprint planning, pragmatic estimation, code reviews, and engineer mentorship.',
    points: [
      'Constructive peer code reviews fostering team growth',
      'Clear technical documentation and architectural blueprints',
      'Proactive production monitoring, error logging, and post-mortems',
    ],
    icon: 'Users',
  },
];
