import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Button from '../UI_Components/PrimaryButton'
import Header from '../UI_Components/H2_header'

const ContactWrapper = styled.section`
    margin-top: 60px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* justify-content: center; */
    align-items: center;
    padding: 50px;
    @media (max-width: 750px) {
        padding: 20px;
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

const FormWrapper = styled.form`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
`

const InputWrapper = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
@media (max-width: 1000px) {
    flex-direction: column;
}
@media (max-width: 750px) {
   width: 100%;
}
`

const Input = styled.input`
padding: 10px 60px;
margin: 20px 0;
background: transparent;
border: 2px solid rgba(255,255,255,0.5);
color: ${props => props.theme.main_white};
font-family: ${props => props.theme.main_para};
outline-color: ${props => props.theme.primary_button};
&:focus{
    border-color: ${props => props.theme.primary_button};
}
&::placeholder{
    color: ${props => props.theme.main_white};
}
@media (max-width: 1250px) {
    padding: 10px 30px;
}
@media (max-width: 750px) {
   padding: 20px 30px;
   margin: 5px 0;
}
`

const TextArea = styled.textarea`
width: 80%;
padding: 10px 30px;
height: 300px;
background: transparent;
border: 2px solid rgba(255,255,255,0.5);
color: ${props => props.theme.main_white};
font-family: ${props => props.theme.main_para};
outline-color: ${props => props.theme.primary_button};
&:focus{
    border-color: ${props => props.theme.primary_button};
}
&::placeholder{
    color: ${props => props.theme.main_white};
}
@media (max-width: 750px) {
        width: 100%;
    }
`

const StyledBtn = styled(Button)`
width: 80%;
margin: 20px 0;
@media (max-width: 750px) {
        width: 100%;
    }
`

const StyledHeader = styled(Header)`
h2{
    color: ${props => props.theme.main_white};
    padding-bottom: 15px;
}
`

const Contact = () => {
    const data = useStaticQuery(graphql`
    query ContactImagesQuery {
        image1: file(relativePath: {eq: "contact_bg.jpg"}) {
          childImageSharp {
            fluid (quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid
            }}}}`);

    return (
        <ContactWrapper>
            <StyledImg
                fluid={data.image1.childImageSharp.fluid}
            />
            <StyledHeader normalTxt='Contact' cursiveTxt='Us' />
            <FormWrapper>
                <InputWrapper>
                    <Input placeholder="Your Name" />
                    <Input placeholder="Email address" />
                    <Input placeholder="Subject" />
                </InputWrapper>
                <TextArea placeholder="Your message" />
                <StyledBtn text='SUBMIT NOW' />
            </FormWrapper>
        </ContactWrapper>
    )
}

export default Contact
