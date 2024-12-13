'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, Building } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { certifications } from '../data'


export default function CertificationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredId(cert.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Card className="h-full overflow-hidden border-2 border-gray-600 bg-gray-800">
                <CardContent className="p-6">
                  {/* Removed the quarter circle div to prevent overlap */}
                  <Award className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded-full bg-emerald-400 text-white ${
                          hoveredId === cert.id ? 'opacity-100 scale-100' : 'opacity-100 scale-95'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
