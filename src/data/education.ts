import { EducationItem, CertificationItem } from '../types';

export const educationList: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Application (MCA)',
    institution: 'PSNA College of Engineering and Technology',
    location: 'Dindigul, Tamil Nadu, India',
    period: '2011 – 2014',
    description:
      'Advanced computer applications curriculum focusing on Object-Oriented Software Engineering, Database Management Systems, Distributed Computing, Algorithm Design, and Web Architecture.',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Theni College of Arts and Science',
    location: 'Theni, Tamil Nadu, India',
    period: '2008 – 2011',
    description:
      'Foundational degree in Computer Science, Data Structures, Relational Databases, Operating Systems, and Programming in C, C++, and Java.',
  },
];

export const certificationList: CertificationItem[] = [
  {
    id: 'cert-java-se6',
    title: 'Certificate in Java Programming (Java SE6)',
    issuer: 'Professional IT Certification Board',
    year: 'Certified',
    badgeText: 'Core Java & OOP',
  },
  {
    id: 'cert-pc-pro',
    title: 'Diploma in PC Professional',
    issuer: 'Technical Training Institute',
    year: 'Certified',
    badgeText: 'Systems & Computing',
  },
  {
    id: 'cert-rank-exam',
    title: 'Online Examination Rank Certificate',
    issuer: 'Technical Skills Assessment Platform',
    year: 'Certified',
    badgeText: 'Core Java, PHP & OOP Mastery',
  },
];
