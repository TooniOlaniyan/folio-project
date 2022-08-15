import React from 'react'
import styled from 'styled-components'
import {RiTwitterFill} from 'react-icons/ri'
import {VscGithub} from 'react-icons/vsc'
import {BsInstagram} from 'react-icons/bs'
import TimeComponent from '../components/TimeComponent'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <Section>
      {/* <motion.div className='pop'>
        <motion.p
          whileInView={{ y: [-60, 0, -60] }}
          transition={{ duration: 5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 1 }}
        >
          Finally some color 🕺
        </motion.p>
      </motion.div> */}
      <Social>
        <a href='https://twitter.com' target='_blank'>
          Twitter
        </a>
        <a href='https://github.com/TooniOlaniyan' target='_blank'>
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/tooni-olaniyan-a3144222b/'
          target='_blank'
        >
          Linkedin
        </a>
      </Social>
      <div className='date'>
        <TimeComponent />
        <p>Designed By : 🙋‍♂️</p>
      </div>

      <div className='otherPart'>
        <button className='contact'>Contact Me</button>
      </div>
    </Section>
  )
}

const Section = styled.div`
  display: flex;
  margin-top: 12rem;
  justify-content: center;
  align-items: center;
  /* background-color: #ff6363; */
  padding: 3rem;
  position: relative;
  overflow: hidden;
  gap: 10rem;

  .pop {
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    font-size: 19px;
    font-weight: 900;
    font-style: italic;
  }
  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    letter-spacing: 2px;
  }
  .otherPart {
    /* border: 2px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #232622;
      font-size: 18px;
      letter-spacing: 3px;
      overflow: hidden;
    }
    button {
      font-family: 'Aboreto', cursive;
      font-size: 40px;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      background-color: #7d0633;
      color: white;
      font-weight: 700;
      border: none;
      &:hover {
        color: #ff87b2;
      }
    }
  }
`
const Social = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  gap: 1rem;

  a {
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem 0;
    gap: 1rem;
    font-size: 28px;
    letter-spacing: 4px;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 4px;
      bottom: 0;
      left: 0;
      background-color: #f05454;
      transition: all 0.7s ease-out;
    }
  }
  a:hover::before {
    width: 100%;
  }
`

export default Footer