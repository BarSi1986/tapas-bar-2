import React from "react"
import Navigation from '../components/Navigation'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import Hero from '../components/Hero'


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Qwigley&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
    // colors
    main_red: "#FF0000",
    main_white: "#FFFFFF",

    // fonts
    header1_font: "'Qwigley', cursive",
    header2_font: "'Open Sans', sans-serif",

    // transitions
    main_transition: "all 0.7s cubic-bezier(.17,.67,0,.99)",
}

const AppWrapper = styled.div`
    transition: .2s ease;
    &.moved{
        transform: translateY(80px);
        filter: blur(15px);
    }
`

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <Navigation />
                <AppWrapper className="main__app__wrapper">
                    <Hero />
                </AppWrapper>
            </React.Fragment>
        </ThemeProvider>
    )
}
