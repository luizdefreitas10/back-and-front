import {  createGlobalStyle  } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: orange;
    }

    /* add custom scrollbar in global project 👇🏼👇🏼👻 */

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #0E1020;
    }

    ::-webkit-scrollbar-thumb {
      background: blue;
      border-radius: 20px;
    } */

    /* Cor do Texto selecionado 👇🏼👇🏼👻 */
    ::-moz-selection {
      color: white;
      background: blue;
    }

    ::selection {
      color: white;
      background: yellow;
    }
`