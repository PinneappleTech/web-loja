import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.background};
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    -moz-osx-font-smoothing: grayscale;

  }

body, input, button {
  font-family: 'Roboto', -apple - system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans - serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: ${props => props.theme.font.large};
}

input, button {
  cursor: pointer;
}
`;

export default GlobalStyle;
