import React from 'react';
import { profile } from '../../data/profile';

export const JsonLd: React.FC = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.headline,
    email: profile.email,
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [
      'PHP',
      'Laravel',
      'Drupal 8/9/10/11',
      'WordPress',
      'React',
      'TypeScript',
      'REST APIs',
      'MySQL',
      'MongoDB',
      'Application Architecture',
      'Enterprise Software',
      'Payment Integrations',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Poornam Info Vision Pvt Ltd',
    },
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Muthu Karthik — Senior Full-Stack Developer & Technical Lead',
    url: 'https://muthukarthik.dev',
    description:
      'Professional portfolio of Muthu Karthik, Senior Full-Stack Developer & Technical Lead with 10+ years experience in PHP, Laravel, Drupal, React, and Application Architecture.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
};
