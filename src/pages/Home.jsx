import React from 'react'
import About from '../components/About'
import CustomCursor from '../components/CustomCursor'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

function Home() {
  return (
    <div>
      <CustomCursor/>
        <Header />
        <Hero />
        <About/>
        <Skills/>
    </div>
  )
}

export default Home