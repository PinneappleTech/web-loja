import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { Logo } from '../../assets/images';
import api from '../../services/api';

import { Container, Input, Button } from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleNavigateToDashboard = async () => {
    const data = {
      username,
      password,
    };
    try {
      const response = await api.post('/auth/login/', data);
      const { token, user } = response.data;
      localStorage.setItem('@anastore/token', token);
      localStorage.setItem('@anastore/user', user);
      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao fazer o login. verifique seus dados');
    }
  };

  function handleUsername(event) {
    const user = event.target.value;
    setUsername(user);
  }

  function handlePassword(event) {
    const pass = event.target.value;
    setPassword(pass);
  }

  return (
    <Container>
      <Logo />
      <p>LOGIN</p>

      <Input>
        <FaUser color="#ECBA2B" size={20} />
        <input
          type="text"
          placeholder="Usuário"
          name="username"
          onChange={handleUsername}
        />
      </Input>

      <Input>
        <MdLock color="#ECBA2B" size={20} />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handlePassword}
        />
      </Input>

      <Button type="button" onClick={() => handleNavigateToDashboard()}>
        <FiLogIn color="#FFF" size={30} />
        ENTRAR
      </Button>
    </Container>
  );
};

export default Login;
