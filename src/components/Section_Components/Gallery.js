import React from 'react'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../UI_Components/H3_header'

const GalleryWrapper = styled.section`
    width: 100%;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        height: 150vh;
        width: 95%;
        margin: auto;
        grid-gap: 5px;
    }
`

const GalleryItem = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after{
        content: "";
        width: 0%;
        height: 0%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    &:hover{ 
        p{
            opacity: 1;
        }
        &::after{
            content: "";
            transition: ${props => props.theme.main_transition};
            position: absolute;
            background: rgba(190, 1, 1, 0.5);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            z-index: -1;
        }
    }


    &:nth-of-type(1){
        grid-column: 1 / 2;
        grid-row: 1;
    }
    &:nth-of-type(2){
        grid-column: 2 / 3;
        grid-row: 1;
        background: ${props => props.theme.background_one};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: initial;
        h3{
            letter-spacing: 10px;
            font-weight: bold;
 
        }
        &:hover{
        &::after{
            background: transparent;
            width: 0%;
            height: 0%;
        }
    }
    }
    &:nth-of-type(3){
        grid-column: 3 / 5;
        grid-row: 1;
        
    }
    &:nth-of-type(4){
        grid-column: 1 / 3;
        grid-row: 2;
    }
    &:nth-of-type(5){
        grid-column: 3 / 4;
        grid-row: 2;
    }
    &:nth-of-type(6){
        grid-column: 4 / 5;
        grid-row: 2;
    }

    @media (max-width: 1000px) {
        &:nth-of-type(1){
        grid-column: 1 / 2;
        grid-row: 1;
    }
    &:nth-of-type(2){
        grid-column: 2 / 3;
        grid-row: 1;
        h3{
            letter-spacing: 2px;
            font-weight: bold;
 
        }
    }
    &:nth-of-type(3){
        grid-column: 1 / 3;
        grid-row: 2;
        
    }
    &:nth-of-type(4){
        grid-column: 1 / 3;
        grid-row: 4;
    }
    &:nth-of-type(5){
        grid-column: 1 / 2;
        grid-row: 3;
    }
    &:nth-of-type(6){
        grid-column: 2 / 3;
        grid-row: 3;
    }
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

const Para = styled.p`
    font-family: ${props => props.theme.header2_font};
    color: ${props => props.theme.main_white};
    font-size: 2.2em;
    font-weight: bold;
    width: 70%;
    text-align: center;
    opacity: 0;
    transition: ${props => props.theme.main_transition};
    transition-delay: .2s;

    @media (max-width: 800px) {
        font-size: 1.5em;
    }
`

const Gallery = () => {

    const data = useStaticQuery(graphql`
    query GalleryImagesQuery {
        image1: file(relativePath: {eq: "gallery1.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: {eq: "gallery2.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        }
        image3: file(relativePath: {eq: "gallery3.jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          }
          image4: file(relativePath: {eq: "gallery4.jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          }
          image5: file(relativePath: {eq: "gallery5.jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          }
          image6: file(relativePath: {eq: "gallery6.jpg"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          }
      }
    `)

    return (
        <GalleryWrapper>
            <GalleryItem>
                <StyledImg
                    fluid={data.image1.childImageSharp.fluid}
                />
                <Para>SALTY STICKS</Para>
            </GalleryItem>
            <GalleryItem>
                <Header txt="GALLERY" />
            </GalleryItem>
            <GalleryItem>
                <StyledImg
                    fluid={data.image3.childImageSharp.fluid}
                />
                <Para>FREESTYLE SNACKS</Para>
            </GalleryItem>
            <GalleryItem>
                <StyledImg
                    fluid={data.image4.childImageSharp.fluid}
                />
                <Para>TASTY TORTILLAS</Para>
            </GalleryItem>
            <GalleryItem>
                <StyledImg
                    fluid={data.image2.childImageSharp.fluid}
                />
                <Para>GRILLED CORN</Para>
            </GalleryItem>
            <GalleryItem>
                <StyledImg
                    fluid={data.image6.childImageSharp.fluid}
                />
                <Para>TOP BURGERS</Para>
            </GalleryItem>
        </GalleryWrapper>
    )
}

export default Gallery
