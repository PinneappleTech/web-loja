import React, { useEffect, useRef, useState } from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';
import { Form } from '@unform/web';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';
import Select from '../../components/Select';
import { dateBRL } from '../../utils/date';

import {
  Container,
  Content,
  TableSale,
  Table,
  TopForm,
  FooterForm,
  Footer,
  TotalContainer,
} from './styles';

function Vendas() {
  const token = localStorage.getItem('@annaStore:token');
  const { user } = useAuth();
  const formRef = useRef(null);
  const [clientes, setClientes] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const [codProduto, setCodProduto] = useState('');
  const [qtde, setQtde] = useState(0);
  const [items, setItems] = useState([]);
  const [totalCompra, setTotalCompra] = useState(0.0);

  useEffect(() => {
    const loadClientes = async () => {
      const response = await api.get('/clientes/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setClientes(response.data);
    };
    loadClientes();
  }, []);

  useEffect(() => {
    const loadVendedores = async () => {
      const response = await api.get('/usuarios/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setVendedores(response.data);
    };
    loadVendedores();
  }, []);

  const optionsClientes = clientes.map(cliente => ({
    label: cliente.nome,
    value: cliente.id,
  }));

  const optionsVendedores = vendedores.map(vendedor => ({
    label: `${vendedor.first_name} ${vendedor.last_name}`,
    value: vendedor.id,
  }));

  const handleSubmit = data => {
    console.log(data);
  };

  const handleItem = async () => {
    const response = await api.get(`/produtos/${codProduto}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const prod = response.data;
    const totalItem = qtde * Number(prod.preco);
    const newItem = {
      cod: codProduto,
      descricao: prod.descricao,
      qtde,
      valor_unitario: `R$ ${prod.preco}`,
      total: `R$ ${totalItem}`,
    };
    setItems([...items, newItem]);
    setTotalCompra(totalCompra + totalItem);
  };
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Vendas" />
          <main className="main">
            <div className="top-bar-status">
              <div className="operator">
                <span>Operador: {user.nome}</span>
              </div>
              <div className="status-box">
                <span>Status do Caixa</span>
                <button type="button">Aberto</button>
              </div>
            </div>

            <TableSale>
              <header>Venda</header>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <TopForm>
                  <div className="top">
                    <div className="input-text">
                      <label htmlFor="Cliente">Cliente</label>
                      <Select
                        name="cliente"
                        placeholder="Selecione o Cliente"
                        options={optionsClientes}
                        icon={IoMdArrowDropdown}
                      />
                    </div>
                    <div className="data-input">
                      <span>Data: </span>
                      <span>{dateBRL()}</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="select-input">
                      <label htmlFor="type">Vendedor</label>
                      <Select
                        name="vendedor"
                        placeholder="Selecione o vendedor"
                        options={optionsVendedores}
                        icon={IoMdArrowDropdown}
                      />
                    </div>
                    <div className="select-input">
                      <label htmlFor="type">Tipo Pag</label>
                      <Select
                        name="tipo_pag"
                        placeholder="Selecione o tipo de pagamento"
                        options={[
                          {
                            label: 'À vista',
                            value: 'À vista',
                          },
                          {
                            label: 'À Prazo',
                            value: 'À prazo',
                          },
                        ]}
                        icon={IoMdArrowDropdown}
                      />
                    </div>
                  </div>
                </TopForm>
                <hr />
                <FooterForm>
                  <div className="input-text">
                    <label htmlFor="">Cod. Produto</label>
                    <input
                      type="text"
                      name="id"
                      onChange={e => setCodProduto(e.target.value)}
                    />
                  </div>
                  <div className="input-text">
                    <label htmlFor="">Qtde</label>
                    <input
                      type="text"
                      name="quantidade"
                      onChange={e => setQtde(Number(e.target.value))}
                    />
                  </div>

                  <button type="button" className="submit" onClick={handleItem}>
                    Adicionar
                  </button>
                </FooterForm>
              </Form>
              <Table>
                <thead>
                  <th>Cod. Produto</th>
                  <th>Descrição do Produto</th>
                  <th>Qtde</th>
                  <th>Valor Unitário</th>
                  <th>Total</th>
                  <th>Ações</th>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr>
                      <td>{item.cod}</td>
                      <td>{item.descricao}</td>
                      <td>{item.qtde}</td>
                      <td>{item.valor_unitario}</td>
                      <td>{item.total}</td>
                      <td>-</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableSale>
            <TotalContainer>
              <span>Total: </span>
              <span>{` R$ ${totalCompra}`}</span>
            </TotalContainer>
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
