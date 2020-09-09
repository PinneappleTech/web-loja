import React from 'react';

import { MdPersonAdd, MdDeleteForever } from 'react-icons/md';
import { FaSearch, FaPen } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import { Container, Content, TableContainer, Footer } from './styles';

function Produtos() {
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Produtos" />
          <main className="main">
            <div className="buttons-container">
              <button type="button">Adicionar Produtos</button>
              <button type="button">Gerar Etiqueta</button>
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
                <tr>
                  <td>112121221921921021</td>
                  <td>222</td>
                  <td>Caneta</td>
                  <td>10</td>
                  <td>R$10</td>
                  <td className="actions">
                    <div>
                      <button type="button">
                        <AiFillEye size={12} color="#000" />
                      </button>
                      <button type="button">
                        <FaPen size={12} color="#000" />
                      </button>
                      <button type="button">
                        <MdDeleteForever size={12} color="#000" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>112121221921921021</td>
                  <td>222</td>
                  <td>Caneta</td>
                  <td>10</td>
                  <td>R$10</td>
                  <td className="actions">
                    <div>
                      <button type="button">
                        <AiFillEye size={12} color="#000" />
                      </button>
                      <button type="button">
                        <FaPen size={12} color="#000" />
                      </button>
                      <button type="button">
                        <MdDeleteForever size={12} color="#000" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>112121221921921021</td>
                  <td>222</td>
                  <td>Caneta</td>
                  <td>10</td>
                  <td>R$10</td>
                  <td className="actions">
                    <div>
                      <button type="button">
                        <AiFillEye size={12} color="#000" />
                      </button>
                      <button type="button">
                        <FaPen size={12} color="#000" />
                      </button>
                      <button type="button">
                        <MdDeleteForever size={12} color="#000" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </TableContainer>
          </main>
          <Footer>
            <button type="button" className="cancel">
              Cancelar
            </button>
            <button type="button" className="submit">
              Cadastrar
            </button>
          </Footer>
        </Content>
      </Container>
    </>
  );
}

export default Produtos;
