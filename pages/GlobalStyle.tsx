import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0; 
    height: 100%; 
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Rubik', sans-serif;
    height: 100%; 
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 2;
    color: #FFFFFF;
    background: black;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #FFFFFF;
    line-height: 1;
    margin: 0;
    font-weight: 700;
  }
`

export default GlobalStyle
