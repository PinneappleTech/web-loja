import React, { useRef } from 'react';

import { Form } from '@unform/web';
import { ImUser } from 'react-icons/im';
import { toast } from 'react-toastify';
import { IoMdArrowDropdown } from 'react-icons/io';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';
import Input from '../../components/InputForm';
import Select from '../../components/Select';

import { Container, Content, Footer, InputGroup } from './styles';
import api from '../../services/api';

function AddProducts() {
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
          <Header titlePage="produtos" />
          <main className="main">
            <header>
              <div>
                <ImUser size={12} color="#515151" />
              </div>
              <span>Adicionar Produtos</span>
            </header>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <InputGroup>
                <Select
                  name="categoria"
                  options={[{ label: 'Adidas', value: 'Adidas' }]}
                  label="Categoria"
                  placeholder="Selecione a Categoria"
                  icon={IoMdArrowDropdown}
                />
                <Select
                  name="tipo"
                  options={[{ label: 'Camisa', value: 'Camisa' }]}
                  label="Tipo"
                  placeholder="Selecione o Tipo"
                  icon={IoMdArrowDropdown}
                />
              </InputGroup>
              <InputGroup>
                <Input name="preco" label="Preço R$" />
                <Input name="marca" label="Marca" />
              </InputGroup>
              <InputGroup>
                <Input name="estoque" label="Estoque" type="number" />
                <Input name="estoque_min" label="Estoque min." type="number" />
              </InputGroup>
              <InputGroup>
                <Select
                  name="genero"
                  options={[{ label: 'Masculino', value: 'Masculino' }]}
                  label="Genêro"
                  placeholder="Selecione o Genêro"
                  icon={IoMdArrowDropdown}
                />
                <Select
                  name="tamanho"
                  options={[{ label: 'P', value: 'P' }]}
                  label="Tamanho"
                  placeholder="Selecione o Tamanho"
                  icon={IoMdArrowDropdown}
                />
              </InputGroup>
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

export default AddProducts;
