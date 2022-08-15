import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'

function NameOnHover() {
  return (
    <div>
      <Circle
        initial={{
          attributeType: {
            startOffset: '100%',
          },
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'linear',
        }}
      >
        <svg viewBox='0 0 200 200'>
          <motion.path
            id='circle'
            d='
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
    '
            style={{
              fillOpacity: 0,
            }}
          ></motion.path>

          <text width='500'>
            <textPath
              alignmentBaseline='top'
              className='text'
              xlinkHref='#circle'
            >
              Tooni Olaniyan Tooni Olaniyan Tooni Olaniyan
            </textPath>
          </text>
        </svg>
      </Circle>
    </div>
  )
}

const Circle = styled(motion.div)`
  width: 150px;
  overflow: auto;

  @media screen and (max-width: 640px) {
    display: block;
  }
  svg {
      /* visibility: hidden; */
      .text {
          font-size: 28px;
      font-weight: 400;
      fill: white;
      
    }
  }
`

export default NameOnHover