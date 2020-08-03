import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Quicksand';
    src: url('../public/fonts/Quicksand-VariableFont.ttf');
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family:  Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

`;

export default GlobalStyle