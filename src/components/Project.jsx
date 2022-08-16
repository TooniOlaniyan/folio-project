import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import {BsGithub} from 'react-icons/bs'
import { GiCursedStar } from 'react-icons/gi'
import {IoArrowRedoOutline} from 'react-icons/io5'
import {motion} from 'framer-motion'
import NameOnHover from '../shared/NameOnHover'

function Project() {
  const [display , setDisplay] = useState(false)
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }
   const parent = {
     initial: {
       y: 0,
     },
     animate: {
       y: 0,
       transition: {
         staggerChildren: 0.8,
       },
     },
   }
     const letter = {
       initial: {
         y: 40,
         skewY:2,
         opacity: 0
       },
       animate: {
         y: 0,
         skewY:0,
         opacity: 1,
         transition: { duration: 1, ...transition },
       },
     }
  return (
    <Main>
      <RecentWorks>
        <motion.div
          className='star'
          whileInView={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'linear',
          }}
        >
          <GiCursedStar fill='#D6E5FA' />
        </motion.div>
        <motion.h1
          whileInView={{ y: [-40, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          RECENT PROJECTS_
        </motion.h1>
        <motion.div
          className='star'
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'linear',
          }}
        >
          <GiCursedStar fill='#D6E5FA' />
        </motion.div>
      </RecentWorks>
      <Works>
        <Text
          variants={parent}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <motion.h2 variants={letter}>An E-bike Landing Page</motion.h2>
          <motion.p variants={letter}>
            A landing page using <br /> React and tailwind
          </motion.p>
          {/* <div className='spin'>
            <NameOnHover/>
          </div> */}
        </Text>
        <Link>
          <motion.div
            whileInView={{ scale: [0, 1.1, 1], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className='image'
          >
            <img className='test' loading='lazy' src={project1} alt='' />
          </motion.div>

          <div className='links'>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target='_blank'
              href='https://github.com/TooniOlaniyan/bike-landingpage'
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target='_blank'
              href='https://ebike-landingpage.vercel.app/'
            >
              <IoArrowRedoOutline size={30} />
            </motion.a>
          </div>
        </Link>
      </Works>
      <Works>
        <Link>
          <motion.div
            whileHover={{ scale: 0.96 }}
            transition={{ duration: 0.8 }}
            className='image'
          >
            <img loading='lazy' src={project2} alt='' />
          </motion.div>
          <div className='links'>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target='_blank'
              href='https://github.com/TooniOlaniyan/form-validation'
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target='_blank'
              href='https://form-validation-mu-six.vercel.app/'
            >
              <IoArrowRedoOutline size={30} />
            </motion.a>
          </div>
        </Link>
        <Text
          variants={parent}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <motion.h2 variants={letter}>Email Form Validaton</motion.h2>
          <motion.p variants={letter}>
            A form validatin app using <br /> React and Firebase
          </motion.p>
        </Text>
      </Works>
      <Works>
        <Text
          variants={parent}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <motion.h2 variants={letter}>Cardtonic Landing Page</motion.h2>
          <motion.p variants={letter}>
            A clone of Cardtonic page <br /> using Reactjs
          </motion.p>
        </Text>
        <Link>
          <motion.div
            whileHover={{ scale: 0.96 }}
            transition={{ duration: 0.8 }}
            className='image'
          >
            <img loading='lazy' src={project3} alt='' />
          </motion.div>
          <div className='links'>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target='_blank'
              href='https://github.com/TooniOlaniyan/Cardtonic-Clone'
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target='_blank'
              href='https://cardtonic-clonelanding.vercel.app/'
            >
              <IoArrowRedoOutline size={30} />
            </motion.a>
          </div>
        </Link>
      </Works>
      <Works>
        <Link>
          <motion.div
            whileHover={{ scale: 0.96 }}
            transition={{ duration: 0.8 }}
            className='image'
          >
            <img loading='lazy' src={project4} alt='' />
          </motion.div>
          <div className='links'>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target='_blank'
              href='https://github.com/TooniOlaniyan/houseSale-App'
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target='_blank'
              href='https://house-sale-app-rosy.vercel.app/'
            >
              <IoArrowRedoOutline size={30} />
            </motion.a>
          </div>
        </Link>
        <Text
          variants={parent}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <motion.h2 variants={letter}>A House sale App</motion.h2>
          <motion.p variants={letter}>
            An app to Sell and List houses <br /> built with Reactjs
          </motion.p>
        </Text>
      </Works>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 17rem;
  gap: 13rem;
  @media screen and (max-width: 640px) {
    gap: 7rem;
    margin-top: 10rem;
  }
  @media screen and (max-width: 450px) {
    gap: 4rem;
    margin-top: 10rem;
  }


  

`

const RecentWorks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8rem;
  align-items: center;
  
  @media screen and (max-width: 640px) {
    width: 90vw;
    gap: 2rem;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
    gap: 0.7rem;
  }
  
  h1 {
    font-size: 70px;
    font-weight: 600;
  
    @media screen and (max-width: 640px) {
      font-size: 40px;
      width: max-content;
      /* background-color: red; */
    }
    @media screen and (max-width: 450px) {
      font-size: 30px;
      width: max-content;
      /* background-color: red; */
    }
    
    
  }
  .star {
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 60px;
    @media screen and (max-width: 640px) {
     font-size: 30px;

   }
    @media screen and (max-width: 450px) {
     display: none;

   }
  @media screen and (max-width: 890px) {
    display: none;
  }

   
    
  }
`
const Works = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  /* background-color: red; */
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
  
 
`

const Text = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
  /* overflow: hidden; */
  /* background-color: red; */
  @media screen and (max-width: 640px) {
    width: 85vw;
    margin: 0.5rem;
    align-items: flex-start;
  }
  @media screen and (max-width: 890px) {
    width: 85vw;
    align-items: flex-end;
    margin: 1rem;
  }

 

  h2 {
    font-size: 2rem;
    font-weight: 600;
    overflow: hidden;
    letter-spacing: 2px;
    @media screen and (max-width: 640px) {
      font-size: 1.3rem;
    }

    
  }
  p {
    overflow: hidden;
    font-size: 1rem;
    line-height: 1.7rem;
    letter-spacing: 2px;
    text-align: right;
    max-width: fit-content;
    @media screen and (max-width: 640px) {
      font-size: 0.8rem;
    }
 
   
  }
`
const Link = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  
  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    padding: 0.6rem;
    border: 1px solid #ff636341;
    border-radius: 20px;
    @media screen and (max-width: 640px) {
      width: 85vw;
    }
  @media screen and (max-width: 890px) {
    width: 85vw;
  }
   

    a {
      color: #d6e5fa;
    }
  }
  .image {
    width: 500px;
    height: 150px;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 640px) {
      width: 85vw;
      
    }
  @media screen and (max-width: 890px) {
    width: 85vw;
  }
  
  

    img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      object-fit: cover;
      transition: all 0.8s;
      &:hover {
        scale: 1.1;
      }
    }
  }
`
export default Project