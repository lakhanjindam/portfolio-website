import {
  Database,
  Cloud,
  Wrench,
  Code,
  User,
  Briefcase,
  Mail,
  Star,
  Medal,
  Search,
  GitBranchIcon,
  Globe,
} from 'lucide-react';
import { Certification, SkillCategory, NavItem, Experience, Project } from './types';

const currentCompany = 'Twilio';

const heroSectionDescription = `My curiosity always drives me to tinker with computers and technology hence enabling me to pursue software engineering.`

// Sample data
const experiences: Experience[] = [
    {
        duration: 'May 2022 - Present',
        title: 'Senior Software Engineer',
        company: 'Twilio',
        description: `Building and developing cloud-native applications using Golang in Kuberenetes Ecosystem.`,
        companyURL: 'https://www.twilio.com/'
      },
      {
        duration: 'Aug 2020 - Apr 2022',
        title: 'Software Engineer',
        company: 'BrowserStack',
        description: `Built, developed and managed Speedlab application and infrastructure.`,
        companyURL: 'https://www.browserstack.com/'
      },
];

// NOTE: not used currently
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

const heroSectionSkills = [
    { color: 'emerald-400', name: 'Microservices Architecture' },
    { color: 'blue-400', name: 'Cloud Infrastructure' },
    { color: 'purple-400', name: 'System Design' },
  ];


const skillsData: SkillCategory[] = [
  {
      icon: Code,
      title: 'Programming Languages',
      skills: [
      { name: 'Golang', grade: 'A' },
      { name: 'Python', grade: 'A' },
      { name: 'Shell Scripting', grade: 'A' },
      { name: 'Ruby', grade: 'B' },
      { name: 'Javascript', grade: 'B' },
      ],
  },
  {
      icon: Database,
      title: 'Databases',
      skills: [
      { name: 'PostgreSQL', grade: 'A' },
      { name: 'MySQL', grade: 'A' },
      { name: 'MongoDB', grade: 'B' },
      { name: 'Redis', grade: 'B' },
      ],
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    skills: [
      { name: 'RESTful APIs', grade: 'A' },
      { name: 'ReactJS', grade: 'B' },
      { name: 'NodeJS', grade: 'B' },
      { name: 'NextJS', grade: 'B' },
      { name: 'HTML/CSS', grade: 'C' },
      { name: 'ExpressJS', grade: 'B' },
    ],
  },
  {
      icon: Cloud,
      title: 'Cloud & Infra',
      skills: [
        { name: 'Docker', grade: 'A' },
        { name: 'Kubernetes', grade: 'A' },
        { name: 'ArgoCD', grade: 'A' },
        { name: 'AWS', grade: 'B' },
      { name: 'Terraform', grade: 'B' },
      { name: 'Helm', grade: 'B' },
      ],
  },
  {
      icon: Search,
      title: 'Observability & Incident Management',
      skills: [
      { name: 'Datadog', grade: 'A' },
      { name: 'Prometheus', grade: 'B' },
      { name: 'Grafana', grade: 'B' },
      { name: 'PagerDuty', grade: 'B' },
      { name: 'FireHydrant', grade: 'B' },
      ],
  },
  {
      icon: GitBranchIcon,
      title: 'CI/CD & Version Control',
      skills: [
      { name: 'Git', grade: 'A' },
      { name: 'Github', grade: 'A' },
      { name: 'Buildkite', grade: 'A' },
      { name: 'Jenkins', grade: 'B' },
      { name: 'Github Actions', grade: 'C' },

      ],
  },
  {
      icon: Wrench,
      title: 'Tools & Practices',
      skills: [
      { name: 'Slack', grade: 'A' },
      { name: 'GitOps', grade: 'A' },
      { name: 'Temporal.io', grade: 'A' },
      { name: 'Agile', grade: 'A' },
      { name: 'Kanban', grade: 'A' },
      { name: 'Test Driven Development', grade: 'A' },
      { name: 'Behavior Driven Development', grade: 'B' },
      ],
  },
  ];

const certifications: Certification[] = [
  {
    id: 'k8s-cka',
    name: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    description: 'Earners of this designation have proven proficiency in managing Kubernetes clusters, including application lifecycle, installation, configuration, networking, scheduling, security, maintenance, monitoring, storage, and troubleshooting.',
    issueDate: '2024-08',
    expiryDate: '2027-08',  
    credentialId: 'LF-u23yc6zyq5',
    credentialUrl: 'https://www.credly.com/badges/552a217c-f1eb-4878-8675-0ccd4dbf4b97/public_url',
    logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=200&h=200',
    featured: true,
    iconColor: '#326CE5',
    skills: ['Kubernetes', 'Containers', 'Pods', 'Deployment', 'Services', 'Network', 'Storage', 'Security', 'Monitoring', 'Configuration', 'Ingress', 'Helm', 'Troubleshooting', 'SRE', 'Sys admin', ]
  },
  {
    id: 'k8s-ckad',
    name: 'Certified Kubernetes Application Developer',
    issuer: 'CNCF',
    description: 'Earners of this designation have proven expertise in developing, deploying, and managing scalable applications on Kubernetes, including core concepts, configuration, pod design, observability, networking, and state persistence.',
    issueDate: '2023-03',
    expiryDate: '2026-03',
    credentialId: 'LF-vbodhngh33',
    credentialUrl: 'https://www.credly.com/badges/a0899223-376a-4628-ae47-e62d946f72b7/public_url',
    logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=200&h=200',
    featured: true,
    iconColor: '#326CE5',
    skills: ['Kubernetes', 'Containers', 'Orchestration', 'Cloud-native apps', 'Volumes', 'Secrets', 'ConfigMaps', 'Pods', 'Services']
  },
  {
    id: 'terraform-assoc',
    name: 'Hashicorp Certified: Terraform Associate',
    description: 'Earners of the HashiCorp Certified: Terraform Associate certification demonstrate foundational knowledge of Terraform, its use cases, and its application in both open-source and enterprise environments to address business-critical objectives.',
    issuer: 'HashiCorp',
    issueDate: '2023-05',
    expiryDate: '2025-05',
    credentialId: '',
    credentialUrl: 'https://www.credly.com/badges/29b267cc-2f03-4d1b-a71a-f5a9994d6bc2/public_url',
    logo: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=200&h=200',
    featured: false,
    iconColor: '#7A00E6',
    skills: ['Terraform', 'Cloud', 'Infrastructure', 'DevOps', 'IaC', 'Automation', 'Orchestration']
  }
];

const navItems: NavItem[] = [ 
  { name: 'Home', href: '#home', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Star },
  { name: 'Certifications', href: '#certifications', icon: Medal },
  { name: 'Contact', href: '#contact', icon: Mail },
]
// Export the data
export { experiences, projects, currentCompany, heroSectionDescription, heroSectionSkills, certifications, skillsData, navItems};