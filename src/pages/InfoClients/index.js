import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { MdPersonAdd } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import api from '../../services/api';

import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import {
  Container,
  Content,
  TableContainer,
  NameClient,
  FilterGroup,
  DebitaAdvice,
} from './styles';

function InfoClient() {
  const [client, setClient] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem('@annaStore:token');
  useEffect(() => {
    const loadClient = async () => {
      const response = await api.get(`/clientes/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setClient(response.data);
    };
    loadClient();
  }, [id, token]);
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
                <span>{client.nome}</span>
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
                  <td>Supervisor</td>
                  <td>050524</td>
                  <td>03</td>
                  <td className="due-date">29/11/2019</td>
                  <td className="pay">20/11/2019</td>
                  <td>71,56</td>
                  <td>0,00</td>
                  <td className="status">PAGO</td>
                </tr>
                <tr>
                  <td>Supervisor</td>
                  <td>050524</td>
                  <td>03</td>
                  <td className="due-date">29/11/2019</td>
                  <td className="pay">20/11/2019</td>
                  <td>71,56</td>
                  <td>0,00</td>
                  <td className="status">PAGO</td>
                </tr>
                <tr>
                  <td>Supervisor</td>
                  <td>050524</td>
                  <td>03</td>
                  <td className="due-date">29/11/2019</td>
                  <td className="pay">20/11/2019</td>
                  <td>71,56</td>
                  <td>0,00</td>
                  <td className="status">PAGO</td>
                </tr>
                <tr>
                  <td>Supervisor</td>
                  <td>050524</td>
                  <td>03</td>
                  <td className="due-date">29/11/2019</td>
                  <td className="pay">20/11/2019</td>
                  <td>71,56</td>
                  <td>0,00</td>
                  <td className="status">PAGO</td>
                </tr>
                <tr>
                  <td>Supervisor</td>
                  <td>050524</td>
                  <td>03</td>
                  <td className="due-date">29/11/2019</td>
                  <td className="pay">20/11/2019</td>
                  <td>71,56</td>
                  <td>0,00</td>
                  <td className="status">PAGO</td>
                </tr>
              </tbody>
            </TableContainer>
            <DebitaAdvice>
              <span>ATENÇÃO</span>
              <p>
                Cliente Railson de Araujo Barros, encontra-se com um conta
                vencida na data 25/09/2019 no valor de 71,56.{' '}
              </p>
            </DebitaAdvice>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default InfoClient;
