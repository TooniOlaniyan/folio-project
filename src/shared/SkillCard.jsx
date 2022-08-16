import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

function SkillCard({img , name , use}) {
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }
  return (
    <Container>
      <Image
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
      >
        {img}
      </Image>

      <Text
        initial={{ y: 20, opacity: 0, skewX: 10 }}
        whileInView={{ y: 0, opacity: 1, skewX: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, staggerChildren: 0.6 }}
      >
        <motion.p  className='name'>
          {name}
        </motion.p>
        <motion.p transition={{ delay: 2 }} className='use'>
          {use}
        </motion.p>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: 20vw;
  height: 20vh;
  display: flex;
  margin: 0 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1.5rem;
  background-color: #2c3333;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width:640px) {
    width: 70vw;
    
  }
  @media screen and (max-width:890px) {
    width: 70vw;
    
  }
 
  
`
const Image = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #413f42;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  flex-direction: column;
  width: 70%;
  overflow: hidden;
  .name {
    font-size: 1.5rem;
    width: fit-content;
    font-family: 'Nunito Sans', sans-serif;
    overflow: hidden;
    transition: all 0.8s ease-in-out;
   
    &:hover {
      color: #ff6363;
      text-decoration: line-through;
      letter-spacing: 2px;
    }
  }
  .use {
    font-size: 0.8rem;
    width: 90%;
    font-family: 'Nunito Sans', sans-serif;
    overflow: hidden;
    transition: all 0.8s ease-in-out;
   
    &:hover {
      color: #ff6363;
    }
  }
`

export default SkillCard