import React from 'react';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import { Container, Content, Footer } from './styles';

function Vendas() {
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Vendas" />
          <main className="main">
            <div className="top-bar-status">
              <div className="operator">
                <span>Operador: Rodrigo Souza</span>
              </div>
              <div className="status-box">
                <span>Status do Caixa</span>
                <button type="button">Aberto</button>
              </div>
            </div>
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

export default Vendas;
