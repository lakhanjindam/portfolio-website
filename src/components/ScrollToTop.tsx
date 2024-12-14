"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  let timer: number;
  const controls = useAnimation()
  
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(currentScroll / totalScroll, 1)
      setScrollProgress(progress)
      setIsVisible(true);
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timer) {
        clearTimeout(timer);
      }
    }
  }, [])

  useEffect(() => {
    controls.start({
      pathLength: scrollProgress,
      transition: { duration: 0.3, ease: "easeOut" }
    })
  }, [scrollProgress, controls])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-2 bg-transparent rounded-full shadow-lg focus:outline-none z-50"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible && scrollProgress > 0 ? 1 : 0, scale: isVisible && scrollProgress > 0 ? 1 : 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        <ArrowUp className="w-6 h-6 text-white" />
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={controls}
          />
        </svg>
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="25%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="75%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.button>
  )
}
