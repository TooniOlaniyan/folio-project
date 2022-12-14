import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import TimeComponent from './TimeComponent'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

function Header() {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }
  const menu = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.4,

      },
    },
  }

  const letter = {
    initial: {
      y: -40,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
  }

  const {scroll} = useLocomotiveScroll()
  const handleScroll = (id) => {
    let elem = document.querySelector(id)
    scroll.scrollTo(elem , {
      offset: '-200',
      duration: '1000',
      easing: [0.25,0.0,0.35,1.0]
    })
  }


  return (
    <Main data-scroll-section>
      <div>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          className='headerName'
        >
          Tooni Olaniyan
        </motion.p>
      </div>
      <div
        className='nav-container'
      >
        <motion.ul variants={menu} initial='initial' animate='animate'>
          <motion.li
            whileHover={{
              scale: 1.2,
              letterSpacing: '2px',
              transition: { duration: 0.5, ease: [[0.43, 0.13, 0.23, 0.96]] },
            }}
            variants={letter}
            initial='initial'
            animate='animate'
            onClick={() => handleScroll('#about')}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              letterSpacing: '2px',
              transition: { duration: 0.5, ease: [[0.43, 0.13, 0.23, 0.96]] },
            }}
            variants={letter}
            initial='initial'
            animate='animate'
            onClick={() => handleScroll('#skills')}
          >
            Skills
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              letterSpacing: '2px',
              transition: { duration: 0.5, ease: [[0.43, 0.13, 0.23, 0.96]] },
            }}
            variants={letter}
            initial='initial'
            animate='animate'
            onClick={() => handleScroll('#project')}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.05,
              letterSpacing: '2px',
              transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            variants={letter}
            initial='initial'
            animate='animate'
            onClick={() => handleScroll('#footer')}
          >
            Contact Me
          </motion.li>
        </motion.ul>
      </div>
      <motion.div
        variants={letter}
        initial='initial'
        animate='animate'
        className='hamburger'
      >
        <TimeComponent />
      </motion.div>
    </Main>
  )
}
const Main = styled.header`
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  gap: 15rem;
  align-items: center;
  padding: 2rem 0;
  max-height: 3rem;
  font-size: 18px;
  .headerName {
    @media screen and (max-width: 640px) {
      width: max-content;
    }
    @media screen and (max-width: 450px) {
      font-size: 13px;
      padding: 1rem;
      width: max-content;
    }
  }
  @media screen and (max-width: 640px) {
    padding: 0 3rem;
    gap: 4rem;
  }
  .hamburger {
    display: none;
    @media screen and (max-width: 640px) {
      display: block;
    }
  }

  .nav-container ul {
    justify-content: center;
    align-items: center;
    display: flex;
    color: #d6e5fa;
    gap: 2rem;
    cursor: pointer;
    li {
      position: relative;
      padding: 0.3rem 0;
    }
    li::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #ff6363;
      transition: all 0.5s ease-out;
    }
    li:hover::after {
      width: 100%;
    }

    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`

export default Header
