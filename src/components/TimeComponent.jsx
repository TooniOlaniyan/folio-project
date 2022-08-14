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
    /* background-color: red; */
    width: max-content;
      p {
        color: #ff6363a8;
        font-size: 20px;
         @media screen and (max-width: 640px) {
          font-size: 19px;
          width: min-content;
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