import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';

const App = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
    <ToastContainer autoClose={3000} />
  </>
);

export default App;
