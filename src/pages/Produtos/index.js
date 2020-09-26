import React, { useState, useEffect } from 'react';

import { MdPersonAdd, MdDeleteForever } from 'react-icons/md';
import { FaSearch, FaPen } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

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

function Produtos() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('@anastore/token');

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get('/produtos/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setProducts(response.data);
    };
    loadProducts();
  }, [token]);

  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Produtos" />
          <main className="main">
            <div className="buttons-container">
              <button type="button">Adicionar Produtos</button>
            </div>

            <div className="box-search">
              <header>
                <div>
                  <MdPersonAdd size={15} color="#515151" />
                </div>
                <span>Produtos</span>
              </header>
              <div className="search">
                <div>
                  <FaSearch size={15} color="#515151" />
                  <input type="text" placeholder="Buscar Produtos" />
                </div>
              </div>
            </div>
            <TableContainer>
              <thead>
                <th>Cod. de barras</th>
                <th>Cod. do produto</th>
                <th>Nome</th>
                <th>Estoque</th>
                <th>Preço</th>
                <th>Ações</th>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>-</td>
                    <td>{product.id}</td>
                    <td>{product.descricao}</td>
                    <td>{product.estoque}</td>
                    <td>{`R$ ${product.preco}`}</td>
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

export default Produtos;
