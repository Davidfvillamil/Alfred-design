import { useState } from 'react'

import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/About'
import Services from './components/services/Services'
import Counter from './components/counter/Counter'
import Portafolio from './components/Portafolio/Portafolio'
import Testimonials from './components/testimonials/Testimonials'
import Team from './components/team/Team'

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
    </>
  )
}

export default App
