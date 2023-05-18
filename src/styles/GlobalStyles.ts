import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  body {
    background-color: ${props => props.theme.colors["base-background"]};
  }
`