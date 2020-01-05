import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background: transparent;
color: ${props => props.theme.main_white};
font-family: ${props => props.theme.para1_font};
border: 2px solid;
padding: 20px 35px;
font-weight: 400;
margin: 15px 0;
cursor: pointer;
position: relative;
overflow: hidden;
outline: none;
transition: ${props => props.theme.main_transition};
    p{
        padding: 0 !important;
        font-size: 1.5em !important;
        transition: ${props => props.theme.main_transition};
    }
    &:hover{
         box-shadow: 0 0 10px 2px rgba(255, 244, 128, 0.4);
         color: rgb(255, 244, 168);
         p{
            text-shadow: 0 0 15px rgba(255, 244, 128, 0.4);
            color: rgb(255, 244, 168);
         }
    }
`

const OutlinedButton = ({ text }) => {
    return (
        <Button>
            <p>{text}</p>
        </Button>
    )
}

export default OutlinedButton
