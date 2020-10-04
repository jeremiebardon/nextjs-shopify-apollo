import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: auto;
  }
`