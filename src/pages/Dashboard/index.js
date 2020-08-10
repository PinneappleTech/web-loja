import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';

import { Container, NavBar } from './styles';

function Dashboard() {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Anna Store" />
      </header>

      <hr />
      <NavBar>
        <ul>
          <li>
            <Link to="/clientes">
              <div className="image-cliente" />
              <span>Clientes</span>
            </Link>
          </li>
          <li>
            <Link to="/caixa">
              <div className="image-caixa" />
              <span>Caixa</span>
            </Link>
          </li>
          <li>
            <Link to="/contas">
              <div className="image-contas" />
              <span>Contas</span>
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              <div className="image-produtos" />
              <span>Produtos</span>
            </Link>
          </li>
          <li>
            <Link to="/vendas">
              <div className="image-vendas" />
              <span>Vendas</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="image-sair" />
              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </NavBar>
    </Container>
  );
}

export default Dashboard;
