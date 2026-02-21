'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FloatingCube from './FloatingCube'
import ExtensionModal from './ExtensionModal'

export default function Hero() {
  const [isExtensionModalOpen, setIsExtensionModalOpen] = useState(false)

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openExtensionModal = () => {
    setIsExtensionModalOpen(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-900/10" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <HoverableText defaultColor="white" hoverColor="orange" className="block">
                Code Together.
              </HoverableText>
              <HoverableText defaultColor="white" hoverColor="orange" className="block">
                Stay Accountable.
              </HoverableText>
              <HoverableText defaultColor="orange" hoverColor="white" className="block">
                Never Break Your Streak.
              </HoverableText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              A Chrome Extension that automatically tracks your LeetCode and GFG activity 
              and turns coding into a serious accountability system.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                onClick={scrollToWaitlist}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70 transition-all duration-300 transform hover:scale-105"
              >
                Join the Waitlist
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                onClick={openExtensionModal}
                className="px-8 py-4 bg-transparent border-2 border-primary-500 hover:bg-primary-500/10 text-primary-400 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Get Extension
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - 3D Object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[400px] sm:h-[500px] lg:h-[600px] w-full flex flex-col items-center justify-center"
          >
            {/* CodeCircle name above cube */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-4"
            >
              <h2 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Commito
              </h2>
            </motion.div>
            
            <div className="h-[400px] sm:h-[500px] lg:h-[550px] w-full">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#f97316" intensity={0.5} />
                <FloatingCube />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* Extension Modal */}
      <ExtensionModal 
        isOpen={isExtensionModalOpen} 
        onClose={() => setIsExtensionModalOpen(false)} 
      />
    </section>
  )
}

// HoverableText component for color change on hover
function HoverableText({ 
  children, 
  defaultColor, 
  hoverColor, 
  className = '' 
}: { 
  children: React.ReactNode
  defaultColor: 'white' | 'orange'
  hoverColor: 'white' | 'orange'
  className?: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  const getColorClass = (defaultCol: 'white' | 'orange', hoverCol: 'white' | 'orange', isHover: boolean) => {
    if (isHover) {
      // When hovered, use the hover color
      return hoverCol === 'orange' 
        ? 'bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent' 
        : 'text-white'
    }
    // When not hovered, use the default color
    return defaultCol === 'orange' 
      ? 'bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent' 
      : 'text-white'
  }

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`transition-all duration-300 cursor-default ${getColorClass(defaultColor, hoverColor, isHovered)} ${className}`}
    >
      {children}
    </span>
  )
}


