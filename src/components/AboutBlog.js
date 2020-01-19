import React from 'react'
import styled from 'styled-components'

import Header from '../components/H2_header'
import Para from '../components/Paragraph'

const AboutWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 70px 200px;
@media (max-width: 1000px) {
    padding: 100px 120px;
}
@media (max-width: 750px) {
    padding: 10px 15px;
    padding-top: 40px;
    align-items: flex-start;
}
`

const AboutBlog = () => {
    return (
     <AboutWrapper>
        <Header normalTxt='OUR' cursiveTxt="BLog" />
        <Para text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem cupiditate et, eius odio molestiae ad qui doloremque est nesciunt consequuntur assumenda laborum voluptatibus vel ipsa dicta, aspernatur eos tenetur officiis rerum. Dolorem adipisci cum earum doloribus? Hic, provident autem" />
     </AboutWrapper>
    )
}

export default AboutBlog
