import { useState } from 'react'

import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/About'
import Services from './components/services/Services'
import Counter from './components/counter/Counter'
import Portafolio from './components/Portafolio/Portafolio'
import Testimonials from './components/testimonials/Testimonials'
import Team from './components/team/Team'
import Contact_info from './components/Contact/contact'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Counter></Counter>
      <Portafolio></Portafolio>
      <Testimonials></Testimonials>
      <Team></Team>
      <Contact_info></Contact_info>
      <Footer></Footer>
    </>
  )
}

export default App
