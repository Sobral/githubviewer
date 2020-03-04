import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding:0;
    margin:0;
    outline: 0;
    vertical-align:baseline;
    border:0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

`;
