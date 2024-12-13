'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Server, Palette, Database, Cog } from 'lucide-react'
import { Card, CardContent } from "../ui/card"

interface Skill {
  name: string
  grade: 'A' | 'B' | 'C' | 'D'
}

interface SkillCategory {
  name: string
  icon: React.ElementType
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React", grade: "A" },
      { name: "TypeScript", grade: "B" },
      { name: "CSS/Sass", grade: "A" },
      { name: "Next.js", grade: "B" },
    ]
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", grade: "B" },
      { name: "Express", grade: "B" },
      { name: "Python", grade: "C" },
      { name: "Django", grade: "C" },
    ]
  },
  {
    name: "Design",
    icon: Palette,
    skills: [
      { name: "UI Design", grade: "B" },
      { name: "UX Design", grade: "C" },
      { name: "Figma", grade: "B" },
      { name: "Adobe XD", grade: "C" },
    ]
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", grade: "B" },
      { name: "PostgreSQL", grade: "B" },
      { name: "MySQL", grade: "C" },
      { name: "Redis", grade: "D" },
    ]
  },
  {
    name: "DevOps",
    icon: Cog,
    skills: [
      { name: "Docker", grade: "C" },
      { name: "Kubernetes", grade: "D" },
      { name: "CI/CD", grade: "C" },
      { name: "AWS", grade: "C" },
    ]
  },
]

const gradeColors = {
  A: "bg-green-500",
  B: "bg-blue-500",
  C: "bg-yellow-500",
  D: "bg-red-500",
}

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-secondary">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                className="overflow-hidden transition-shadow duration-300 hover:shadow-lg bg-gray-800 border-gray-600 text-white"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <category.icon className="w-6 h-6 mr-2 text-white" />
                      {category.name}
                    </h3>
                  </div>
                  <AnimatePresence>
                    {hoveredCategory === category.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="skill-category p-4 bg-gray-800 rounded">
                          <div className="mt-2">
                            {category.skills.map((skill) => (
                              <motion.div
                                key={skill.name}
                                className="mb-4 last:mb-0"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium text-white">{skill.name}</span>
                                  <div className="flex items-center">
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${gradeColors[skill.grade]}`}>
                                      {skill.grade}
                                    </span>
                                    <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden ml-2">
                                      <motion.div
                                        className={`h-full ${gradeColors[skill.grade]}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(skill.grade.charCodeAt(0) - 64) * 25}%` }}
                                        transition={{ duration: 0.3 }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
