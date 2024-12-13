import {
    Database,
    Cloud,
    Code,
    GitBranch,
    Network,
    Shield
  } from 'lucide-react';

  export const skillsData = [
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