import { Database, Server, Cloud, Lock, GitBranch, Terminal, LucideIcon } from 'lucide-react';

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
        duration: '2023 - Present',
        title: 'Senior Backend Engineer',
        company: 'TechCorp',
        description: 'Leading the development of microservices architecture and implementing cloud-native solutions.',
      },
      {
        duration: '2021 - 2023',
        title: 'Backend Engineer',
        company: 'InnovateTech',
        description: 'Developed and maintained scalable APIs serving millions of requests daily.',
      },
      {
        duration: '2019 - 2021',
        title: 'Software Developer',
        company: 'StartupX',
        description: 'Built and deployed full-stack applications using modern technologies.',
      },
      {
        duration: '2018 - 2019',
        title: 'Junior Developer',
        company: 'CodeCraft',
        description: 'Contributed to various web development projects and learned industry best practices.',
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
        description: 'PostgreSQL, MongoDB, Redis',
    },
    { 
        icon: Server, 
        name: 'Backend Development', 
        description: 'Node.js, Python, Java',
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
        description: 'Git, CI/CD, DevOps',
    },
    { 
        icon: Terminal, 
        name: 'System Design', 
        description: 'Microservices, API Design',
    },
];

const heroSectionSkills = [
    { color: 'emerald-400', name: 'Microservices Architecture' },
    { color: 'blue-400', name: 'Cloud Infrastructure' },
    { color: 'purple-400', name: 'System Design' },
  ]

// Export the data
export { experiences, projects, skills, currentCompany, heroSectionDescription, heroSectionSkills };