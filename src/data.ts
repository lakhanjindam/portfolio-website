import {
  Database,
  Cloud,
  Code,
  GitBranch,
  Network,
  Server,
  Shield,
  Terminal,
  Lock,
  LucideIcon
} from 'lucide-react';

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


  interface Certification {
    id: number
    title: string
    issuer: string
    date: string
    skills: string[]
  }
  
const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Udacity",
    date: "2023",
    skills: ["React", "Node.js", "Express", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    issuer: "Coursera",
    date: "2022",
    skills: ["Python", "TensorFlow", "Scikit-learn"]
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2021",
    skills: ["AWS", "Cloud Architecture", "Security"]
  }
]


const skillsData = [
  {
    icon: Database,
    title: 'Databases & Storage',
    skills: [
      { name: 'PostgreSQL', level: 90, rating: 5 },
      { name: 'MongoDB', level: 85, rating: 4 },
      { name: 'Redis', level: 80, rating: 3 },
      { name: 'Elasticsearch', level: 75, rating: 2 },
    ],
  },
  {
    icon: Code,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 95, rating: 5 },
      { name: 'Python', level: 85, rating: 4 },
      { name: 'Java Spring Boot', level: 80, rating: 3 },
      { name: 'GraphQL', level: 75, rating: 2 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 85, rating: 4 },
      { name: 'Docker', level: 90, rating: 5 },
      { name: 'Kubernetes', level: 80, rating: 3 },
      { name: 'Terraform', level: 75, rating: 2 },
    ],
  },
  {
    icon: Network,
    title: 'System Architecture',
    skills: [
      { name: 'Microservices', level: 90, rating: 5 },
      { name: 'Event-Driven Design', level: 85, rating: 4 },
      { name: 'API Design', level: 90, rating: 5 },
      { name: 'Distributed Systems', level: 80, rating: 3 },
    ],
  },
  {
    icon: Shield,
    title: 'Security & Performance',
    skills: [
      { name: 'OAuth/JWT', level: 85, rating: 4 },
      { name: 'System Hardening', level: 80, rating: 3 },
      { name: 'Performance Tuning', level: 85, rating: 4 },
      { name: 'Load Testing', level: 80, rating: 3 },
    ],
  },
  {
    icon: GitBranch,
    title: 'Tools & Practices',
    skills: [
      { name: 'CI/CD', level: 90, rating: 5 },
      { name: 'Git Flow', level: 95, rating: 5 },
      { name: 'Agile/Scrum', level: 85, rating: 4 },
      { name: 'TDD', level: 80, rating: 3 },
    ],
  },
];
// Export the data
export { experiences, projects, skills, currentCompany, heroSectionDescription, heroSectionSkills, certifications, skillsData};