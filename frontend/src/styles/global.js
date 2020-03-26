import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font: 400 14px Roboto, sans-serif;    
  }

  body {
    background-color: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }


  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form textarea {
    width: 100%;
    min-height: 140px;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 4px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 4px;
    padding: 0 24px;
  }
`;
