import React from 'react';
import { useHistory } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import Logo from '../../assets/Logo.svg';

import { Container, Input, Button } from './styles';

const Login = () => {
  const history = useHistory();
  const handleNavigateToDashboard = () => {
    history.push('/dashboard');
  }

  return (
    <Container>
      <img src={Logo} alt="Anna Store" />
      <p>LOGIN</p>

      <Input>
        <FaUser color="#ECBA2B" size={20} />
        <input type="text" placeholder="Usuário" />
      </Input>

      <Input>
        <MdLock color="#ECBA2B" size={20} />
        <input
          type="password"
          placeholder="Senha"
        />
      </Input>

      <Button onClick={() => handleNavigateToDashboard()}>
        <FiLogIn color="#FFF" size={30} />
        ENTRAR
    </Button>
    </Container>
  );
};

export default Login;
