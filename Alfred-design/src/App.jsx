import { useState } from 'react'

import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/About'
import Services from './components/services/Services'
import Counter from './components/counter/Counter'
import Portafolio from './components/Portafolio/Portafolio'
import Testimonials from './components/testimonials/Testimonials'
import Team from './components/team/Team'
import Footer from './components/footer/Footer'
import Contact from './components/Contact/ct.jsx'
import Pricing from './components/Pricing/Pricing.jsx'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Counter></Counter>
      <Portafolio></Portafolio>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
