import React from "react"
import styled from 'styled-components'

import Layout from '../Layout/Layout'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Recepie from '../components/Recepie'
import Specials from '../components/Specials'
import BestDishes from '../components/BestDishes'

const AppWrapper = styled.div`
    transition: all 0.9s cubic-bezier(0.165, 0.84, 0.23, 0.995);
    &.open{
        transform: translateY(80px);
        filter: blur(5px);
    }
`

export default () => {
    return (
        <Layout>
            <Navigation />
            <AppWrapper id="main__app__wrapper">
                <Hero />
                <About />
                <Recepie />
                <Specials />
                <BestDishes />
            </AppWrapper>
        </Layout>
    )
}
