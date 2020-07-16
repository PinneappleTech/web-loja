import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import { FaUsers, FaRegHandshake } from 'react-icons/fa';
import { GiTakeMyMoney, GiExitDoor } from 'react-icons/gi';
import { AiFillBook } from 'react-icons/ai';
import { FiGift } from 'react-icons/fi';

import { Container, NavBar } from './styles';

function Dashboard() {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Anna Store" />
      </header>

      <hr />
      <NavBar >
        <ul>
          <li>
            <Link to='/clientes'>
              <FaUsers color="#ECBA2B" size={150} />
              <span>Clientes</span>
            </Link>
          </li>
          <li>
            <Link to='/caixa'>
              <GiTakeMyMoney color="#ECBA2B" size={150} />
              <span>Caixa</span>
            </Link>
          </li>
          <li>
            <Link to='/contas'>
              <AiFillBook color="#ECBA2B" size={150} />
              <span>Contas</span>
            </Link>
          </li>
          <li>
            <Link to='/produtos'>
              <FiGift color="#ECBA2B" size={150} />
              <span>Produtos</span>
            </Link>
          </li>
          <li>
            <Link to='/vendas'>
              <FaRegHandshake color="#ECBA2B" size={150} />
              <span>Vendas</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <GiExitDoor color="#ECBA2B" size={150} />
              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </NavBar>
    </Container>


  );
}

export default Dashboard;
