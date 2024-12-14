import {
  Database,
  Cloud,
  Wrench,
  GitBranch,
  Network,
  Server,
  Shield,
  Terminal,
  Lock,
  LucideIcon
} from 'lucide-react';
import { SkillCategory } from './types';

// Interfaces for experience
interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
}

// Interfaces for projects
interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
}

// Interfaces for skills
interface Skill {
    icon: LucideIcon;
    name: string;
    description: string;
}

const currentCompany = 'Twilio';

const heroSectionDescription = `Specialized in building scalable microservices and distributed systems. 
                Currently working on cloud-native applications at`

// Sample data
const experiences: Experience[] = [
    {
        duration: 'May 2022 - Present',
        title: 'Senior Software Engineer',
        company: 'Twilio',
        description: `Building and developing cloud-native applications using Golang for Kuberenetes Ecosystem.`,
      },
      {
        duration: 'Aug 2020 - Apr 2022',
        title: 'Software Engineer',
        company: 'BrowserStack',
        description: `Developed asynchronous RESTful APIs for remote mac mini machines, enabling efficient cleanup, allocation, and deallocation of staging devices.
                      Created a comprehensive deployment pipeline for Mac & Windows machines, leveraging Bash scripting,Ruby, and Jenkins, resulting in a significant time reduction from 1-2 hours to just 30 minutes`,
      },
];


const projects: Project[] = [
    {
        title: 'Scalable Microservices Architecture',
        description: 'Designed and implemented a high-performance microservices system handling 1M+ daily requests',
        tech: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
        github: '#',
        live: '#'
      },
      {
        title: 'Real-time Data Processing Pipeline',
        description: 'Built a robust data pipeline processing 500GB+ daily with fault tolerance and monitoring',
        tech: ['Python', 'Apache Kafka', 'ELK Stack', 'AWS'],
        github: '#',
        live: '#'
      },
      {
        title: 'Authentication Service',
        description: 'Developed a secure authentication system with OAuth2.0 and JWT implementation',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
        github: '#',
        live: '#'
      }
];

const skills: Skill[] = [
    { 
        icon: Database, 
        name: 'Database Design', 
        description: 'PostgreSQL, MongoDB, Redis, MySQL',
    },
    { 
        icon: Server, 
        name: 'Backend Development', 
        description: 'Golang, Python, Ruby, Node.js',
    },
    { 
        icon: Cloud, 
        name: 'Cloud Services', 
        description: 'AWS, Docker, Kubernetes',
    },
    { 
        icon: Lock, 
        name: 'Security', 
        description: 'OAuth, JWT, Encryption',
    },
    { 
        icon: GitBranch, 
        name: 'Version Control', 
        description: 'Git, CI/CD, DevOps, GitHub',
    },
    { 
        icon: Terminal, 
        name: 'System Design', 
        description: 'Microservices, API Design, Distributed Systems',
    },
];

const heroSectionSkills = [
    { color: 'emerald-400', name: 'Microservices Architecture' },
    { color: 'blue-400', name: 'Cloud Infrastructure' },
    { color: 'purple-400', name: 'System Design' },
  ];


const skillsData: SkillCategory[] = [
  {
      icon: Database,
      title: 'Databases & Storage',
      skills: [
      { name: 'PostgreSQL', grade: 'A' },
      { name: 'MongoDB', grade: 'A' },
      { name: 'Redis', grade: 'B' },
      { name: 'Elasticsearch', grade: 'B' },
      ],
  },
  {
      icon: Server,
      title: 'Backend Development',
      skills: [
      { name: 'Node.js', grade: 'A' },
      { name: 'Python', grade: 'A' },
      { name: 'Java Spring Boot', grade: 'B' },
      { name: 'GraphQL', grade: 'B' },
      ],
  },
  {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
      { name: 'AWS', grade: 'A' },
      { name: 'Docker', grade: 'A' },
      { name: 'Kubernetes', grade: 'B' },
      { name: 'Terraform', grade: 'B' },
      ],
  },
  {
      icon: Network,
      title: 'System Architecture',
      skills: [
      { name: 'Microservices', grade: 'A' },
      { name: 'Event-Driven Design', grade: 'A' },
      { name: 'API Design', grade: 'A' },
      { name: 'Distributed Systems', grade: 'B' },
      ],
  },
  {
      icon: Shield,
      title: 'Security & Performance',
      skills: [
      { name: 'OAuth/JWT', grade: 'A' },
      { name: 'System Hardening', grade: 'D' },
      { name: 'Performance Tuning', grade: 'A' },
      { name: 'Load Testing', grade: 'B' },
      ],
  },
  {
      icon: Wrench, // Changed from Tool to Wrench
      title: 'Tools & Practices',
      skills: [
      { name: 'CI/CD', grade: 'A' },
      { name: 'Git Flow', grade: 'A' },
      { name: 'Agile/Scrum', grade: 'A' },
      { name: 'TDD', grade: 'B' },
      ],
  },
  ];

const certifications = [
  {
    id: 'aws-sa',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: '2023-06',
    expiryDate: '2026-06',
    credentialId: 'AWS-SA-12345',
    credentialUrl: 'https://www.credly.com/badges/aws-sa',
    logo: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=200&h=200',
    featured: true
  },
  {
    id: 'k8s-cka',
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    issueDate: '2023-03',
    expiryDate: '2026-03',
    credentialId: 'CKA-12345',
    credentialUrl: 'https://www.credly.com/badges/cka',
    logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=200&h=200',
    featured: true
  },
  {
    id: 'azure-dev',
    name: 'Microsoft Azure Developer Associate',
    issuer: 'Microsoft',
    issueDate: '2023-01',
    expiryDate: '2025-01',
    credentialId: 'AZURE-12345',
    credentialUrl: 'https://www.credly.com/badges/azure-dev',
    logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=200&h=200'
  }
];
// Export the data
export { experiences, projects, skills, currentCompany, heroSectionDescription, heroSectionSkills, certifications, skillsData};