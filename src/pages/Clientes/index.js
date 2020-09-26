import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdPersonAdd, MdDeleteForever } from 'react-icons/md';
import { FaSearch, FaPen } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import api from '../../services/api';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import {
  Container,
  Content,
  TableContainer,
  ActionsGroup,
  Actions,
} from './styles';

function Clientes() {
  const [clients, setClients] = useState([]);
  const token = localStorage.getItem('@anastore/token');

  useEffect(() => {
    const loadClients = async () => {
      const response = await api.get('/clientes/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setClients(response.data);
    };
    loadClients();
  }, [token]);
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Clientes" />
          <main className="main">
            <Link to="/add-clientes">
              <MdPersonAdd size={20} color="#515151" />
              <span>Adicionar Clientes</span>
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
                {clients.map(client => (
                  <tr key={client.id || '-'}>
                    <td>{client.id || '-'}</td>
                    <td>{client.nome || '-'}</td>
                    <td>{client.cpf || '-'}</td>
                    <td>{client.fone || '-'}</td>
                    <td>{client.email || '-'}</td>
                    <td className="actions">
                      <ActionsGroup>
                        <Actions color="#B3ADAD">
                          <AiFillEye color="#fff" size={10} />
                        </Actions>
                        <Actions color="#35F28E">
                          <FaPen color="#fff" size={10} />
                        </Actions>
                        <Actions color="#EB3F3F">
                          <MdDeleteForever color="#fff" size={10} />
                        </Actions>
                      </ActionsGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableContainer>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default Clientes;
