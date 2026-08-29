import React from 'react';
import { Layers } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="System Design"
          badgeIcon={<Layers className="w-3.5 h-3.5" />}
          title="How I Think About Software"
          subtitle="A modular, resilient, and contract-driven architecture model scaling from client interfaces down to data persistence and third-party ecosystems."
        />

        <ArchitectureDiagram />
      </Container>
    </section>
  );
};
