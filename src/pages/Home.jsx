import React from 'react'
import About from '../components/About'
import CustomCursor from '../components/CustomCursor'
import Header from '../components/Header'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <CustomCursor/>
        <Header />
        <Hero />
        {/* <About/> */}
    </div>
  )
}

export default Home