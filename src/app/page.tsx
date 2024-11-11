import CallToAction from '@/sections/CallToAction'
import Companies from '@/sections/Companies'
import Features from '@/sections/Features'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Pricing from '@/sections/Pricing'
import Testimonials from '@/sections/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
