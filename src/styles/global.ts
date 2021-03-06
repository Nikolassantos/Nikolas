import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* { 
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
    -moz-appearance: none; /* Remove estilo padrão do FireFox */
    appearance: none; /* Remove estilo padrão do FireFox*/

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

  input{
    border:none
  }

  li{
    list-style:none
  }
`
