'use client'

import { motion } from 'framer-motion'

const comparisons = [
  {
    typical: 'Manual check-ins required',
    us: 'Automatic tracking',
    icon: '✓',
  },
  {
    typical: 'Fake streaks possible',
    us: 'Server-side verification',
    icon: '✓',
  },
  {
    typical: 'Single group',
    us: 'Multiple groups support',
    icon: '✓',
  },
  {
    typical: 'Just reminders',
    us: 'Real accountability',
    icon: '✓',
  },
  {
    typical: 'Generic habit tracking',
    us: 'Built for coders',
    icon: '✓',
  },
]

export default function WhatMakesUsDifferent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
        >
          What Makes Us Different
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Typical habit apps */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-dark-800/30 border border-gray-700/50 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-400 mb-6">Typical Habit Apps</h3>
            <ul className="space-y-4">
              {comparisons.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">×</span>
                  <span className="text-gray-400">{item.typical}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our platform */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-br from-primary-900/20 to-primary-800/10 border border-primary-500/30 rounded-xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary-500/5 blur-xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">This Platform</h3>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary-400 mr-3 text-xl font-bold">{item.icon}</span>
                    <span className="text-white font-medium">{item.us}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

