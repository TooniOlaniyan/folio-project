import React,  {useEffect} from 'react'
import styled from 'styled-components'
import { GiSpiderWeb, GiLobArrow } from 'react-icons/gi'
import { FaArrowDown } from 'react-icons/fa'
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
        initial={{
          attributeType: {
            startOffset: '100%',
          },
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'linear',
        }}
        whileHover={{ rotateZ: '200deg' }}
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

      <ScrollDown
        animate={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ delay: 3, ...transition, staggerChildren: 1 }}
      >
        <motion.div
          animate={{ y: [-30, 0], scale: 1.2 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.9],
            type: 'spring',
          }}
        >
          <FaArrowDown fill='#D6E5FA'  className='arrowDown' />
        </motion.div>
        <motion.p
          animate={{ y: [3, 0], opacity: [0, 1] }}
          transition={{ delay: 3.2, ...transition }}
        >
          Scroll Down
        </motion.p>
      </ScrollDown>
    </Section>
  )
}

const Section = styled.section`
  /* width: 100vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
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
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  /* border: 2px solid blue; */
  p {
    overflow: hidden;
  }

  @media screen and (max-width: 640px) {
    width: 80vw;
    margin: 0 auto;
  }
 
  .job {
    overflow: hidden;
    font-size: 120px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 6rem;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
      color: #ff6363;
    }
    @media screen and (max-width: 640px) {
      font-size: 60px;
      line-height: 5rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 50px;
      
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
  overflow: auto;
  @media screen and (max-width: 640px) {
    display: block;
    
  }
  svg {
    /* visibility: hidden; */
    .text {
      font-size: 24px;
      font-weight: 400;
      fill: #d6e5fa;
    }
  }
`
const ScrollDown = styled(motion.div)`
  width: 70px;
  height: 70px;
  border: 1.3px solid #262322;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 6rem;
  right: 7rem;
  overflow: hidden;
  P {
    width: min-content;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
  }
  .arrowDown {
    width: 13px;
    height: 13px;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
 
`


export default Hero