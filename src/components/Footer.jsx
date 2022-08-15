import React from 'react'
import styled from 'styled-components'
import {RiTwitterFill} from 'react-icons/ri'
import {VscGithub} from 'react-icons/vsc'
import {BsInstagram} from 'react-icons/bs'
import TimeComponent from '../components/TimeComponent'

function Footer() {
  return (
    <Section>
      <div className='pop'>
        <p>Finally some color 🕺</p>
      </div>
      <Social>
        <a href=''>Twitter</a>
        <a href=''>GitHub</a>
        <a href=''>Instagram</a>
      </Social>

      <div className='otherPart'>
        <TimeComponent />
      </div>
    </Section>
  )
}

const Section = styled.div`
  display: flex;
  margin-top: 12rem;
  justify-content: space-around;
  align-items: center;
  background-color: #ff6363;
  /* height: 40vh; */
  position: relative;
  .pop{
    position: absolute;
    top: 0;
    left: 0;
  }
`
const Social = styled.div`
display: flex;
justify-content: center;
justify-content: center;
gap: 1rem;

a{
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    font-size: 25px;
   
}
    
`

export default Footer