import React, { useRef, useState } from 'react';

import { Form } from '@unform/web';
import { ImUser } from 'react-icons/im';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import { Container, Content, Footer } from './styles';
import api from '../../services/api';

function Clientes() {
  const formRef = useRef(null);
  const history = useHistory();
  const token = localStorage.getItem('@annaStore:token');
  const [formInputData, setFormInputData] = useState({});

  const handleInputSbmit = event => {
    const { name, value } = event.target;
    setFormInputData({ ...formInputData, [name]: value });
  };

  const handleSubmit = async () => {
    const {
      nome,
      rg,
      cpf,
      data_nasc,
      sexo,
      fone_recado,
      fone,
      estado_civil,
      conjuge,
      apelido,
      filiacao,
      email,
      logradouro,
      numero,
      cidade,
      uf,
      cep,
      bairro,
    } = formInputData;

    const dataSubmit = {
      nome,
      rg,
      cpf,
      data_nasc,
      sexo,
      fone_recado,
      fone,
      estado_civil,
      conjuge,
      apelido,
      filiacao,
      email,
      endereco: {
        logradouro,
        numero,
        cidade,
        uf,
        cep,
        bairro,
      },
      credito: 1500,
    };

    try {
      await api.post('/clientes/', dataSubmit, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      history.push('/clientes');
      toast.success('Cadastro Realizado');
    } catch (error) {
      toast.error('Error!, verifique seus dados e tente novamente');
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
              <div className="form-left">
                <input
                  name="nome"
                  type="text"
                  placeholder="Nome Completo"
                  onChange={handleInputSbmit}
                />
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="RG"
                    name="rg"
                    onChange={handleInputSbmit}
                  />
                  <input
                    type="text"
                    placeholder="CPF/CPNJ"
                    name="cpf"
                    onChange={handleInputSbmit}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="date"
                    placeholder="Data de Nascimento"
                    name="data_nasc"
                    onChange={handleInputSbmit}
                  />
                  <select
                    name="sexo"
                    id="sexo"
                    onChange={handleInputSbmit}
                    defaultValue=""
                  >
                    <option value="" selected disabled>
                      Selecione o genero
                    </option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </select>
                </div>
                <div className="input-group">
                  <input
                    type="tel"
                    placeholder="Telefone Fixo (Opicional)"
                    name="fone_recado"
                    onChange={handleInputSbmit}
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    name="fone"
                    onChange={handleInputSbmit}
                  />
                </div>
                <div className="input-group">
                  <select
                    name="estado_civil"
                    id="estado-civil"
                    onChange={handleInputSbmit}
                    defaultValue=""
                  >
                    <option value="1">Casado(a)</option>
                    <option value="2">Divorciado(a)</option>
                    <option value="3">Separado(a)</option>
                    <option value="4">Solteiro(a)</option>
                    <option value="5">Viuvo(a)</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Conjuge (Opicional)"
                    name="conjuge"
                    onChange={handleInputSbmit}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Apelido"
                    name="apelido"
                    onChange={handleInputSbmit}
                  />
                  <input
                    type="text"
                    placeholder="Afiliação"
                    name="filiacao"
                    onChange={handleInputSbmit}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Endereço de E-mail"
                  name="email"
                  onChange={handleInputSbmit}
                />
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Endereço"
                    className="endereco"
                    name="logradouro"
                    onChange={handleInputSbmit}
                  />
                  <input
                    type="text"
                    placeholder="Nº"
                    className="number"
                    name="numero"
                    onChange={handleInputSbmit}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="cidade"
                    name="cidade"
                    onChange={handleInputSbmit}
                  />
                  <input
                    type="text"
                    placeholder="UF"
                    className="uf"
                    name="uf"
                    onChange={handleInputSbmit}
                  />
                  <input
                    type="text"
                    placeholder="CEP"
                    className="cep"
                    name="cep"
                    onChange={handleInputSbmit}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Bairro"
                  name="bairro"
                  onChange={handleInputSbmit}
                />
              </div>
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
                        onChange={handleInputSbmit}
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
                        onChange={handleInputSbmit}
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
                    <legend>Informações Adicionais (Opicional)</legend>
                    <input type="text" placeholder="End. de Entrega" />
                    <div className="input-group">
                      <input type="text" placeholder="Cidade" />
                      <input type="text" placeholder="UF" />
                      <input type="text" placeholder="CEP" />
                    </div>
                    <input type="text" placeholder="Ponto de Refêrencia" />
                  </fieldset>
                  <fieldset>
                    <legend>Observações</legend>
                    <textarea name="obs" id="obs" cols="10" rows="5" />
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
