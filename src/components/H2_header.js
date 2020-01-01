import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    h2{
        padding-bottom: 50px;
        font-size: 1.9em;
        font-family: ${props => props.theme.header2_font};
        font-weight: 600;
        color: ${props => props.theme.main_red};
        span{
            font-family: ${props => props.theme.header1_font};
            font-size: 1.9em;
        }
        @media (max-width: 750px) {
             font-size: 1.2em;
             padding-bottom: 30px;
             span{
                 font-size: 2.5em;
             }
        }
    }
`

const H2_header = ({ normalTxt, cursiveTxt }) => {
    return (
        <HeaderWrapper>
            <h2>{normalTxt} <span>{cursiveTxt}</span></h2>
        </HeaderWrapper>
    )
}

export default H2_header
