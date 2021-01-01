import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Montserrat', sans-serif;
  }
`