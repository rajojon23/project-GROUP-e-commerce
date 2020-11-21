import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #ebc9a2;
  }

  *,
  *:before,
  *:after {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
