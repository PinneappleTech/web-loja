import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaUsers, FaTools } from 'react-icons/fa';
import { GiTakeMyMoney, GiExitDoor } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { HiDocumentReport } from 'react-icons/hi';

import { MdKeyboardArrowDown } from 'react-icons/md';

import { Logo } from '../../assets/images';
import { Container } from './styles';

function NavbarLeft() {
  return (
    <Container>
      <header>
        <Logo />
      </header>
      <ul>
        <li>
          <div className="link">
            <FaHome size={20} color="#ECBA2B" />
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </li>
        <li>
          <div className="link">
            <FaUsers size={20} color="#ECBA2B" />
            <Link to="/clientes">Clientes</Link>
          </div>
        </li>
        <li>
          <div className="link">
            <GiTakeMyMoney size={20} color="#ECBA2B" />
            <Link to="/vendas">Vendas</Link>
          </div>
        </li>
        <li>
          <div className="link">
            <FaBox size={20} color="#ECBA2B" />
            <Link to="/produtos">Produtos</Link>
          </div>
        </li>
        <li>
          <div className="link">
            <IoIosPeople size={20} color="#ECBA2B" />
            <Link to="/funcionarios">Funcionários</Link>
          </div>
        </li>
        <li>
          <div>
            <HiDocumentReport size={20} color="#ECBA2B" />
            <Link to="/dashboard">Relatórios</Link>
          </div>
          <div>
            <button type="button">
              <MdKeyboardArrowDown size={20} color="#ECBA2B" />
            </button>
          </div>
        </li>
        <li>
          <div>
            <BsGraphUp size={20} color="#ECBA2B" />
            <Link to="/dashboard">Financeiro</Link>
          </div>
          <div>
            <button type="button">
              <MdKeyboardArrowDown size={20} color="#ECBA2B" />
            </button>
          </div>
        </li>
        <li>
          <div>
            <FaTools size={20} color="#ECBA2B" />
            <Link to="/dashboard">Configurações</Link>
          </div>
          <div>
            <button type="button">
              <MdKeyboardArrowDown size={20} color="#ECBA2B" />
            </button>
          </div>
        </li>
        <li>
          <div className="link">
            <GiExitDoor size={20} color="#ECBA2B" />
            <Link to="/">Sair</Link>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default NavbarLeft;
