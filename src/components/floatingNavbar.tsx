import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Briefcase, Mail, Menu, X, Star, Medal } from 'lucide-react'
import './floatingNavbar.css'

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [ 
  { name: 'Home', href: '#home', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Star },
  { name: 'Certifications', href: '#certifications', icon: Medal },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export function FloatingNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleClick = (href: string) => {
    setIsMenuOpen(false)
    setActiveSection(href.slice(1))
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuVariants = {
    open: { 
      scale: [1, 1.2, 1],
      rotate: [0, 180, 180],
      transition: { duration: 0.5 }
    },
    closed: { 
      scale: [1, 1.2, 1],
      rotate: [180, 0, 0],
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="fixed top-[-1rem] right-[-1rem] md:top-[1.5rem] md:right-[1.5rem] z-50">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button"
          aria-label="Toggle menu"
          variants={menuVariants}
          animate={isMenuOpen ? 'open' : 'closed'}
        >
          <svg className="liquid-button" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              </filter>
              <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <g filter="url(#goo)">
              <circle className="blob" cx="100" cy="100" r="40" fill="url(#buttonGradient)" />
              <circle className="blob" cx="100" cy="100" r="40" fill="url(#buttonGradient)" />
              <circle className="blob" cx="100" cy="100" r="40" fill="url(#buttonGradient)" />
              <circle className="blob" cx="100" cy="100" r="40" fill="url(#buttonGradient)" />
              <circle className="blob" cx="100" cy="100" r="40" fill="url(#buttonGradient)" />
            </g>
          </svg>
          <span className="button-content">
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </span>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="nav-blob"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  clipPath: 'circle(150% at 90vw 40px)',
                  transition: {
                    duration: 0.75,
                    ease: [0.76, 0, 0.24, 1],
                  }
                },
                closed: {
                  clipPath: 'circle(0% at 90vw 40px)',
                  transition: {
                    duration: 0.75,
                    ease: [0.76, 0, 0.24, 1],
                  }
                }
              }}
            >
              <ul className="nav-items">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1)
                  return (
                    <motion.li
                      key={item.name}
                      variants={{
                        open: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                        },
                        closed: {
                          opacity: 0,
                          y: 20,
                          transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                        }
                      }}
                    >
                      <button
                        onClick={() => handleClick(item.href)}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                      >
                        <span className="nav-link-content">
                          <item.icon size={24} />
                          <span>{item.name}</span>
                        </span>
                      </button>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

