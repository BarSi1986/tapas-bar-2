import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import styled from 'styled-components'

import Hero from './Hero'
import About from './About'
import Recepie from './Recepie'
import Specials from './Specials'
import BestDishes from './BestDishes'
import Services from './Services'
import Gallery from './Gallery'

const Wrapper = styled.div`
transition: all 0.9s cubic-bezier(0.165, 0.84, 0.23, 0.995);
    &.open{
        transform: translateY(80px);
        filter: blur(5px);
    }
`
const AppWrapper = () => {
    const { isOpen } = useContext(AppContext)
    return (
        <Wrapper className={isOpen ? 'open' : null}>
            <Hero />
            <About />
            <Recepie />
            <Specials />
            <BestDishes />
            <Services />
            <Gallery />
        </Wrapper>
    )
}

export default AppWrapper
