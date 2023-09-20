import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import 'normalize.css';
import { GlobalStyle } from './Style';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
