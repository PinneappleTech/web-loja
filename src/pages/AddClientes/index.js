import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';

import { ImUser } from 'react-icons/im';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content, Footer } from './styles';

function Clientes() {
  const formRef = useRef(null);
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);
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
                <Input name="nome" type="text" placeholder="Nome Completo" />
                <div className="input-group">
                  <Input name="rg" type="text" placeholder="RG" />
                  <Input name="cpf" type="text" placeholder="CPF/CPNJ" />
                </div>
                <div className="input-group">
                  <input
                    name="data_nasc"
                    type="date"
                    placeholder="Data de Nascimento"
                  />
                  <select name="sexo" id="sexo" className="sexo">
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </select>
                </div>
                <div className="input-group">
                  <Input name="fone_recado" type="tel" placeholder="Celular" />
                  <Input name="fone" type="tel" placeholder="Telefone" />
                </div>
                <div className="input-group">
                  <select name="estado_civil" id="estado-civil">
                    <option>Casado</option>
                    <option>Solteiro</option>
                  </select>
                  <Input name="conjuge" type="text" placeholder="Conjuge" />
                </div>
                <div className="input-group">
                  <Input name="apelido" type="text" placeholder="Apelido" />
                  <Input name="filiação" type="text" placeholder="Afiliação" />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Endereço de E-mail"
                />
                <div className="input-group">
                  <Input
                    type="text"
                    placeholder="Endereço"
                    className="endereco"
                    name="logradouro"
                  />
                  <Input
                    name="numero"
                    type="text"
                    placeholder="Nº"
                    className="number"
                  />
                </div>
                <div className="input-group">
                  <Input
                    name="cidade"
                    type="text"
                    placeholder="Cidade"
                    className="cidade"
                  />
                  <Input
                    name="uf"
                    type="text"
                    placeholder="UF"
                    className="uf"
                  />
                  <Input
                    name="cep"
                    type="text"
                    placeholder="CEP"
                    className="cep"
                  />
                </div>
                <iInputnput name="bairro" type="text" placeholder="Bairro" />
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
                        name="ativo"
                        value="1"
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
                        name="suspenso"
                        value="3"
                      />
                      <label htmlFor="suspenso">Suspenso</label>
                    </div>
                    <div className="checkbox-input">
                      <input
                        type="checkbox"
                        id="ficha-impresa"
                        name="impreso"
                        value="4"
                      />
                      <label htmlFor="ficha-impresa">Ficha Impresa</label>
                    </div>
                  </div>
                  <div className="status-limite">
                    <div className="status">
                      <span>Staus</span>
                      <div className="success" />
                    </div>
                    <div className="limite-input">
                      <label htmlFor="credito">Limite de Crédito</label>
                      <input name="credito" type="text" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="container-footer">
                  <fieldset>
                    <legend>Informações Adicionais (Opicional)</legend>
                    <Input
                      name="end_entrega"
                      type="text"
                      placeholder="End. de Entrega"
                    />
                    <div className="input-group">
                      <Input name="cidade" type="text" placeholder="Cidade" />
                      <Input name="uf" type="text" placeholder="UF" />
                      <Input name="cep" type="text" placeholder="CEP" />
                    </div>
                    <Input
                      name="ponto_ref"
                      type="text"
                      placeholder="Ponto de Refêrencia"
                    />
                  </fieldset>
                  <fieldset>
                    <legend>Observações</legend>
                    <textarea name="obs" id="obs" cols="10" rows="5" />
                  </fieldset>
                </div>
              </div>
              <Footer>
                <button type="button" className="cancel">
                  Cancelar
                </button>
                <button type="submit" className="submit">
                  Cadastrar
                </button>
              </Footer>
            </Form>
          </main>
        </Content>
      </Container>
    </>
  );
}

export default Clientes;
