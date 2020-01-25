import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faVimeo } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.section`
height: 25vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Header = styled.h2`
font-family: ${props => props.theme.header1_font};
font-size: 3em;
color: ${props => props.theme.main_red};
`

const IconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
 font-size: 1.5em;
 color: grey;
 margin: 10px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Header>Tapas</Header>
            <p>Copywright 2020. All rights reserved</p>
            <IconWrapper>
                <StyledIcon icon={faFacebook} />
                <StyledIcon icon={faTwitter} />
                <StyledIcon icon={faInstagram} />
                <StyledIcon icon={faLinkedin} />
                <StyledIcon icon={faVimeo} />
            </IconWrapper>

        </FooterWrapper>
    )
}

export default Footer
