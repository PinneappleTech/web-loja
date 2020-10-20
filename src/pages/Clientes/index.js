import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { MdPersonAdd, MdDeleteForever } from 'react-icons/md';
import { FaSearch, FaPen } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import api from '../../services/api';
import deleteItem from '../../utils/deleteitem';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import {
  Container,
  Content,
  TableContainer,
  ActionsGroup,
  Actions,
  Modal,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from './styles';

function Clientes() {
  const [clients, setClients] = useState([]);
  const token = localStorage.getItem('@annaStore:token');

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
  const deleteClient = useCallback(
    async (positionArray, clientId) => {
      try {
        await api.delete(`/clientes/${clientId}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        const clientsArry = deleteItem(clients, positionArray);
        setClients(clientsArry);
        toast.success('cliente excluido!');
      } catch (err) {
        toast.error('erro ao deletar');
      }
    },
    [clients, token],
  );
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
                {clients.map((client, index) => (
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
                        <Actions
                          color="#35F28E"
                          data-toggle="modal"
                          data-target="#ModalCenter"
                        >
                          <FaPen color="#fff" size={10} />
                        </Actions>
                        <Actions
                          color="#EB3F3F"
                          onClick={() => deleteClient(index, client.id)}
                        >
                          <MdDeleteForever color="#fff" size={10} />
                        </Actions>
                      </ActionsGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableContainer>

            <Modal
              className="modal fade"
              id="ModalCenter"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <ModalContainer
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <ModalContent className="modal-content">
                  <ModalHeader className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Detalhes do Cliente
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </ModalHeader>
                </ModalContent>
              </ModalContainer>
            </Modal>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default Clientes;
