import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/H3_header'
import Para from '../components/Paragraph'

const RecepieWrapper = styled.div`
    height: 70vh;
    width: 100%;
    background: ${props => props.theme.background_one};
    display: flex;
    div{
        position: relative;
        width: 100%;
    }
`

const StyledImgBig = styled(Img)`
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const StyledImgSmall = styled(Img)`
   width: 150px !important;
   margin: 40px;
`

const TextSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 0px;
    text-align: center;
    padding: 0 70px;
    .header__wrapper{
        padding: 0 130px;
    }
`

const Recepie = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allImageSharp {
          nodes {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    console.log(data);


    return (
        <RecepieWrapper>
            <div>
                <StyledImgBig
                    fluid={data.allImageSharp.nodes[7].fluid}
                />
            </div>

            <TextSection>
                <div className="header__wrapper">
                    <Header txt="MAKE EVERY COOKING A SPECIAL MOMENT" />
                </div>
                <StyledImgSmall
                    fluid={data.allImageSharp.nodes[6].fluid}
                />

                <Para text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora exercitationem voluptatibus provident laborum temporibus corporis ex aut eum libero fugiat." />
            </TextSection>
        </RecepieWrapper>
    )
}

export default Recepie
