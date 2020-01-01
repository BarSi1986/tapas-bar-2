import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import DoubleChevronDown from '../images/chevronDoubleDown.png'

import Img from 'gatsby-image'

import H1Header from './H1_header'



const HeroWrapper = styled.section`
    position: relative;
    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px) {
        text-align: center;
        height: 100vh;
        padding: 0 60px;
    }
    p{
        font-family: ${props => props.theme.header2_font};
        color: ${props => props.theme.main_white};
        font-size: 1.8em;
        position: absolute;
        bottom: 200px;
        @media (max-width: 750px) {
            margin-top: 45px;
            font-size: 1.3em;
        }
    }
    .double__chevron__down{
        position: absolute;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%);
        width: 90px;
        cursor: pointer;
        transition: .3s ease;
        padding: 20px;
        opacity: .7;
        &:hover{
            bottom: 62px;
        }
        @media (max-width: 750px) {
            width: 75px;
        }
    }
`

const StyldImg = styled(Img)`
position: absolute !important;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
&::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}
`
const Hero = () => {

    const data = useStaticQuery(graphql`
    query HeroImageQuery {
        file(relativePath: { eq: "hero4.jpeg" }) {
            childImageSharp {
                fluid(quality: 100 maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

    return (
        <HeroWrapper>
            <StyldImg
                fluid={data.file.childImageSharp.fluid}
            />
            <H1Header className="hero__header" text="Taste on Our Hands!" />
            <p>WELCOME</p>
            <img className="double__chevron__down" src={DoubleChevronDown} alt="double chevron down" />
        </HeroWrapper>
    )
}

export default Hero
