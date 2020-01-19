import React from 'react'
import styled from 'styled-components'

import Header from '../UI_Components/H2_header'
import Para from '../UI_Components/Paragraph'
import Button from '../UI_Components/PrimaryButton'

const SpecialsWrapper = styled.section`
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

const Specials = () => {
    return (
        <SpecialsWrapper>
            <Header normalTxt='OUR' cursiveTxt="Specials" />
            <Para text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem cupiditate et, eius odio molestiae ad qui doloremque est nesciunt consequuntur assumenda laborum voluptatibus vel ipsa dicta, aspernatur eos tenetur officiis rerum." />
            <Button text="VIEW FULL MENU" />
        </SpecialsWrapper>
    )
}

export default Specials