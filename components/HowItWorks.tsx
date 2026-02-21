'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Install Extension',
    description: 'Add our Chrome Extension to your browser in seconds. No complex setup required.',
  },
  {
    number: '02',
    title: 'Connect Profiles',
    description: 'Link your LeetCode and GeeksforGeeks profiles. We handle the rest automatically.',
  },
  {
    number: '03',
    title: 'Create or Join Groups',
    description: 'Start your own accountability group or join existing ones. Pairs, squads, or teams.',
  },
  {
    number: '04',
    title: 'Code Daily — We Track Automatically',
    description: 'Just code. We verify your activity server-side and update your streak in real-time.',
  },
]

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
        >
          How It Works
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="relative"
        >
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/30 via-primary-500/50 to-primary-500/30 transform -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step content */}
                <div className="flex-1 md:w-5/12">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative p-8 bg-dark-800/50 border border-primary-500/20 rounded-xl hover:border-primary-500/50 transition-all duration-300"
                  >
                    {/* Step number background */}
                    <div className="absolute top-0 right-0 text-8xl font-bold text-primary-500/10 group-hover:text-primary-500/20 transition-colors">
                      {step.number}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mr-4 group-hover:bg-primary-500/30 transition-colors border-2 border-primary-500/30">
                          <span className="text-primary-400 font-bold text-2xl">{step.number.slice(1)}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors -z-10" />
                  </motion.div>
                </div>

                {/* Center connector circle */}
                <div className="hidden md:flex flex-shrink-0 w-2/12 justify-center items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary-500/20 border-4 border-primary-500/50 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary-500" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

