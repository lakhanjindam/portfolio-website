import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { certifications } from '../../data';
import { cn } from '../../utils/cn';
import { ShineOverlay } from '../ui/shineOverlay';
import { FaAws} from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

interface CertificationCardProps {
  certification: typeof certifications[number];
  index: number;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden",
        "bg-gradient-to-br from-gray-900/50 to-gray-800/50",
        "backdrop-blur-sm rounded-xl border border-white/10",
        "hover:border-emerald-500/20 transition-all duration-300",
        "hover:shadow-lg hover:shadow-emerald-500/10"
      )}
      whileHover="hover"
    >
      {/* Shine Effect */}
      <ShineOverlay />

      {certification.featured && (
        <div className="absolute top-3 right-3 z-10">
          <Award className="w-5 h-5 text-emerald-400" />
        </div>
      )}

      <div className="relative p-6">
        {/* Logo and Title */}
        <div className="flex items-start gap-4 mb-4">
          <motion.div 
            className="relative w-16 h-16 rounded-lg overflow-hidden"
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.3 }}
          >
            {certification.id.includes('k8s') && <SiKubernetes size={40} color={certification.iconColor}/>}
            {certification.id.includes('aws') && <FaAws size={40} color={certification.iconColor}/>}
            {certification.id.includes('azure')  && <VscAzure size={40} color={certification.iconColor}/>}
            {certification.id.includes('terraform')  && <SiTerraform size={40} color={certification.iconColor}/>}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/20" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
            <p className="text-emerald-400">{certification.issuer}</p>
          </div>
        </div>

        {/* Dates */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Calendar className="w-4 h-4" />
          <span>Issued: {certification.issueDate}</span>
          {certification.expiryDate && (
            <>
              <span>•</span>
              <span>Expires: {certification.expiryDate}</span>
            </>
          )}
        </div>

        {/* Credential ID and Link */}
        <div className="flex items-center justify-between">
          {certification.credentialId && (
            <span className="text-sm text-gray-500">ID: {certification.credentialId}</span>
          )}
          <motion.a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            variants={{
              hover: { x: 5 }
            }}
            transition={{ duration: 0.3 }}
          >
            Verify
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Background gradient effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
      </div>
    </motion.div>
  );
};