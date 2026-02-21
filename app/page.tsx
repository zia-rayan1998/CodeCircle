'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeatureCards from '@/components/FeatureCards'
import Waitlist from '@/components/Waitlist'
import WhatItIs from '@/components/WhatItIs'
import HowItWorks from '@/components/HowItWorks'
import WhoCanUseIt from '@/components/WhoCanUseIt'
import WhatMakesUsDifferent from '@/components/WhatMakesUsDifferent'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Waitlist />
      <FeatureCards />
      <WhatItIs />
      <HowItWorks />
      <WhoCanUseIt />
      <WhatMakesUsDifferent />
      <FAQ />
      <Footer />
    </main>
  )
}

