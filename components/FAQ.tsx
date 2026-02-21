'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Does it support multiple groups?',
    answer: 'Yes! You can create or join multiple accountability groups. Whether you want a coding pair, a squad, or multiple teams, our platform supports it all.',
  },
  {
    question: 'How is activity verified?',
    answer: 'We automatically poll your LeetCode and GeeksforGeeks profiles server-side. No manual check-ins needed. Your activity is verified in real-time, ensuring authentic streaks.',
  },
  {
    question: 'Can I cheat?',
    answer: 'No. All verification happens server-side by directly checking your coding platform profiles. There\'s no way to fake your activity or streak.',
  },
  {
    question: 'Does it send reminders?',
    answer: 'We focus on accountability, not reminders. The platform tracks your activity automatically, and your group members can see your progress. The accountability comes from your peers, not notifications.',
  },
  {
    question: 'When is launch?',
    answer: 'We\'re currently in pre-launch mode. Join the waitlist to be notified as soon as we go live!',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-primary-500/20 rounded-xl overflow-hidden bg-dark-800/30 hover:border-primary-500/40 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

