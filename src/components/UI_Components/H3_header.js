import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    h3{
        font-size: 2.1em;
        font-family: ${props => props.theme.header2_font};
        font-weight: 400;
        color: ${props => props.theme.secondary_header};
        @media (max-width: 750px) {
        font-size: 1.9em;
    }
    }
`

const H3_header = ({ txt }) => {
    return (
        <HeaderWrapper>
            <h3>{txt}</h3>
        </HeaderWrapper>
    )
}

export default H3_header
