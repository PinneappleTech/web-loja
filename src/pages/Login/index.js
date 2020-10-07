import React, { useRef, useState, useCallback } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { Logo } from '../../assets/images';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

const Login = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});
        setLoading(true);
        const schema = Yup.object().shape({
          username: Yup.string().required('Nome do usuário obrigatório'),
          password: Yup.string()
            .min(6, 'No minímo 6 digitos')
            .required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          username: data.username,
          password: data.password,
        });
        setLoading(false);
      } catch (err) {
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
        toast.error('Error ao entrar no sistema verifique suas credenciais !');
        setLoading(false);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Logo />
      <p>LOGIN</p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="username"
          icon={FaUser}
          type="text"
          placeholder="Usuário"
        />
        <Input
          name="password"
          icon={MdLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">
          <FiLogIn color="#FFF" size={30} />
          {loading ? '...Carregando' : 'Acessar'}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
