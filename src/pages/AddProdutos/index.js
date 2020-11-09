import React, { useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { ImUser } from 'react-icons/im';
import { toast } from 'react-toastify';
import { IoMdArrowDropdown } from 'react-icons/io';
import NavabarLeft from '../../components/NavbarLeft';
import Header from '../../components/Header';
import Input from '../../components/InputForm';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';

import { currency as unMaskCurrency } from '../../utils/unMasked';

import { Container, Content, Footer, InputGroup } from './styles';
import api from '../../services/api';
import getValidationErros from '../../utils/getValidationErros';

function AddProducts() {
  const formRef = useRef(null);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const token = localStorage.getItem('@annaStore:token');

  useEffect(() => {
    const loadCategoria = async () => {
      const response = await api.get('produtos/categorias/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(response.data);
      setCategorias(response.data);
    };
    loadCategoria();
  }, [token]);

  const optionsTipo = [
    { label: 'Adultos', value: 'A' },
    { label: 'Teens', value: 'T' },
    { label: 'Kids', value: 'K' },
    { label: 'Baby', value: 'B' },
  ];
  useEffect(() => {
    const loadMarcas = async () => {
      const response = await api.get('produtos/marcas/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(response.data);
      setMarcas(response.data);
    };
    loadMarcas();
  }, [token]);

  const optionsCategoria = categorias.map(categoria => ({
    label: categoria.nome,
    value: categoria.id,
  }));

  const optionsMarcas = marcas.map(marca => ({
    label: marca.nome,
    value: marca.id,
  }));

  const handleSubmit = async data => {
    formRef.current.setErrors({});
    try {
      const schema = Yup.object().shape({
        categoria: Yup.string().required(),
        tipo: Yup.string().required(),
        preco: Yup.string().required(),
        marca: Yup.string().required(),
        estoque: Yup.string().max(4).required(),
        estoque_min: Yup.string().max(4).required(),
        genero: Yup.string().required(),
        tamanho: Yup.string().required(),
        descricao: Yup.string().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      const { preco } = data;
      const priceNumber = unMaskCurrency(preco);
      const newData = Object.assign(data, { preco: priceNumber });

      await api.post('/produtos/', newData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toast.success('cadastrou');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValidationErros(err);
        formRef.current.setErrors(erros);
      }

      toast.error('ERROR!, verifique as informações e tente novamente');
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
                  options={optionsCategoria}
                  label="Categoria"
                  placeholder="Selecione a Categoria"
                  icon={IoMdArrowDropdown}
                />
                <Select
                  name="tipo"
                  options={optionsTipo}
                  label="Tipo"
                  placeholder="Selecione o Tipo"
                  icon={IoMdArrowDropdown}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  name="preco"
                  label="Preço R$"
                  mask="currency"
                  maxlength="11"
                />
                <Select
                  name="marca"
                  options={optionsMarcas}
                  label="Marcas"
                  placeholder="Selecione a Marca"
                  icon={IoMdArrowDropdown}
                />
              </InputGroup>
              <InputGroup>
                <Input name="estoque" label="Estoque" type="number" />
                <Input name="estoque_min" label="Estoque min." type="number" />
              </InputGroup>
              <InputGroup>
                <Select
                  name="genero"
                  options={[
                    { label: 'Masculino', value: 'M' },
                    { label: 'Femenino', value: 'F' },
                  ]}
                  label="Genêro"
                  placeholder="Selecione o Genêro"
                  icon={IoMdArrowDropdown}
                />
                <Input
                  name="tamanho"
                  type="text"
                  label="Tamanho"
                  placeholder="Tipo"
                  maxlength="3"
                />
              </InputGroup>
              <TextArea name="descricao" label="Descrição" rows="5">
                coloque a informação do produto
              </TextArea>
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
