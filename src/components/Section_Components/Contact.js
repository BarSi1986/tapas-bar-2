import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Button from '../UI_Components/PrimaryButton'
import Header from '../UI_Components/H2_header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const ContsctSection = styled.section`

`

const FormWrapper = styled.div`
    margin-top: 60px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
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

const Form = styled.form`
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

const ContactDetails = styled.div`
    width: 100%;
    background: ${props => props.theme.background_one};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
        flex-direction: column;
        padding: 40px 0;
    }
`

const Item = styled.div`
    width: 200px;
    margin: 40px 20px;
    background: black;
    z-index: 2;
    display: flex;
    flex-direction: column;

    @media (max-width: 750px) {
        width: 75%;
        margin: 10px 0px;
    }
`

const ImageWrapper = styled.div`
height: 120px;
position: relative;
img{
    filter: grayscale(100%);
    opacity: .3 !important;
}
`

const DetailsWrapper = styled.div`
    background: ${props => props.theme.main_white};
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    p{
        padding: 5px 5px;
        text-align: center;
        font-family: ${props => props.theme.header2_font};
        &:nth-of-type(1){
            font-weight: bold;
        }
        &:nth-of-type(2){
            color: grey;
        }
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
color: white;
font-size: 2em;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
`

const Contact = () => {
    const data = useStaticQuery(graphql`
query ContactImagesQuery {
    image1: file(relativePath: { eq: "contact_bg.jpg" }) {
        childImageSharp {
            fluid(quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    image2: file(relativePath: { eq: "contact_mail.jpg" }) {
        childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
                      ...GatsbyImageSharpFluid
            }
        }
    }
    image3: file(relativePath: { eq: "contact_location.jpg" }) {
        childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
                        ...GatsbyImageSharpFluid
            }
        }
    }
    image4: file(relativePath: { eq: "contact_phone.jpg" }) {
        childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
                        ...GatsbyImageSharpFluid
            }
        }
    }

} `);

    return (
        <ContsctSection>
            <FormWrapper>
                <StyledImg
                    fluid={data.image1.childImageSharp.fluid}
                />
                <StyledHeader normalTxt='Contact' cursiveTxt='Us' />
                <Form>
                    <InputWrapper>
                        <Input placeholder="Your Name" />
                        <Input placeholder="Email address" />
                        <Input placeholder="Subject" />
                    </InputWrapper>
                    <TextArea placeholder="Your message" />
                    <StyledBtn text='SUBMIT NOW' />
                </Form>
            </FormWrapper>
            <ContactDetails>
                <Item>
                    <ImageWrapper>
                        <StyledIcon icon={faEnvelope} />
                        <StyledImg
                            fluid={data.image2.childImageSharp.fluid}
                        />
                    </ImageWrapper>
                    <DetailsWrapper>
                        <p>EMAIL</p>
                        <p>tapas@blabla.com</p>
                    </DetailsWrapper>
                </Item>

                <Item>
                    <ImageWrapper>
                        <StyledIcon icon={faMapMarkerAlt} />
                        <StyledImg
                            fluid={data.image3.childImageSharp.fluid}
                        />
                    </ImageWrapper>
                    <DetailsWrapper>
                        <p>OUR RESTAURANT</p>
                        <p>431-12 Nguyen Khang, Hanoi Vietnam</p>
                    </DetailsWrapper>
                </Item>

                <Item>
                    <ImageWrapper>
                        <StyledIcon icon={faPhoneAlt} />
                        <StyledImg
                            fluid={data.image4.childImageSharp.fluid}
                        />
                    </ImageWrapper>
                    <DetailsWrapper>
                        <p>PHONE</p>
                        <p>(+478) -772 - 12467</p>
                    </DetailsWrapper>

                </Item>

            </ContactDetails>
        </ContsctSection>
    )
}

export default Contact
