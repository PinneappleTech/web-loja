import React from 'react';
import { Link } from 'react-router-dom';

import { Logo, Client, Box, Product, Sale, Logout } from '../../assets/images';

import { Container, NavBar } from './styles';

function Dashboard() {
  return (
    <Container>
      <header>
        <Logo />
      </header>

      <hr />
      <NavBar>
        <ul>
          <li>
            <Link to="/clientes">
              <Client />
              <span>Clientes</span>
            </Link>
          </li>
          <li>
            <Link to="/caixa">
              <Box />
              <span>Caixa</span>
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              <Product />
              <span>Produtos</span>
            </Link>
          </li>
          <li>
            <Link to="/vendas">
              <Sale />
              <span>Vendas</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Logout />
              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </NavBar>
    </Container>
  );
}

export default Dashboard;
