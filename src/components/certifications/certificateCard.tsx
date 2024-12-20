// import Image from 'next/image'
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { CalendarIcon } from 'lucide-react'
import { FaAws} from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

interface CertificateCardProps {
  id : string
  iconColor?: string
  title: string
  organization: string
  date: string
  description?: string
  credentialUrl: string
  skills: string[]
  credentialId: string
}

export function CertificateCard({ id, title, organization, date, description, iconColor, credentialUrl, skills }: CertificateCardProps) {
  return (
    <Card className="relative overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-purple-500/40 group bg-gray-800 border-gray-700">
      <div className="aspect-[2/3] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-gray-900/0" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-emerald-500/80 to-blue-500/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-white animate-shine opacity-40 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
        <div className="logo-container absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-0">
          {id.includes('k8s') && <SiKubernetes size={100} color={iconColor}/>}
          {id.includes('aws') && <FaAws size={100} color={iconColor}/>}
          {id.includes('azure') && <VscAzure size={100} color={iconColor}/>}
          {id.includes('terraform') && <SiTerraform size={100} color={iconColor}/>}
        </div>
      </div>
      <CardContent className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        <div className="transform group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-bold mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-600">{title}</h3>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100 transform translate-y-4 group-hover:translate-y-0">
            <p className="text-md mb-4 text-gray-300">{organization}</p>
            <div className="flex items-center space-x-2 mb-4 text-gray-300">
              <CalendarIcon className="w-5 h-5" />
              <span className="text-sm">Issued: {date}</span>
              <span>•</span>
              <span className="text-sm">Expires: {date}</span>
            </div>
            <p className="text-sm mb-4 text-gray-300">
              <button
                className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-blue-600 border border-transparent rounded-lg shadow-sm hover:shadow-md focus:outline-none transition-all duration-500 ease-in-out"
                onClick={() => window.open(`${credentialUrl}`, '_blank')}
              >
                <span className="relative flex items-center">
                  Verify
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </button>
            </p>
            {description && (
              <div className="prose prose-sm prose-invert text-gray-300 mb-4">
                <div className="overflow-y-auto max-h-[218px]">
                  <pre className="whitespace-pre-wrap font-normal">
                    {description?.split('\n').map((line, index) => (
                      <span key={index}>{line}<br /></span>
                    ))}
                  </pre>
                </div>
              </div>
            )}
            {/* <h4 className="text-sm font-bold uppercase tracking-wide text-gray-300 my-2">
              Skills
            </h4>
            <ul className="flex flex-wrap items-center space-x-2">
              {skills.map((skill, idx) => (
                <li key={idx} className="text-sm text-gray-300 bg-white rounded-full px-2">
                  <Badge variant="secondary" className="rounded-full">
                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                  </Badge>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

