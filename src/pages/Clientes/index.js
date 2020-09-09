import React from 'react';
import { Link } from 'react-router-dom';

import { MdPersonAdd, MdDeleteForever } from 'react-icons/md';
import { FaSearch, FaPen } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import { Container, Content, TableContainer } from './styles';

function Clientes() {
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header />
          <main className="main">
            <Link to="/add-clientes">
              <MdPersonAdd size={20} color="#515151" />
              Adicionar Clientes
            </Link>
            <div className="box-search">
              <header>
                <div>
                  <MdPersonAdd size={15} color="#515151" />
                </div>
                <span>Clientes</span>
              </header>
              <div className="search">
                <div>
                  <FaSearch size={15} color="#515151" />
                  <input type="text" placeholder="Buscar clientes" />
                </div>
              </div>
            </div>
            <TableContainer>
              <thead>
                <th>Cod.</th>
                <th>Nome</th>
                <th>CPF/CPNJ</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Ações</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td className="actions">
                    <div>
                      <div>
                        <AiFillEye color="#000" />
                      </div>
                      <div type="button">
                        <FaPen color="#000" />
                      </div>
                      <div type="button">
                        <MdDeleteForever color="#000" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </TableContainer>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default Clientes;
