import React from 'react'
import styled from 'styled-components'

function TimeComponent() {
    
const referenceMonth = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const weekDays = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun']
    const date = new Date()
    const year = date.getFullYear()
    const month = referenceMonth[date.getMonth()]
    const day = weekDays[date.getDay()]

    const Time = styled.div`
    width: max-content;
      p {
        color: white;
        font-size: 15px;
         @media screen and (max-width: 640px) {
          font-size: 18px;
          width: max-content;
         }
         @media screen and (max-width: 450px) {
          font-size: 13px;
          padding: 1rem;
          width: max-content;
         }
      }
    `


   
  return (
    <Time>
        <p>{day},{month} {year} </p>

    </Time>
  )
}

export default TimeComponent