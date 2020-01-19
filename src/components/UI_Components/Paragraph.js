import React from 'react'
import styled from 'styled-components'

const Para = styled.p`
        font-family: ${props => props.theme.para1_font};
        font-weight: 400;
        font-size: 1.2em;
        color: ${props => props.theme.main_para};
        text-align: center;
        @media (max-width: 750px) {
           text-align: left;
        }
`

const Paragraph = ({ text }) => {
  return (
    <Para>
      {text}
    </Para>
  )
}

export default Paragraph
