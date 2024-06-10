import { useState } from 'react'

import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </>
  )
}

export default App
