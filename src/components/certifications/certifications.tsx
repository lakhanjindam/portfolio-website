import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../../data';
import { CertificateCard } from './certificateCard';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800/50 backdrop-blur-lg" id="certifications">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-grotesk font-bold text-gradient mb-4"
          >
            Certified Expertise
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4"
          >
            <Award className="w-4 h-4" />
            Professional Certifications
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Industry-recognized certifications demonstrating proficiency in Cloud, DevOps, and system architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {certifications.map((cert) => (
            <CertificateCard
              key={cert.id}
              id={cert.id}
              title={cert.name}
              organization={cert.issuer}
              issueDate={cert.issueDate}
              expiryDate={cert.expiryDate}
              description={cert.description}
              credentialId={cert.credentialId}
              iconColor={cert.iconColor}
              credentialUrl={cert.credentialUrl}
              skills={cert.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;