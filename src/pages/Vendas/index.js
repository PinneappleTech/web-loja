import React from 'react';

import { FiSearch } from 'react-icons/fi';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import {
  Container,
  Content,
  TableSale,
  Table,
  TopForm,
  FooterForm,
  Footer,
} from './styles';

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
                <TopForm>
                  <div className="top">
                    <div className="input-text">
                      <label htmlFor="">Cliente</label>
                      <input type="text" />
                      <button type="button">
                        <FiSearch />
                      </button>
                    </div>
                    <div className="select-input">
                      <label htmlFor="type">Tipo</label>
                      <select name="type" id="type">
                        <option>Á vista</option>
                      </select>
                    </div>
                    <div className="number-sale">
                      <span>Número da Venda: </span>
                      <strong>00015</strong>
                    </div>
                    <div className="data-input">
                      <span>Data: </span>
                      <span>06/08/2020</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="select-input">
                      <label htmlFor="type">Vendedor</label>
                      <select name="type" id="type">
                        <option>Á vista</option>
                      </select>
                    </div>
                    <div className="select-input">
                      <label htmlFor="type">Tipo Pag</label>
                      <select name="type" id="type">
                        <option>Á vista</option>
                      </select>
                    </div>
                  </div>
                </TopForm>
                <hr />
                <FooterForm>
                  <div className="input-text item">
                    <label htmlFor="">Item</label>
                    <input type="text" />
                  </div>
                  <div className="input-text qtde">
                    <label htmlFor="">Qtde</label>
                    <input type="text" />
                  </div>
                  <div className="input-text cod">
                    <label htmlFor="">Cod. Produto</label>
                    <input type="text" />
                  </div>
                  <div className="input-text categ">
                    <label htmlFor="">Categoria</label>
                    <input type="text" />
                  </div>
                  <div className="input-text price">
                    <label htmlFor="">Preço Venda</label>
                    <input type="text" />
                  </div>
                </FooterForm>
              </form>
              <Table>
                <thead>
                  <th>Item</th>
                  <th>Produtos</th>
                  <th>Descrição do Produto</th>
                  <th>Qtde</th>
                  <th>Und</th>
                  <th>Vendas</th>
                  <th>Total</th>
                </thead>
                <tbody>
                  <tr>
                    <td>0000</td>
                    <td>001</td>
                    <td>Venda dos Produtos</td>
                    <td>84053</td>
                    <td>5</td>
                    <td>2,00</td>
                    <td>R$ 0,00</td>
                  </tr>
                  <tr>
                    <td>0000</td>
                    <td>001</td>
                    <td>Venda dos Produtos</td>
                    <td>84053</td>
                    <td>5</td>
                    <td>2,00</td>
                    <td>R$ 0,00</td>
                  </tr>
                  <tr>
                    <td>0000</td>
                    <td>001</td>
                    <td>Venda dos Produtos</td>
                    <td>84053</td>
                    <td>5</td>
                    <td>2,00</td>
                    <td>R$ 0,00</td>
                  </tr>
                </tbody>
              </Table>
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
