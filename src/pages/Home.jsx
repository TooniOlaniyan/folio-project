import React , {useEffect , useState} from 'react'
import About from '../components/About'
import CustomCursor from '../components/CustomCursor'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Skills from '../components/Skills'
import LocomotiveScroll from 'locomotive-scroll'
import Loader from '../components/Loader'
import {motion} from 'framer-motion'


function Home() {
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(true)
    } , 4800)
  })
  if(!loading){
    return(
      <Loader/>

    )
  }

  return (
    <div>
      <CustomCursor />
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  )
}

export default Home