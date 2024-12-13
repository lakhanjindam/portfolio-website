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
        duration: 'May 2022 - Present',
        title: 'Senior SoftwareEngineer',
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
  ]

// Export the data
export { experiences, projects, skills, currentCompany, heroSectionDescription, heroSectionSkills };