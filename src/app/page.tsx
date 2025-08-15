import React from 'react'
import  Header  from './Components/Header'
import Hero from './Components/Hero'
import Explore from './Components/Explore'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

export default function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Explore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
