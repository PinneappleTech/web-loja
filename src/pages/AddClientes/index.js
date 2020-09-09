import React from 'react';

import { ImUser } from 'react-icons/im';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';

import { Container, Content, Footer } from './styles';

function Clientes() {
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
            <form>
              <div className="form-left">
                <input type="text" placeholder="Nome Completo" />
                <div className="input-group">
                  <input type="text" placeholder="RG" />
                  <input type="text" placeholder="CPF/CPNJ" />
                </div>
                <div className="input-group">
                  <input type="date" placeholder="Data de Nascimento" />
                  <select name="sexo" id="sexo" className="sexo">
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>
                  <input type="date" placeholder="Data de Cadastro" />
                </div>
                <div className="input-group">
                  <input type="tel" placeholder="Fone" />
                  <input type="tel" placeholder="Telefone" />
                </div>
                <div className="input-group">
                  <select name="estado-civil" id="estado-civil">
                    <option>Casado</option>
                    <option>Solteiro</option>
                  </select>
                  <input type="text" placeholder="Conjuge" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Apelido" />
                  <input type="text" placeholder="Afiliação" />
                </div>
                <input type="email" placeholder="Endereço de E-mail" />
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Endereço"
                    className="endereco"
                  />
                  <input type="text" placeholder="Nº" className="number" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Cidade" className="cidade" />
                  <input type="text" placeholder="UF" className="uf" />
                  <input type="text" placeholder="CEP" className="cep" />
                </div>
                <input type="text" placeholder="Bairro" />
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
                        value="ativo"
                      />
                      <label htmlFor="ativo">Ativo</label>
                    </div>
                    <div className="checkbox-input">
                      <input type="checkbox" id="spc" name="spc" value="spc" />
                      <label htmlFor="spc">Spc</label>
                    </div>
                    <div className="checkbox-input">
                      <input
                        type="checkbox"
                        id="suspenso"
                        name="suspenso"
                        value="suspenso"
                      />
                      <label htmlFor="suspenso">Suspenso</label>
                    </div>
                    <div className="checkbox-input">
                      <input
                        type="checkbox"
                        id="ficha-impresa"
                        name="ficha-impresa"
                        value="ficha-impresa"
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
                      <label htmlFor="limite">Limite de Crédito</label>
                      <input name="limite" type="text" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="container-footer">
                  <fieldset>
                    <legend>Informações Adicionais</legend>
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
              </div>
            </form>
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

export default Clientes;
