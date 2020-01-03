import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Qwigley&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
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
    main_para: "#808080",
    secondary_header: "#FF7E66",
    primary_button: "#ff7d65",
    background_one: "#FFE3DD",

    // fonts
    header1_font: "'Qwigley', cursive",
    header2_font: "'Open Sans', sans-serif",
    para1_font: "'Lato', sans-serif",

    // transitions
    main_transition: "all 0.7s cubic-bezier(.17,.67,0,.99)",
}

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                {children}
            </React.Fragment>
        </ThemeProvider>

    )
}

export default Layout
