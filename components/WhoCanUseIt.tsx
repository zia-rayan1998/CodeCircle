'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function WhoCanUseIt() {
  const features = [
    {
      title: 'Coders who are procrastinating',
      description: 'Struggling to start? CodeCircle creates the accountability you need to overcome procrastination and build consistent coding habits.',
    },
    {
      title: 'Developers who want to stay focused',
      description: 'Stay on track with your coding goals. Our system helps you maintain focus and avoid distractions that derail your progress.',
    },
    {
      title: 'Students preparing for interviews',
      description: 'Build a strong coding streak while preparing for technical interviews. Track your progress on LeetCode and GeeksforGeeks automatically.',
    },
    {
      title: 'Teams building coding habits together',
      description: 'Join or create accountability groups. Code together, stay motivated, and never break your streak with peer support.',
    },
  ]

  return (
    <section id="who-can-use" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-4"
        >
          <HoverableText defaultColor="white" hoverColor="orange">
            Who Can Use It
          </HoverableText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          CodeCircle is designed for anyone serious about building consistent coding habits and staying accountable.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-8 bg-dark-800/50 border border-primary-500/20 rounded-xl hover:border-primary-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                <HoverableText defaultColor="white" hoverColor="orange">
                  {feature.title}
                </HoverableText>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
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

