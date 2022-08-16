import React, { useState } from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

function ContactMe({display , setDisplay}) {
    const handleClick = () => {
        setDisplay(false)
    }
   
  return (
    <Send>
        <FaTimes onClick={handleClick} size={30}/>

    </Send>
  )
}

const Send = styled.div`
  width: 500px;
  height: 500px;
  background-color: #f7ecde;
  position: fixed;
  bottom: 0;
  right: 0;
`

export default ContactMe