'use client'

import { motion } from 'framer-motion'

export default function WhatItIs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white"
          >
            What Is This Platform?
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              This is <span className="text-primary-400 font-semibold">not a habit tracker</span>. 
              It's not a reminder app. It's a <span className="text-primary-400 font-semibold">verified coding accountability system</span> built for serious developers.
            </p>

            <p>
              Our Chrome Extension automatically polls your LeetCode and GeeksforGeeks profiles 
              to verify your coding activity. No manual check-ins. No fake streaks. 
              <span className="text-primary-400 font-semibold"> Just real accountability.</span>
            </p>

            <p>
              Create or join multiple accountability groups—whether it's a coding pair, a squad, 
              or a larger team. Everyone can see each other's progress, and streaks are verified 
              server-side to ensure authenticity.
            </p>

            <p className="text-primary-300 font-medium">
              Built by coders, for coders who take their craft seriously.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

