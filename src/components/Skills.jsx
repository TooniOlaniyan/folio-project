import React from 'react'
import Marquee from "react-fast-marquee";
import styled from 'styled-components';
import {motion} from 'framer-motion'
import SkillsSlider from './SkillsSlider';


function Skills() {
  return (
    <Main>
      <motion.div
        className='line'
        initial={{ width: 0, height: 0, x: 0, backgroundColor: null }}
        animate={{ width: '4px', height: '4px', x: '100%', backgroundColor: '#000' }}
      ></motion.div>
      <Marquee
        className='marquee'
        gradient={false}
        speed={100}
        pauseOnHover={true}
      >
        <p>MY-SKILLS MY-SKILLS MY-SKILLS</p>
      </Marquee>
      <div className='lineReverse'></div>
    </Main>
  )
}

const Main = styled.div`
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
margin-top: 5rem;
.marquee{
    p{
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3px;
        color: ;
        
    



}




    }
        

       
    
`
export default Skills