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
  LucideIcon,
  Code
} from 'lucide-react';
import { Certification, SkillCategory } from './types';

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
      { name: 'MySQL', grade: 'A' },
      { name: 'MongoDB', grade: 'B' },
      { name: 'Redis', grade: 'B' },
      ],
  },
  {
      icon: Code,
      title: 'Backend Development',
      skills: [
      { name: 'Golang', grade: 'A' },
      { name: 'Python', grade: 'A' },
      {name: 'Ruby', grade: 'B' },
      { name: 'Javascript', grade: 'B' },
      ],
  },
  {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
      { name: 'AWS', grade: 'B' },
      { name: 'Docker', grade: 'A' },
      { name: 'Kubernetes', grade: 'A' },
      { name: 'Terraform', grade: 'A' },
      ],
  },
  {
      icon: Network,
      title: 'System Architecture',
      skills: [
      { name: 'Microservices', grade: 'B' },
      { name: 'Event-Driven Design', grade: 'B' },
      { name: 'API Design', grade: 'A' },
      { name: 'Distributed Systems', grade: 'A' },
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
      {name: 'Git', grade: 'A' },
      {name: 'GitOps', grade: 'A' },
      { name: 'Git Flow', grade: 'A' },
      { name: 'Agile/Scrum/Kanban', grade: 'A' },
      { name: 'TDD', grade: 'B' },
      {name: 'Temporal.io', grade: 'A' },
      ],
  },
  ];

const certifications: Certification[] = [
  {
    id: 'k8s-cka',
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    issueDate: '2024-08',
    expiryDate: '2027-08',
    credentialId: 'LF-u23yc6zyq5',
    credentialUrl: 'https://www.credly.com/badges/552a217c-f1eb-4878-8675-0ccd4dbf4b97/public_url',
    logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=200&h=200',
    featured: true,
    iconColor: '#326CE5',
  },
  {
    id: 'k8s-ckad',
    name: 'Certified Kubernetes Application Developer',
    issuer: 'Cloud Native Computing Foundation',
    issueDate: '2023-03',
    expiryDate: '2026-03',
    credentialId: 'LF-vbodhngh33',
    credentialUrl: 'https://www.credly.com/badges/a0899223-376a-4628-ae47-e62d946f72b7/public_url',
    logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=200&h=200',
    featured: true,
    iconColor: '#326CE5',
  },
  {
    id: 'terraform-assoc',
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    issueDate: '2023-05',
    expiryDate: '2025-05',
    credentialId: '',
    credentialUrl: 'https://www.credly.com/badges/29b267cc-2f03-4d1b-a71a-f5a9994d6bc2/public_url',
    logo: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=200&h=200',
    featured: false,
    iconColor: '#7A00E6',
  }
];
// Export the data
export { experiences, projects, skills, currentCompany, heroSectionDescription, heroSectionSkills, certifications, skillsData};