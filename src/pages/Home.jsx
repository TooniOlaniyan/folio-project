import React from 'react'
import About from '../components/About'
import CustomCursor from '../components/CustomCursor'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Skills from '../components/Skills'
import LocomotiveScroll from 'locomotive-scroll'


function Home() {
  return (
    <div>
      <CustomCursor/>
        <Header />
        <Hero />
        <About  />
        <Skills/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default Home