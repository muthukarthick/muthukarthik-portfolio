import { EducationItem, CertificationItem } from '../types';

export const educationList: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    level: 'Postgraduate (PG)',
    institution: 'PSNA College of Engineering & Technology',
    location: 'Dindigul, Tamil Nadu, India',
    period: '2011 – 2014',
    percentage: 65.7,
    grade: '65.7%',
    division: 'First Class',
    accentColor: 'from-sky-500 to-blue-600',
    description:
      'Rigorous postgraduate curriculum emphasizing enterprise software architecture, object-oriented system design, advanced relational databases, distributed algorithms, and web engineering.',
    courses: [
      'Enterprise Software Architecture',
      'Advanced Database Management Systems (DBMS)',
      'Object-Oriented Analysis & Design (OOAD)',
      'Distributed Systems & Cloud Principles',
      'Web Technologies & Application Frameworks',
    ],
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    level: 'Undergraduate (UG)',
    institution: 'Theni College of Arts & Science',
    location: 'Theni, Tamil Nadu, India',
    period: '2008 – 2011',
    percentage: 60.2,
    grade: '60.2%',
    division: 'First Class',
    accentColor: 'from-teal-400 to-emerald-500',
    description:
      'Foundational undergraduate degree in computer applications covering core algorithms, data structures, relational database concepts, operating systems, and object-oriented programming in C, C++, and Java.',
    courses: [
      'Data Structures & Algorithms',
      'Relational Database Concepts (RDBMS)',
      'Object-Oriented Programming (C++ & Java)',
      'Operating Systems & Networking Basics',
      'Web Scripting & Computer Mathematics',
    ],
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC - 12th)',
    level: 'Higher Secondary',
    institution: 'Government Higher Secondary School',
    location: 'Theni, Tamil Nadu, India',
    period: '2008',
    percentage: 68.5,
    grade: '68.5%',
    division: 'First Class',
    accentColor: 'from-indigo-500 to-purple-600',
    description:
      'Higher secondary education focusing on Science and Mathematics, laying strong analytical and algorithmic problem-solving fundamentals.',
    courses: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
  },
  {
    id: 'sslc',
    degree: 'Secondary School Leaving Certificate (SSLC - 10th)',
    level: 'Secondary School',
    institution: 'Government Higher Secondary School',
    location: 'Theni, Tamil Nadu, India',
    period: '2006',
    percentage: 65.2,
    grade: '65.2%',
    division: 'First Class',
    accentColor: 'from-amber-500 to-orange-600',
    description:
      'Secondary school certificate providing solid core academic grounding in mathematics, general sciences, and language proficiencies.',
    courses: ['Mathematics', 'Science', 'Social Science', 'English'],
  },
];

export const certificationList: CertificationItem[] = [
  {
    id: 'cert-java-se6',
    title: 'Certificate in Java Programming — Java SE6',
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
