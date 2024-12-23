import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Briefcase, Mail, Menu, X, Medal } from 'lucide-react'

const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Experience', href: '#experience', icon: User },
    { name: 'skills', href: '#skills', icon: Briefcase },
    { name: 'Certifications', href: '#certifications', icon: Medal},
    { name: 'Contact', href: '#contact', icon: Mail },
]

export function FloatingNavBar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const hideNavbarTimeout = 5000

  const hideNavBar = useCallback(() => {
    if (activeSection !== 'home') {
      setIsVisible(false)
    }
    setIsMobileMenuOpen(false)
  }, [activeSection])

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      setIsVisible(true)
      clearTimeout(hideTimer)
      if (activeSection !== 'home') {
        hideTimer = setTimeout(hideNavBar, hideNavbarTimeout) // Hide after 3 seconds of inactivity, except on home page
      }
    }

    // const handleMouseMove = () => {
    //   setIsVisible(true)
    //   clearTimeout(hideTimer)
    //   if (activeSection !== 'home') {
    //     hideTimer = setTimeout(hideNavBar, hideNavbarTimeout)
    //   }
    // }

    window.addEventListener('scroll', handleScroll)
    // window.addEventListener('mousemove', handleMouseMove)

    // Initial timer
    if (activeSection !== 'home') {
      hideTimer = setTimeout(hideNavBar, hideNavbarTimeout)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    //   window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(hideTimer)
    }
  }, [hideNavBar, activeSection])

  useEffect(() => {
    const handleSectionVisibility = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
        if (currentSection === 'home') {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleSectionVisibility)
    return () => window.removeEventListener('scroll', handleSectionVisibility)
  }, [])

  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
    open: { opacity: 1, scale: 1, transition: { duration: 0.3, type: "spring", stiffness: 150, damping: 15 } }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-4 left-0 right-0 flex justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navVariants}
        >
          <nav>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-1 rounded-full bg-gray-800/90 backdrop-blur-md shadow-lg p-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <React.Fragment key={item.name}>
                    {index > 0 && (
                      <li className="h-6 w-px bg-gray-600 mx-1" aria-hidden="true" />
                    )}
                    <motion.li
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <button
                        onClick={() => handleClick(item.href)}
                        className={`relative flex items-center space-x-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeNavBackground"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center space-x-1">
                          <item.icon size={16} />
                          <span>{item.name}</span>
                        </span>
                      </button>
                    </motion.li>
                  </React.Fragment>
                )
              })}
            </ul>

            {/* Mobile Navigation */}
            <div className="md:hidden absolute right-4 top-0">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full bg-gray-800/90 backdrop-blur-md shadow-lg text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.ul
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileMenuVariants}
                    className="absolute right-0 mt-2 w-48 rounded-md bg-gray-800/90 backdrop-blur-md shadow-lg py-1"
                  >
                    {navItems.map((item) => (
                      <motion.li
                        key={item.name}
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          onClick={() => handleClick(item.href)}
                          className="w-full text-left px-4 py-2 text-sm text-white flex items-center space-x-2"
                        >
                          <item.icon size={16} />
                          <span>{item.name}</span>
                        </button>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

