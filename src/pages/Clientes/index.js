import React from 'react';

import { MdPersonAdd } from 'react-icons/md';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import { Container, Content } from './styles';

function Clientes() {
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header />
          <main className="main">
            <button type="button">
              <MdPersonAdd size={20} color="#515151" />
              Adicionar Clientes
            </button>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default Clientes;
