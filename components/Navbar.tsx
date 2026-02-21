'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Navbar() {
  const waitlistRef = useRef<HTMLDivElement>(null)

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-primary-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent cursor-pointer"
            >
              Commito
            </motion.button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#who-can-use"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                Who Can Use It
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                FAQ
              </a>
              <motion.button
                onClick={scrollToWaitlist}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
              >
                Join Waitlist
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={scrollToWaitlist}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Join
            </motion.button>
          </div>
        </div>
      </nav>
      {/* Hidden ref for scroll target */}
      <div ref={waitlistRef} className="absolute -top-20" />
    </>
  )
}

