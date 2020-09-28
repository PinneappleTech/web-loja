import React from 'react';

import { MdPersonAdd } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
// import api from '../../services/api';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import {
  Container,
  Content,
  TableContainer,
  NameClient,
  FilterGroup,
} from './styles';

function InfoClient() {
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Informações do Cliente" />
          <main className="main">
            <div className="box-search">
              <header>
                <div>
                  <MdPersonAdd size={15} color="#515151" />
                </div>
                <span>Informações do Cliente</span>
              </header>
              <NameClient>
                <span>Araujo Barros</span>
              </NameClient>
              <FilterGroup>
                <input type="text" />
                <input type="text" placeholder="Filtro" />
                <button type="button">
                  <BiSearch />
                  Inativo
                </button>
              </FilterGroup>
            </div>
            <TableContainer>
              <thead>
                <th>Caixa</th>
                <th>Nº Doc</th>
                <th>Parc</th>
                <th>Vencimento</th>
                <th>Pago/Rec</th>
                <th>Débito</th>
                <th>Juros</th>
                <th>Status</th>
              </thead>
              <tbody>
                <tr>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                </tr>
              </tbody>
            </TableContainer>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default InfoClient;