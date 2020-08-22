import React from 'react';

import { FiSearch } from 'react-icons/fi';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import { Container, Content, TableSale, Footer } from './styles';

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

            <TableSale>
              <header>Venda</header>
              <form>
                <div className="input-text">
                  <label htmlFor="cliente">Cliente</label>
                  <div>
                    <input type="text" name="cliente" id="cliente" />
                    <button type="button">
                      <FiSearch size={15} color="#ecba2b" />
                    </button>
                  </div>
                </div>
              </form>
            </TableSale>
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
