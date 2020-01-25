import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import styled from 'styled-components'

import Hero from '../components/Section_Components/Hero'
import About from '../components/Section_Components/About'
import Recepie from '../components/Section_Components/Recepie'
import Specials from '../components/Section_Components/Specials'
import BestDishes from '../components/Section_Components/BestDishes'
import Services from '../components/Section_Components/Services'
import Gallery from '../components/Section_Components/Gallery'
import AboutBlog from '../components/Section_Components/AboutBlog'
import TheFood from '../components/Section_Components/TheFood'
import Contact from '../components/Section_Components/Contact'
import Map from '../components/Section_Components/Map'
import Footer from '../components/Section_Components/Footer'

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
            <AboutBlog />
            <TheFood />
            <Contact />
            <Map />
            <Footer />
        </Wrapper>
    )
}

export default AppWrapper
