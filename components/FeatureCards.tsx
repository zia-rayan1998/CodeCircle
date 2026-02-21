'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const featureLines = [
  "We don't do on-and-off relationships.",
  "No ghosting. Not here Bro.",
  "Missing them don't build u, Staying consistent does. ",
  "U lost her again, Atleast don't loose your streak",
  "Consistency is not optional.",
  "No reminders. No excuses. Just code re.",
  "Tomorrow isn't a strategy.",
]

export default function FeatureCards() {
  const [activeIndex, setActiveIndex] = useState(2) // Start with middle card

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % featureLines.length)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + featureLines.length) % featureLines.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + featureLines.length) % featureLines.length)
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % featureLines.length)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Calculate card position and transform based on index
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex
    const absOffset = Math.abs(offset)
    const direction = offset > 0 ? 1 : -1

    // Center card (offset = 0)
    if (offset === 0) {
      return {
        scale: 1,
        rotateY: 0,
        x: 0,
        z: 0,
        opacity: 1,
      }
    }

    // Side cards
    const baseScale = 0.7
    const scale = Math.max(baseScale - absOffset * 0.15, 0.4)
    const rotateY = direction * 45 * (1 - absOffset * 0.3)
    const x = direction * (120 + absOffset * 80)
    const z = -absOffset * 100
    const opacity = Math.max(1 - absOffset * 0.3, 0.3)

    return {
      scale,
      rotateY,
      x,
      z,
      opacity,
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white"
        >
          Our Commitment
        </motion.h2>

        {/* 3D Carousel Container */}
        <div 
          className="relative h-[400px] sm:h-[450px] lg:h-[500px]"
          style={{
            perspective: '1200px',
            perspectiveOrigin: 'center center',
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {featureLines.map((line, index) => {
              const style = getCardStyle(index)
              const isActive = index === activeIndex

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    scale: style.scale,
                    rotateY: style.rotateY,
                    x: style.x,
                    z: style.z,
                    opacity: style.opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute cursor-pointer"
                  onClick={() => goToSlide(index)}
                  whileHover={isActive ? { scale: 1.05 } : {}}
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <motion.div
                    className={`w-[280px] sm:w-[320px] lg:w-[360px] h-[280px] sm:h-[320px] lg:h-[360px] p-8 rounded-2xl border transition-all duration-300 relative ${
                      isActive
                        ? 'bg-dark-800 border-primary-500/50 shadow-2xl shadow-primary-500/30'
                        : 'bg-dark-800/60 border-primary-500/20 shadow-lg'
                    }`}
                    whileHover={isActive ? {
                      boxShadow: '0 25px 50px -12px rgba(249, 115, 22, 0.4)',
                    } : {}}
                  >
                    <div className="flex items-center justify-center h-full relative z-10">
                      <p
                        className={`text-xl sm:text-2xl lg:text-3xl text-center font-medium transition-colors duration-300 ${
                          isActive
                            ? 'text-primary-400'
                            : 'text-gray-400'
                        }`}
                      >
                        {line}
                      </p>
                    </div>

                    {/* Glow effect for active card */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-2xl bg-primary-500/10 blur-xl -z-10"
                      />
                    )}

                    {/* Gradient overlay for depth */}
                    <div 
                      className={`absolute inset-0 rounded-2xl pointer-events-none ${
                        isActive 
                          ? 'bg-gradient-to-br from-primary-500/5 to-transparent' 
                          : 'bg-gradient-to-br from-primary-500/2 to-transparent'
                      }`}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <motion.button
            onClick={goToPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-dark-800 border border-primary-500/30 hover:border-primary-500/60 flex items-center justify-center text-primary-400 hover:text-primary-300 transition-colors"
            aria-label="Previous card"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {featureLines.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-3 bg-primary-500'
                    : 'w-3 h-3 bg-primary-500/30 hover:bg-primary-500/50'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-dark-800 border border-primary-500/30 hover:border-primary-500/60 flex items-center justify-center text-primary-400 hover:text-primary-300 transition-colors"
            aria-label="Next card"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Use arrow keys or click cards to navigate
        </p>
      </div>
    </section>
  )
}
