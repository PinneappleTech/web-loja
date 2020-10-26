import React, { useRef } from 'react';

import { Form } from '@unform/web';
import { ImUser } from 'react-icons/im';
import { toast } from 'react-toastify';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';
import Input from '../../components/InputForm';

import {
  Container,
  Content,
  Footer,
  FormLeft,
  InputGroup,
  Legend,
} from './styles';
import api from '../../services/api';

function Clientes() {
  const formRef = useRef(null);
  const token = localStorage.getItem('@annaStore:token');

  const handleSubmit = async () => {
    try {
      const response = await api.post('/clientes/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(response.data);
      toast.success('cadastrou');
    } catch (error) {
      console.log(error);
      toast.error('Deu error');
    }
  };
  return (
    <>
      <Container>
        <NavabarLeft />
        <Content>
          <Header titlePage="Clientes" />
          <main className="main">
            <header>
              <div>
                <ImUser size={12} color="#515151" />
              </div>
              <span>Adicionar Clientes</span>
            </header>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormLeft>
                <Input
                  name="nome"
                  type="text"
                  placeholder="Ex: Maria Raimunda"
                  label="Nome Completo"
                />
                <InputGroup>
                  <Input type="text" placeholder="RG" name="rg" label="RG" />
                  <Input
                    type="text"
                    placeholder="CPF/CPNJ"
                    name="cpf"
                    label="CPF/CPNJ"
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="DD/MM/AAAA"
                    name="data_nasc"
                    label="Data de Nascimento"
                  />
                  <Input
                    type="text"
                    placeholder="Masculino"
                    name="sexo"
                    label="Sexo"
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="Casado(a)"
                    name="estado_civil"
                    label="Estado Civil"
                  />
                  <Input
                    type="text"
                    placeholder="Mariazinha"
                    name="conjuge"
                    label="Conjuge"
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="Celular"
                    name="telefone"
                    label="Celular"
                  />
                  <Input
                    type="text"
                    placeholder="Telefone"
                    name="phone_recado"
                    label="Telefone"
                  />
                </InputGroup>
              </FormLeft>
              <div className="form-right">
                <div className="container-header">
                  <header>
                    <span>Status do Cliente</span>
                  </header>
                  <div className="checkbox-group">
                    <div className="checkbox-input">
                      <input
                        type="checkbox"
                        id="ativo"
                        value="1"
                        name="status"
                        checked
                      />
                      <label htmlFor="ativo">Ativo</label>
                    </div>
                    <div className="checkbox-input">
                      <input type="checkbox" id="spc" name="spc" value="2" />
                      <label htmlFor="spc">Spc</label>
                    </div>
                    <div className="checkbox-input">
                      <input
                        type="checkbox"
                        id="suspenso"
                        name="staus"
                        value="3"
                      />
                      <label htmlFor="suspenso">Suspenso</label>
                    </div>
                  </div>
                  <div className="status-limite">
                    <div className="status">
                      <span>Staus</span>
                      <div className="success" />
                    </div>
                    <div className="limite-input">
                      <label htmlFor="credito">Limite de Crédito</label>
                      <input
                        type="text"
                        name="credito"
                        placeholder="R$ 1.500,00"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="container-footer">
                  <fieldset>
                    <Legend>
                      <span>Endereço</span>
                      <hr />
                    </Legend>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="CEP"
                        name="cep"
                        label="CEP"
                      />
                      <Input
                        type="text"
                        placeholder="UF"
                        name="uf"
                        label="UF"
                      />
                    </InputGroup>
                    <Input
                      type="text"
                      placeholder="Cidade"
                      name="cidade"
                      label="Cidade"
                    />
                    <Input
                      type="text"
                      placeholder="Bairro"
                      name="bairro"
                      label="Label"
                    />
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Endereço"
                        className="endereco"
                        name="logradouro"
                        label="Logadouro"
                      />
                      <Input
                        type="text"
                        placeholder="Nº"
                        className="number"
                        name="numero"
                        label="Número"
                      />
                    </InputGroup>
                  </fieldset>
                </div>
                <Footer>
                  <button type="button" className="cancel">
                    Cancelar
                  </button>
                  <button type="submit" className="submit">
                    Cadastrar
                  </button>
                </Footer>
              </div>
            </Form>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default Clientes;
