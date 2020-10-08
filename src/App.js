import React from 'react';

import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { AuthProvider } from './hooks/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './services/history';

import Routes from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
      <ToastContainer autoClose={3000} />
    </AuthProvider>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
