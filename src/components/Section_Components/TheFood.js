import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const TheFoodWrapper = styled.section`
    width: 90%;
    height: 40vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    @media (max-width: 600px) {
     margin-top: 30px;
     width: 100%;
 }
`
const FoodItem = styled.div`
 width: 20%;
 margin: 10px;
 position: relative;
 overflow: hidden;
 @media (max-width: 1000px) {
     width: 35%;
     height: 40vh;
 }
 @media (max-width: 600px) {
     width: 85%;
     height: 40vh;
 }
`
const StyledImg = styled(Img)`
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const HowToMake = styled.div`
    position: absolute;
    width: 100%;
    height: 20vh;
    background: ${props => props.theme.main_white};
    border-radius: 50%;
    top: -10vh;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 5px -2px black;
    text-align: center;
    transition: ${props => props.theme.main_transition};
    p{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        transition: ${props => props.theme.main_transition};

        &:nth-of-type(1){
            font-family: ${props => props.theme.para1_font};
            font-weight: bold;
            font-size: 1.2em;
            top: 55%;
        }
        &:nth-of-type(2){
            font-family: ${props => props.theme.header1_font};
            color: ${props => props.theme.main_red};
            font-size: 2.5em;
            font-weight: bold;
            top: 65%;
        }
    }

    button{
        position: absolute;
        cursor: pointer;
        left: 50%;
        transform: translateX(-50%);
        top: 75%;
        background: ${props => props.theme.primary_button};
        color: ${props => props.theme.main_white};
        font-family: ${props => props.theme.para1_font};
        border: none;
        padding: 10px 25px;
        opacity: 0;
    }

    &:hover{
        height: 35vh;
        width: 150%;
        p{
            &:nth-of-type(1){
                top: 40%;
            }
            &:nth-of-type(2){
                top: 47%;
            }
        }
        button{
            top: 75%;
            opacity: 1;
            transition: ${props => props.theme.main_transition};
            transition-delay: .3s;
        }
    }
`

const TheFood = () => {

    const data = useStaticQuery(graphql`
    query TheFoodImagesQuery {
        image1: file(relativePath: {eq: "the_food1.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 800) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: {eq: "the_food2.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 800) {
                ...GatsbyImageSharpFluid    
            }
          }
        }
        image3: file(relativePath: {eq: "the_food3.jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 800) {
                  ...GatsbyImageSharpFluid    
              }
            }
          }
          image4: file(relativePath: {eq: "the_food4.jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 800) {
                  ...GatsbyImageSharpFluid    
              }
            }
          }
      }
    `)


    return (
        <TheFoodWrapper>
            <FoodItem>
                <HowToMake>
                    <p>HOW TO MAKE</p>
                    <p>TheFood</p>
                    <button>VIEW</button>
                </HowToMake>
                <StyledImg
                    fluid={data.image1.childImageSharp.fluid}
                />
            </FoodItem>
            <FoodItem>
                <HowToMake>
                    <p>HOW TO MAKE</p>
                    <p>TheFood</p>
                    <button>VIEW</button>
                </HowToMake>
                <StyledImg
                    fluid={data.image2.childImageSharp.fluid}
                />
            </FoodItem>
            <FoodItem>
                <HowToMake>
                    <p>HOW TO MAKE</p>
                    <p>TheFood</p>
                    <button>VIEW</button>
                </HowToMake>
                <StyledImg
                    fluid={data.image3.childImageSharp.fluid}
                />
            </FoodItem>
            <FoodItem>
                <HowToMake>
                    <p>HOW TO MAKE</p>
                    <p>TheFood</p>
                    <button>VIEW</button>
                </HowToMake>
                <StyledImg
                    fluid={data.image4.childImageSharp.fluid}
                />
            </FoodItem>
        </TheFoodWrapper>
    )
}

export default TheFood
