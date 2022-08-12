import React from 'react'
import styled from 'styled-components'

function Svg() {
  return (
    <Circle>
      <svg
        width='403px'
        height='403px'
        viewBox='0 0 403 403'
        version='1.1'
        // xmlns='http://www.w3.org/2000/svg'
        // xmlns:xlink='http://www.w3.org/1999/xlink'
      >
        <g
          id='btn-circle-wrap'
          stroke='none'
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'
        >
          <g
            id='btn-circle-wrapper'
            transform='translate(-237.000000, -465.000000)'
          >
            <g id='btn-circle' transform='translate(166.000000, 466.000000)'>
              <path
                d='M272.5,401 C383.233092,401 473,311.233092 473,200.5 C473,89.7669077 383.233092,0 272.5,0 C161.766908,0 72,89.7669077 72,200.5'
                id='Shape'
                stroke='#FFFFFF'
                opacity='0.331542969'
                transform='translate(272.500000, 200.500000) scale(-1, -1) translate(-272.500000, -200.500000) '
                strokeDasharray='944.9669799804688'
                style='stroke-dashoffset: 0px;'
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </Circle>
  )
}

const Circle = styled.div`
width: 500px;
height: 500px;
    
`

export default Svg