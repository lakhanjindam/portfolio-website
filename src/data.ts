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
import { Certification, SkillCategory, NavItem, Experience, Project, LiveStatusItem } from './types';
import { Gamepad2, Tv, BookOpen } from 'lucide-react';

const currentCompany = 'Twilio';

const heroSectionDescription = `My curiosity always drives me to tinker with computers and technology hence enabling me to pursue software engineering.`

// Sample data
const experiences: Experience[] = [
  {
    duration: 'July 2025 - Present',
    title: 'Senior Software Engineer',
    company: 'Talkdesk',
    description: `Currently working as a Senior Software Engineer at Talkdesk.`,
    companyURL: 'https://www.talkdesk.com/'
  },
  {
    duration: 'May 2022 - July 2025',
    title: 'Senior Software Engineer',
    company: 'Twilio',
    description: `Developing cloud-native communication platforms using Golang and Kubernetes, focusing on reliability and scalable solutions.`,
    companyURL: 'https://www.twilio.com/'
  },
  {
    duration: 'Aug 2020 - Apr 2022',
    title: 'Software Engineer',
    company: 'BrowserStack',
    description: `Built, developed and managed Speedlab application and infrastructure.`,
    companyURL: 'https://www.browserstack.com/'
  },
  // {
  //   duration: 'July 2016 - July 2020',
  //   title: 'Graduate Student',
  //   company: 'Xavier Institute of Engineering',
  //   description: `Completed my Bachelor's degree in Information Technology.`,
  //   companyURL: 'https://www.xavier.ac.in/'
  // },
  // {
  //   duration: 'May 2014 - May 2016',
  //   title: 'High School',
  //   company: 'KJ Somaiya College of Science & Commerce',
  //   description: `Completed my high school education in Science and Commerce.`,
  //   companyURL: 'https://kjssc.somaiya.edu.in/en'
  // }
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
    skills: ['Kubernetes', 'Containers', 'Pods', 'Deployment', 'Services', 'Network', 'Storage', 'Security', 'Monitoring', 'Configuration', 'Ingress', 'Helm', 'Troubleshooting', 'SRE', 'Sys admin',]
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

const liveStatus: LiveStatusItem[] = [
  {
    id: "gaming",
    tabLabel: "Gaming",
    title: "Hogwarts Legacy",
    subtitle: "Action RPG",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/library_hero.jpg",
    link: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
    icon: Gamepad2,
    color: "text-emerald-400",
    tags: ["RPG", "Magic", "Adventure"]
  },
  {
    id: "learning",
    tabLabel: "Learning",
    title: "System Design & AI Agents",
    subtitle: "Advanced Concepts",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // placeholder: tech/cyber
    link: "https://github.com/lakhanjindam",
    icon: BookOpen,
    color: "text-blue-400",
    tags: ["Architecture", "Scalability", "LLMs"]
  },
  {
    id: "watching",
    tabLabel: "Watching",
    title: "Sentenced to Be a Hero",
    subtitle: "Anime Series",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2670&auto=format&fit=crop", // Safe placeholder for anime
    link: "https://myanimelist.net/anime/55830/Yuusha_Kei_ni_Shosu_Choubatsu_Yuusha_9004-tai_no_Keimu_Kiroku",
    icon: Tv,
    color: "text-purple-400",
    tags: ["Fantasy", "Action", "Hero"],
    subItems: [
      {
        title: "Sentenced to Be a Hero",
        subtitle: "Anime",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2670&auto=format&fit=crop",
        link: "https://myanimelist.net/anime/56009/Yuusha-kei_ni_Shosu__Choubatsu_Yuusha_9004-tai_Keimu_Kiroku?q=sentenced&cat=anime",
        tags: ["Fantasy", "Action", "Hero"],
        malId: 56009,
        streamingPlatform: {
          name: "Crunchyroll",
          url: "https://www.crunchyroll.com/series/GXJHM3DJP/sentenced-to-be-a-hero"
        }
      },
      {
        title: "Jujutsu Kaisen",
        subtitle: "Anime",
        image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=2670&auto=format&fit=crop",
        link: "https://myanimelist.net/anime/57658/Jujutsu_Kaisen__Shimetsu_Kaiyuu_-_Zenpen?q=jujutsu%20kaisen&cat=anime",
        tags: ["Supernatural", "Action", "Shounen"],
        malId: 57658,
        streamingPlatform: {
          name: "Crunchyroll",
          url: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen"
        }
      }
    ]
  }
];
// Export the data
export { experiences, projects, currentCompany, heroSectionDescription, heroSectionSkills, certifications, skillsData, navItems, liveStatus };
