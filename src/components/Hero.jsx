import React,  {useEffect} from 'react'
import styled from 'styled-components'
import { GiSpiderWeb, GiLobArrow } from 'react-icons/gi'
import { CgMoveDown } from 'react-icons/cg'
import {motion} from 'framer-motion'


//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

const textParent = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}
const lastText = {
  initial: {
    y: 30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 2, ...transition },
  },
}

const letter = {
  initial: {
    y: 400,
    opacity:0,
    skewY:5
  },
  animate: {
    y: 0,
    skewY:0,
    opacity: 1,
    transition: { duration: 1,delay:1, ...transition },
  },
}

function Hero() {
 
  return (
    <Section>
      <TextPart variants={textParent} initial='initial' animate='animate'>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition }}
          className='name'
        >
          Hi, i'm <strong>Tooni</strong>
        </motion.p>
        <motion.p
          variants={letter}
          initial='initial'
          animate='animate'
          className='job'
        >
          A front-end <br /> web <span>developer</span>
        </motion.p>
        <motion.p
          variants={lastText}
          initial='initial'
          animate='animate'
          className='brief'
        >
          I create front facing interface with great asthetic and top-tier user
          experience.
        </motion.p>
      </TextPart>

      <Circle
      initial={{attributeType:{
        startOffset:'100%'
      }}}
        animate={{  rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          // ease: 'none',
          bounce:0
        }}
      >
        <svg viewBox='0 0 200 200'>
          <motion.path
            id='circle'
            d='
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
    '
            style={{
              fillOpacity: 0,
            }}
          ></motion.path>

          <text width='500'>
            <textPath
              alignmentBaseline='top'
              className='text'
              xlinkHref='#circle'
            >
              Tooni Olaniyan Tooni Olaniyan Tooni Olaniyan
            </textPath>
          </text>
        </svg>
      </Circle>
    </Section>
  )
}

const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  overflow: hidden;
  gap: 10rem;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      gap: 3rem;
    }
 
`

const TextPart = styled(motion.div)`
  overflow: hidden;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  /* border: 2px solid blue; */
  p {
    overflow: hidden;
  }
  position: relative;
  @media screen and (max-width: 640px) {
    width: 92%;
  }
  .job {
    overflow: hidden;
    font-size: 120px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 6rem;
    @media screen and (max-width: 640px) {
      font-size: 80px;
      line-height: 5rem;
    }

    span {
      text-decoration: line-through;
    }
  }

  .brief {
    overflow: hidden;
    font-size: 24px;
    font-weight: 400;
    @media screen and (max-width: 640px) {
      font-size: 20px;
    }
  }
  .name {
    font-size: 20px;
    font-weight: 500;
  }
  .arrow {
    position: absolute;
    bottom: 4.8rem;
    right: 8rem;
    width: 100px;
    height: 100px;
    @media screen and (max-width: 640px) {
      bottom: 14rem;
      right: 6rem;
    }
  }
`
const Circle = styled(motion.div)`
  width: 200px;
  position: relative;
  @media screen and (max-width: 640px) {
    display: block;
  }
  svg {
    /* visibility: hidden; */
    .text {
      font-size: 24px;
      font-weight: 400;
      fill: #000;
    }
  }
`


export default Hero