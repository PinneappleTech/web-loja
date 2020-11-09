import React, { useState, useEffect } from 'react';

import { MdPersonAdd, MdDeleteForever } from 'react-icons/md';
import { FaSearch, FaPen } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import {
  Container,
  Content,
  TableContainer,
  ActionsGroup,
  Actions,
} from './styles';
import api from '../../services/api';

function Funcionarios() {
  const [empoyllers, setEmpoyllers] = useState([]);
  const token = localStorage.getItem('@annaStore:token');

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('/usuarios/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setEmpoyllers(response.data);
    };
    loadUsers();
  }, [token]);
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Funcionários" />
          <main className="main">
            <Link to="/add-funcionarios">
              <MdPersonAdd size={20} color="#515151" />
              Adicionar Funcionários
            </Link>
            <div className="box-search">
              <header>
                <div>
                  <MdPersonAdd size={15} color="#515151" />
                </div>
                <span>Funcionários</span>
              </header>
              <div className="search">
                <div>
                  <FaSearch size={15} color="#515151" />
                  <input type="text" placeholder="Buscar Funcionarios" />
                </div>
              </div>
            </div>
            <TableContainer>
              <thead>
                <th>Cod.</th>
                <th>Nome do Funcionário</th>
                <th>Cargo</th>
                <th>Status</th>
                <th>Ações</th>
              </thead>
              <tbody>
                {empoyllers.map(empoylle => (
                  <tr key={empoylle.id}>
                    <td>{empoylle.id}</td>
                    <td>{empoylle.first_name}</td>
                    <td>{empoylle.tipo_usuario}</td>
                    <td>{empoylle.is_active ? 'Ativo' : 'Inativo'}</td>
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

export default Funcionarios;
