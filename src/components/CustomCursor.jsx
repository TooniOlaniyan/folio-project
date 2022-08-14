import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

function CustomCursor() {
    const cursorRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousemove',(e)=> {
            const {clientX , clientY} = e
            const mouseX = clientX - cursorRef.current.clientWidth/2
            const mouseY = clientY - cursorRef.current.clientHeight/2

            cursorRef.current.style.transform = `translate3d(${mouseX}px , ${mouseY}px , 0)`
        })
    })
  return (
    <Cursor ref={cursorRef}>

    </Cursor>
  )
}
const Cursor = styled.div`
  z-index: 1000;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #ea0000;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  position: fixed;

  @media screen and (max-width: 640px) {
    display: none;
  }
`

export default CustomCursor