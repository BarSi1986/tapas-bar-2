import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUtensils, faLeaf } from '@fortawesome/free-solid-svg-icons'

const ServiceWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 75%;
    margin: auto;
    padding: 40px;

    @media (max-width: 1000px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const BreakLine = styled.div`
background: #000;
width: 2px;
height: 60px;
@media (max-width: 600px) {
        display: none;
    }
`

const ServiceItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    @media (max-width: 600px) {
        margin: 10px;
    }
    p{
        font-family: ${props => props.theme.para1_font};
        font-weight: bold;
        font-size: 1.2em;
        @media (max-width: 1000px) {
        flex-direction: column;
    }
    @media (max-width: 600px) {
        font-size: 1.4em;
    }
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.main_red};
font-size: 4em;
margin: 10px;
`

const Services = () => {
    return (
        <ServiceWrapper>

            <ServiceItem>
                <StyledIcon icon={faLeaf} />
                <p>Fresh Ingredients</p>
            </ServiceItem>

            <BreakLine />

            <ServiceItem>
                <StyledIcon icon={faUtensils} />
                <p>Tasty Meals</p>
            </ServiceItem>

            <BreakLine />

            <ServiceItem>
                <StyledIcon icon={faThumbsUp} />
                <p>Quality Products</p>
            </ServiceItem>

        </ServiceWrapper>
    )
}

export default Services
