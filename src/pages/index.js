import React from "react"
import Navigation from '../components/Navigation'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Qwigley&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Navigation />
        </React.Fragment>
    )
}
