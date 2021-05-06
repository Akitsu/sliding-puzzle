import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const AppRoot = createGlobalStyle`
  * {
    font-family: Roboto
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AppRoot />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
