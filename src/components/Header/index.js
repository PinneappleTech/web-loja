import React from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

import Account from '../../assets/account_circle-24px.svg';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="header-container">
        <div className="header-items">
          <img src={Account} alt="Perfil do Usuário" />
          <span>Usuário</span>
          <MdKeyboardArrowDown size={24} color="#ecba2b" />
        </div>
      </div>
      <div className="breacrumps-container">
        <div className="breacrumps-items">
          <FaHome size={22} color="#515151" />
          <span>Dashboard</span>
          <span>&gt;</span>
          <span>Cliente</span>
        </div>
      </div>
    </Container>
  );
}

export default Header;
