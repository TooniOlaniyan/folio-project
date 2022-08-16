import React , {useState , useEffect} from 'react'
import Marquee from 'react-fast-marquee'
import {FaGitAlt , FaReact , FaHtml5 , FaCss3 , FaNodeJs} from 'react-icons/fa'
import {
  SiJavascript,
  SiFirebase,
  SiStyledcomponents,
  SiTailwindcss,
  SiFramer,
} from 'react-icons/si'
import styled from 'styled-components'
import SkillCard from '../shared/SkillCard'

function SkillsSlider() {


  
  return (

    <Section>
      <Marquee
        style={{ margin: '0 1rem' }}
        pauseOnHover={true}
        speed={100}
        gradient={false}
      >
        <SkillCard
          img={<FaGitAlt size={35} fill='white' />}
          name='GIT'
          use='I mainly use this for source control managment'
        />
        <SkillCard
          img={<FaReact size={35} fill='white' />}
          name='React'
          use='I use it to create Web app with Reusability'
        />
        <SkillCard
          img={<FaHtml5 size={35} fill='white' />}
          name='HTML5'
          use='I mainly use to layout markup structure'
        />
        <SkillCard
          img={<FaCss3 size={35} fill='white' />}
          name='CSS3'
          use='I use this to style and bring designs to life'
        />
        <SkillCard
          img={<FaNodeJs size={35} fill='white' />}
          name='Node'
          use='I use this in writing server scripting for applications'
        />
        <SkillCard
          img={<SiJavascript size={35} fill='white' />}
          name='GIT'
          use='I mainly use this for source control'
        />
        <SkillCard
          img={<SiFirebase size={35} fill='white' />}
          name='Firebase'
          use='I use as a backend server for data'
        />
        <SkillCard
          img={<SiStyledcomponents size={35} fill='white' />}
          name='Styled Component'
          use='I use this mainly as my styling framework'
        />
        <SkillCard
          img={<SiTailwindcss size={35} fill='white' />}
          name='TailWind'
          use='I use this framework for styling some project'
        />
        <SkillCard
          img={<SiFramer size={35} fill='white' />}
          name='FramerMotion'
          use='I use this as an Animation package for react'
        />
      </Marquee>
    </Section>
  )
}

const Section = styled.div`
    /* background-color: green; */
    margin-top: 5rem;
    width: 90vw;
    overflow: hidden;
    @media screen and (max-width:640px) {
      width: 90vw;
      
    }
   

    
`

export default SkillsSlider