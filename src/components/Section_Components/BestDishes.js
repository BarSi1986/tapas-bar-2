import React, { useContext } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../UI_Components/H1_header'
import Button from '../UI_Components/OutlinedButton'
import AppContext from '../../context/AppContext'

const DishWrapper = styled.section`
height: 90vh;
width: 100%;
background: transparent;
position: relative;
overflow: hidden;
@media (max-width: 750px){
    height: 80vh; 
}
`
const ImagesWrapper = styled.div`
transition: ${props => props.theme.main_transition};
height: 100%;
width: 200%;
position: absolute;
top: 0;
left: 0;
display: flex;
.image{
    width: 50%; 
    position: relative;
    .chevron{
        background: transparent;
        border: none;
        position: absolute;
        padding: 0 40px;
        transition: ${props => props.theme.main_transition};
        outline: none;
        @media (max-width: 750px){
            padding: 0 15px;
        }
    }
}
.image1{
    .chevron-right{
        top: 50%;
        transform: translateY(-50%);
        right: 60px;
        cursor: pointer;
        &:hover{
            right: 35px;
        }
        @media (max-width: 750px){
            right: 50%;
            transform: translateX(50%);
            top: 50px;
            &:hover{
                right: 49%;
            }
        }
    }
}
.image2{
    .chevron-left{
        bottom: 50%;
        transform: translateY(50%);
        left: 60px;
        cursor: pointer;
        &:hover{
            left: 35px;
        }
        @media (max-width: 750px){
            left: 50%;
            transform: translateX(-50%);
            bottom: 50px;
            &:hover{
                left: 51%;
            }
              
        }
    }
}
&.moved{
    transform: translateX(-50%);
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

const DescriptionWrapper1 = styled.div`
position: absolute;
bottom: 10px;
left: 30px;
width: 50%;
transition: .5s ease;
p{
    color: ${props => props.theme.main_white};
    font-family: ${props => props.theme.para1_font};
    font-size: 1.2em;
    padding: 25px 0;
}
&.effect{
    bottom: 0;
    opacity: 0;
}
@media (max-width: 750px) {
    width: 90%;
    h1{
        font-size: 3.5em;
    }
}
`

const DescriptionWrapper2 = styled.div`
position: absolute;
right: 30px;
width: 50%;
text-align: right;
transition: .5s ease;
p{
    color: ${props => props.theme.main_white};
    font-family: ${props => props.theme.para1_font};
    font-size: 1.2em;
    padding: 25px 0;
}
    opacity: 0;
    top: 0px;
&.effect{
    top: 20px;
    opacity: 1;
}
@media (max-width: 750px) {
    width: 90%;
    h1{
        font-size: 3.5em;
    }
    &.effect{
        top: 20px;
    }
}
`


const Chevron = styled(Img)`
 width: 50px;
 @media (max-width: 750px){
     width: 35px;
 }
`

const BestDishes = () => {

    const { dishesClicked, setDishesClicked, descriptionHide, setDescriptionHide } = useContext(AppContext)
    const moveDishes = () => {
        setDescriptionHide(!descriptionHide)
        setTimeout(() => {
            setDishesClicked(!dishesClicked)
        }, 300)
    }

    const data = useStaticQuery(graphql`
    query DishesImagesQuery {
        image1: file(relativePath: {eq: "dish3.jpeg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: {eq: "dish2.jpeg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid    
            }
          }
        }
        image3: file(relativePath: {eq: "chevron-right.png"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          }
          image4: file(relativePath: {eq: "chevron-left.png"}) {
            childImageSharp {
              fluid (quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid    
              }
            }
          }
      }
    `)

    return (
        <DishWrapper>
            <ImagesWrapper className={dishesClicked && "moved"}>
                <div className="image image1">
                    <StyledImg
                        fluid={data.image1.childImageSharp.fluid}
                    />

                    <DescriptionWrapper1 className={descriptionHide && 'effect'}>
                        <Header className="dish__header dish__header__1" text="Honey Chicken Curry" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias aliquid beatae in, voluptatum maiores ullam mollitia facere sint ab.</p>
                        <Button text="VIEW ALL" />
                    </DescriptionWrapper1>

                    <button className="chevron chevron-right" onClick={moveDishes}>
                        <Chevron
                            fluid={data.image3.childImageSharp.fluid}
                        />
                    </button>

                </div>
                <div className="image image2">
                    <StyledImg
                        fluid={data.image2.childImageSharp.fluid}
                    />

                    <DescriptionWrapper2 className={descriptionHide && 'effect'}>
                        <Header className="dish__header dish__header__1" text="Spicy Sesame Soup" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias aliquid beatae in, voluptatum maiores ullam mollitia facere sint ab.</p>
                        <Button text="VIEW ALL" />
                    </DescriptionWrapper2>
                    <button className="chevron chevron-left" onClick={moveDishes}>
                        <Chevron
                            fluid={data.image4.childImageSharp.fluid}
                        />
                    </button>
                </div>
            </ImagesWrapper>
        </DishWrapper>
    )
}

export default BestDishes
