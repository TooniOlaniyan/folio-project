import React from 'react'
import Marquee from "react-fast-marquee";
import styled from 'styled-components';
import {motion , useScroll} from 'framer-motion'
import SkillsSlider from './SkillsSlider';
import { CgArrowBottomRightR } from 'react-icons/cg'



function Skills() {
  

  return (
    <Main>
      <div className='top'>
        <motion.div
          initial={{ opacity: 0, width: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, width: '80vw', scaleX: '100%' }}
          transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
          viewport={{ once: true }}
          className='line'
        ></motion.div>
        <motion.div initial={{y:30 , opacity:0}} 
        whileInView={{y:0 , opacity:1}} 
        transition={{duration:1 , ease:'easeIn'}}
        viewport={{once:true}} 
        className='skillText'>
          <p>My skills </p>

          <CgArrowBottomRightR color='#d6e5fa' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, width: '80vw', scaleX: '100%' }}
          transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
          viewport={{ once: true }}
          className='lineReverse'
        ></motion.div>
      </div>

      <div className='marqueeCOntainer'>
        <SkillsSlider />
      </div>
    </Main>
  )
}

const Main = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  margin-top: 6rem;

  .top {
    width: 80vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
  

    .line {
      top: 0;
      left: 0;
      position: absolute;
      height: 1px;
      background-color: #d6e5fa;
      transform-origin: 30%;
    }
  
    .lineReverse {
      bottom: 0;
      right: 0;
      position: absolute;
      height: 1px;
      background-color: #d6e5fa;
      transform-origin: 80%;
    }
    .skillText {
      font-size: 70px;
      margin: 1rem 0;
      /* background-color: red; */
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 1rem;
      /* text-align: center; */
    }
  }


  .marqueeContainer{
    /* width: 100vw; */
  }
`
export default Skills