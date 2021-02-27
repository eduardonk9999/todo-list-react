import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@0;1&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #302F37;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Ropa Sans', sans-serif;
  }

  #root{
    max-width: 1440px;
    margin: 0 auto;
  }
  button{
    cursor: pointer;
  }
`;