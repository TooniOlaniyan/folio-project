import React, {useRef, useState } from 'react'
import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'
import { PuffLoader } from 'react-spinners'
import {motion} from 'framer-motion'
import {toast} from 'react-toastify'
import emailjs from '@emailjs/browser'
import { useLocomotiveScroll } from 'react-locomotive-scroll'



function ContactMe({display , setDisplay}) {
  const form = useRef(null)
  const [loading , setIsLoading] = useState(false)
  const { scroll } = useLocomotiveScroll()
    const handleClick = () => {
        setDisplay(false)
        document.body.style.overflow = 'visible'
        scroll.start()
        
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const user = form.current.user_name.value
      setIsLoading(true)
      try {
       const response= await emailjs.sendForm(
          'service_ekels7q',
          'template_i18zn37',
          form.current,
          'ZaKHhYjCOKrElh5-x'
        )
        if(response.text === 'OK'){
          form.current.reset()
          toast.success(`Get back to you ASAP ${user}`)
          setIsLoading(false)

        }
        
      } catch (error) {
        toast.error(`Opps something went wrong ${user}`)
        setIsLoading(false)
        setTimeout(() => {
          form.current.reset()
        } , 1500)
        
      }
   


    }
   
  return (
    <Send data-scroll-sticky>
      <motion.div
        whileHover={{ rotate: 90 }}
        transition={{ duration: 0.2 }}
        className='close'
      >
        <GrClose size={30} onClick={handleClick} />
      </motion.div>

      <form onSubmit={handleSubmit} ref={form} className='form' action=''>
        <div className='userInput'>
          <Label htmlFor=''>Name</Label>
          <Input required name='user_name' type='text' />
        </div>
        <div className='userInput'>
          <Label htmlFor=''>Email</Label>
          <Input required name='user_email' type='email' />
        </div>
        <div className='userInput'>
          <Label htmlFor=''>Message</Label>
          <Textarea required maxLength={200} rows='5' name='message'></Textarea>
        </div>
        <Container>
          <p>Get back to you soon</p>
          <button>SEND  {loading && <PuffLoader size={45} color='#fff'/>}</button>
        </Container>
      </form>
    </Send>
  )
}

const Send = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-end;
  padding: 2rem 1rem;
  width: 500px;
  height: 500px;
  background-color: #f7ecde;
  top: 15rem;
  right: 1rem;
  border-radius: 5px;
  position: fixed;
  z-index: 999;
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
  }
  /* @media screen and (max-width: 890px) {
    top: 42rem;
    right: 0.5rem;
  } */
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    @media screen and (max-width: 600px) {
      width: 100vw;
      padding: 0 2rem;
      gap: 3rem;
    }

    .userInput {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
    }
  }
`
const Label = styled.label`
  font-family: 'Aboreto', cursive;
  font-size: 17px;
  font-weight: 600;
`
const Input = styled.input`
  width: 450px;
  font-size: 18px;
  border: none;
  border-bottom: 1.5px solid black;
  background-color: transparent;
  font-family: 'Aboreto', cursive;
  @media screen and (max-width: 600px) {
  font-size: 15px;
  width: 340px;
  
  }

  &:focus {
    outline: none;
    box-shadow: none!important;
  }
`
const Textarea = styled.textarea`
  width: 450px;
  border: none;
  background-color: transparent;
  font-size: 18px;
  border-bottom: 1.5px solid black;
  font-family: 'Aboreto', cursive;
  resize: none;
  @media screen and (max-width: 600px) {
    width:340px;
  }
  &:focus {
    outline: none !important;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  p {
    color: black;
    font-size: 18px;
    font-family: 'Aboreto', cursive;
    font-weight: 600;
  }
  button {
    padding: 0.2rem 1rem;
    width: 10rem;
    height: 4rem;
    border: none;
    font-size: 30px;
    background-color: #7d0633;
    border-radius: 10px;
    color: white;
    font-weight: 800;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: center;
    gap: 1rem;
    font-family: 'Aboreto', cursive;
    @media screen and (max-width: 600px) {
     padding: 0.7rem 5rem;
     width: 15rem;
    }
  }
`

export default ContactMe