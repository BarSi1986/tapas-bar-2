import React from "react"
import styled from 'styled-components'

import Layout from '../Layout/Layout'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'

const AppWrapper = styled.div`
    transition: .2s ease;
    &.moved{
        transform: translateY(80px);
        filter: blur(15px);
    }
`

export default () => {
    return (
        <Layout>
            <Navigation />
            <AppWrapper className="main__app__wrapper">
                <Hero />
                <About />
            </AppWrapper>
        </Layout>
    )
}
