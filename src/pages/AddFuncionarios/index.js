import React, { useRef, useState } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';
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
  StatusContainer,
  StatusUser,
  Permission,
  ButtonGroup,
} from './styles';
import api from '../../services/api';
import getValidationErros from '../../utils/getValidationErros';

function AddFuncionarios() {
  const formRef = useRef(null);
  const [active, setActive] = useState(true);
  const [inativo, setInativo] = useState(false);
  const token = localStorage.getItem('@annaStore:token');

  const handleStatusUser = () => {
    setActive(!active);
    setInativo(!inativo);
  };

  const handleSubmit = async data => {
    const { cpf } = data;
    const newCpf = String(unMaskedTextValue(cpf));
    const newData = Object.assign(data, { cpf: newCpf, is_active: active });

    try {
      const schema = Yup.object().shape({
        first_name: Yup.string().required('Nome Obrigatório'),
        last_name: Yup.string(),
        cpf: Yup.string().max(14).required('CPF Obrigatório'),
        data_nasc: Yup.string().required('Data de Nascimento Obrigatório'),
        estado_civil: Yup.string().required('Estado Civíl Obrigatório'),
        sexo: Yup.string().required('Sexo Obrigatório'),
        fone: Yup.string().required('Telefone Obrigatório'),
        tipo_usuario: Yup.string().required('Permissão Obrigatório'),
        username: Yup.string().required('Nome do usuário Obrigatório'),
        password: Yup.string().required('Senha Obrigatório'),
        email: Yup.string(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post('/usuarios/', newData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toast.success('Usuário cadastrado com sucesso!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = getValidationErros(error);
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
          <Header titlePage="Adicionar Funcionários" />
          <main className="main">
            <header>
              <div>
                <ImUser size={12} color="#515151" />
              </div>
              <span>Adicionar Funcionários</span>
            </header>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormLeft>
                <InputGroup>
                  <Input
                    name="first_name"
                    type="text"
                    placeholder="Ex: Maria"
                    label="Nome"
                  />
                  <Input
                    name="last_name"
                    type="text"
                    placeholder="Ex: Raimunda"
                    label="Sobrenome (opcional)"
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="CPF"
                    name="cpf"
                    label="CPF"
                    mask="cpf"
                  />
                  <Input
                    type="date"
                    placeholder="DD/MM/AAAA"
                    name="data_nasc"
                    label="Data de Nascimento"
                  />
                </InputGroup>
                <InputGroup>
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
                    icon={IoMdArrowDropdown}
                  />
                </InputGroup>
                <Input
                  type="text"
                  placeholder="Celular"
                  name="fone"
                  label="Celular"
                />
              </FormLeft>
              <div className="form-right">
                <StatusContainer>
                  <StatusUser>
                    <span>Status do Usuário</span>
                    <ButtonGroup>
                      <button
                        type="button"
                        className={active && 'active'}
                        onClick={() => handleStatusUser()}
                      >
                        Ativo
                      </button>
                      <button
                        type="button"
                        className={inativo && 'inativo'}
                        onClick={() => handleStatusUser()}
                      >
                        Inativo
                      </button>
                    </ButtonGroup>
                  </StatusUser>
                  <Permission>
                    <Select
                      name="tipo_usuario"
                      placeholder="Selecione a Permissão"
                      label="Permissão"
                      options={[
                        { label: 'Adminstrador', value: '3' },
                        { label: 'Caixa', value: '2' },
                        { label: 'Vendedor', value: '1' },
                      ]}
                      icon={IoMdArrowDropdown}
                    />
                  </Permission>
                </StatusContainer>
                <div className="container-footer">
                  <fieldset>
                    <Legend>
                      <span>Informações para o Sistema</span>
                      <hr />
                    </Legend>
                    <Input
                      name="username"
                      placeholder="maria123"
                      label="Nome do Usuário"
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="********"
                      label="Senha"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="maria@gmail.com"
                      label="E-mail (opicional)"
                    />
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

export default AddFuncionarios;
