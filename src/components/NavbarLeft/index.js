import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaChartPie, FaChartBar, FaClipboardList, FaDolly, FaDonate, FaIdCardAlt } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GiExitDoor } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { BsFillGearFill } from "react-icons/bs";




import Logo from '../../assets/Logo.svg';
import { Container } from './styles';

function NavbarLeft() {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo Anna Store" width="240" height="49" />
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
            <GoPerson size={20} color="#ECBA2B" />
            <Link to="/clientes">Clientes</Link>
          </div>
        </li>
        <li>
          <div className="link">
            <FaDonate size={20} color="#ECBA2B" />
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
            <FaIdCardAlt size={20} color="#ECBA2B" />
            <Link to="/funcionarios">Funcionários</Link>
          </div>
        </li>
        <li>
          <div className="link">
            <FaDolly size={20} color="#ECBA2B" />
            <Link to="/dashboard">Fornecedores</Link>
          </div>
        </li>
        <li>
          <div className="link">
            <FaClipboardList size={20} color="#ECBA2B" />
            <Link to="/dashboard">Referências</Link>
          </div>
        </li>
        <li>
          <div> 
            <FaChartPie size={20} color="#ECBA2B" />
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
            <FaChartBar size={20} color="#ECBA2B" />
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
            <BsFillGearFill size={20} color="#ECBA2B" />
            <Link to="/dashboard">Configuração</Link>
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
