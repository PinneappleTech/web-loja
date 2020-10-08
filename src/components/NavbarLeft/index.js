import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaUsers, FaTools } from 'react-icons/fa';
import { GiTakeMyMoney, GiExitDoor, GiStorkDelivery } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { useAuth } from '../../hooks/auth';

import { Logo } from '../../assets/images';
import { Container } from './styles';

function NavbarLeft() {
  const { signOut } = useAuth();
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
          <div className="link">
            <GiStorkDelivery size={20} color="#ECBA2B" />
            <Link to="/dashboard">Fornecedores</Link>
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
            <Link to="/" onClick={signOut}>
              Sair
            </Link>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default NavbarLeft;
