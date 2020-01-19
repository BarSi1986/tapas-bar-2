import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background: ${props => props.theme.primary_button};
color: ${props => props.theme.main_white};
font-family: ${props => props.theme.para1_font};
border: none;
padding: 20px 35px;
font-size: 1em;
font-weight: 400;
margin: 45px 0;
cursor: pointer;
position: relative;
overflow: hidden;
outline: none;
&::after{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 244, 128, 0.4);
                z-index: 1;
                transition: ${props => props.theme.main_transition};
                transform: translateY(100%);
                opacity: 0;
            }
            &:hover{
                &::after{
                    transform: translateY(0%);
                    opacity: 1;
                }
            }
`

const PrimaryButton = ({ text }) => {
    return (
        <Button>
            {text}
        </Button>
    )
}

export default PrimaryButton
