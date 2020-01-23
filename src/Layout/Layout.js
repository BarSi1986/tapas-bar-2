import React, { useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'normalize.css';
import AppContext from '../context/AppContext'


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
    primary_button: "#ff7d66",
    background_one: "#FFF2EC",

    // fonts
    header1_font: "'Qwigley', cursive",
    header2_font: "'Open Sans', sans-serif",
    para1_font: "'Lato', sans-serif",

    // transitions
    main_transition: "all 0.7s cubic-bezier(.17,.67,0,.99)",
}

const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [dishesClicked, setDishesClicked] = useState(false)
    const [descriptionHide, setDescriptionHide] = useState(false)
    const [hovered, setHovered] = useState(false)

    return (
        <AppContext.Provider value={{ isOpen, setIsOpen, dishesClicked, setDishesClicked, descriptionHide, setDescriptionHide, hovered, setHovered }}>
            <ThemeProvider
                theme={theme}
            >
                <React.Fragment>
                    <GlobalStyle />
                    {children}
                </React.Fragment>
            </ThemeProvider>
        </AppContext.Provider>

    )
}

export default Layout
