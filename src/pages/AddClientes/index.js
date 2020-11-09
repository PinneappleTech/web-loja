import React, { useRef, useState } from 'react';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Axios from 'axios';
import { ImUser } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import { toast } from 'react-toastify';
import { unMaskedTextValue } from '../../utils/unMasked';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';
import Input from '../../components/InputForm';
import Select from '../../components/Select';

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
  // const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  const token = localStorage.getItem('@annaStore:token');

  const handleSearchEndreco = async valor => {
    const cep = unMaskedTextValue(valor);
    console.log(cep);
    try {
      const response = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(response.data);
      setEndereco(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async data => {
    console.log(data);
    const { cpf } = data;
    const { cep } = data.endereco;
    const unMaskedCPF = unMaskedTextValue(cpf);
    const unMaskedCEP = unMaskedTextValue(cep);
    const newData = Object.assign(data, {
      cpf: String(unMaskedCPF),
      endereco: {
        cep: String(unMaskedCEP),
        uf: 'MA',
        cidade: endereco.localidade,
        bairro: endereco.bairro,
        logradouro: endereco.logradouro,
      },
      credito: 1.5,
    });
    console.log(newData);
    try {
      const response = await api.post('/clientes/', newData, {
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
                  <Input
                    type="text"
                    placeholder="RG"
                    name="rg"
                    label="RG"
                    mask="rg"
                  />
                  <Input
                    type="text"
                    placeholder="CPF/CPNJ"
                    name="cpf"
                    label="CPF"
                    mask="cpf"
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    type="date"
                    placeholder="DD/MM/AAAA"
                    name="data_nasc"
                    label="Data de Nascimento"
                  />
                  <Select
                    name="sexo"
                    placeholder="Selecione o sexo"
                    label="Sexo"
                    options={[
                      { label: 'Masculino', value: 'M' },
                      { label: 'Femenino', value: 'F' },
                    ]}
                    icon={IoMdArrowDropdown}
                  />
                </InputGroup>
                <InputGroup>
                  <Select
                    name="estado_civil"
                    placeholder="Selecione o Estado Civíl"
                    label="Estado Civíl"
                    options={[
                      { label: 'Casado(a)', value: '1' },
                      { label: 'Solteiro(a)', value: '4' },
                      { label: 'Divorciado(a)', value: '2' },
                      { label: 'Viúvo(a)', value: '5' },
                    ]}
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
                    name="fone"
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
                    <Scope path="endereco">
                      <InputGroup>
                        <Input
                          type="text"
                          placeholder="CEP"
                          name="cep"
                          label="CEP"
                          mask="cep"
                          onChange={e => handleSearchEndreco(e.target.value)}
                        />
                        <Input
                          type="text"
                          placeholder="UF"
                          name="uf"
                          label="UF"
                          defaultValue="MA"
                        />
                      </InputGroup>
                      <Input
                        type="text"
                        placeholder="Cidade"
                        name="cidade"
                        label="Cidade"
                        defaultValue={endereco.localidade}
                      />
                      <Input
                        type="text"
                        placeholder="Bairro"
                        name="bairro"
                        label="Bairro"
                        defaultValue={endereco.bairro}
                      />
                      <InputGroup>
                        <Input
                          type="text"
                          placeholder="Endereço"
                          className="endereco"
                          name="logradouro"
                          label="Logadouro"
                          defaultValue={endereco.logradouro}
                        />
                        <Input
                          type="text"
                          placeholder="Nº"
                          className="number"
                          name="numero"
                          label="Número"
                        />
                      </InputGroup>
                    </Scope>
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
