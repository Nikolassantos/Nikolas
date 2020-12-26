import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* { 
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }
  body{
    font-family: 'Space Mono', monoespaço;
  }
  a {
    text-decoration: none;
    color:inherit
  }
  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
