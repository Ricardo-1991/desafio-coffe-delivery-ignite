import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, input, textarea, button,strong {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
  }

  strong {
    color: #272221;
    font-family: 'Baloo 2', cursive;
    line-height: 1.4;
  }

  button {
    border: none;
    background: none;
  }

`