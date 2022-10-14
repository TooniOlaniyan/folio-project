import React from 'react'
import {useRef} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

function About() {
  
  // const scrollRef = useRef(null)
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

  const firstName = {
    initial: {
      y: 400,
      skewY: 30,
    },
    animate: {
      y: 0,
      skewY: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 2,
      },
    },
  }

const letter = {
  initial: {
    y: 0,
    
    opacity: 0
  },
  animate: {
    y: 0,
    
    opacity: 1,
    transition: { duration: 1, ...transition },
  },
}
  return (
    <Section data-scroll-section id='about'>
      <div id='SVG'>
        <svg
          width='600px'
          height='600px'
          viewBox='0 0 500 500'
          version='1.1'
          // xmlns='http://www.w3.org/2000/svg'
          // xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <g
            id='btn-circle-wrap'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
          >
            <g
              id='btn-circle-wrapper'
              transform='translate(-237.000000, -465.000000)'
            >
              <g id='btn-circle' transform='translate(166.000000, 466.000000)'>
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ duration: 15, ease: [0.6, 0.01, -0.05, 0.9] }}
                  d='M272.5,401 C383.233092,401 473,311.233092 473,200.5 C473,89.7669077 383.233092,0 272.5,0 C161.766908,0 72,89.7669077 72,200.5'
                  id='Shape'
                  stroke='#D6E5FA'
                  opacity='1'
                  transform='translate(272.500000, 200.500000) scale(-1, -1) translate(-272.500000, -200.500000) '
                ></motion.path>
              </g>
            </g>
            <motion.text
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }}
              className='text'
              x='40%'
              y='40%'
              text-anchor='middle'
              stroke='#D6E5FA'
              stroke-width='1px'
              dy='.3em'
            >
              ABOUT?
            </motion.text>
          </g>
        </svg>
      </div>
      <TextWrapper
        data-scroll
        data-scroll-offset='15%'
        data-scroll-speed='2'
        data-scroll-direction='horizontal'
      >
        <motion.span
          className='span'
          variants={firstName}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <motion.span variants={letter}>
            I am an <span className='stroke'>Engineer</span> Front-End Developer
            based in Nigeria.
          </motion.span>
          <motion.span variants={letter}>
            I am highly motivated and focused driven.
          </motion.span>

          <motion.span variants={letter}>
            I am dependable and creative with a strong work ethic and an
            artistic eye, but also bring a fun-loving and enthusiastic attitude
            &nbsp;
          </motion.span>
          <motion.span variants={letter}>
            I have an Insatiable curiosity in imagining and bringing ideas
            &nbsp;
          </motion.span>
          <motion.span variants={letter}>
            to life on the web. <span>I'm</span> passionate about learning new
            technologies &nbsp;
          </motion.span>
          <motion.span variants={letter}>
            and how they can be implemented. I love minimal designs with
            seamless user experience.
          </motion.span>
        </motion.span>
      </TextWrapper>
    </Section>
  )
}


const Section = styled.div`
  overflow: hidden;
  max-width: 100vw;
  margin-top: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    margin-top: 6rem;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 6rem;
  }
  svg {
    padding: 2rem;
    @media screen and (max-width: 640px) {
      max-width: 90vw;
    
      height: 350px;
      margin: 0 auto;
    
      
    }
    

    .text {
      font-size: 80px;
      fill: #232622;
      @media screen and (max-width: 640px) {
        font-size: 60px;
      }
    }
  }
`
const TextWrapper = styled(motion.div)`
  max-width: 35vw;
  @media screen and (max-width: 640px) {
    max-width: 90vw;
    margin-top: -4rem;
    
  }
  @media screen and (max-width: 890px) {
    max-width: 90vw;
    

    margin-top: -4rem;
    
  }
  .span {
    font-size: 20px;
    letter-spacing: 1px;
    padding: 4px;
    font-weight: 500;
    line-height: 2.3rem;
    span {
      overflow: hidden;
      @media screen and (max-width: 640px) {
        font-size: 17px;
      }
      /* background-color: red; */
    }
    .stroke {
      text-decoration: line-through;
    }
  }
`



export default About