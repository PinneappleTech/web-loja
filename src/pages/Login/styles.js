import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    width: 30rem;
    height: 16rem;
  }

  p {
    margin-top: 4.8rem;
    color: #707070;
    font-size: 2.2rem;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 35rem;
  height: 3.5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.1rem solid #707070;
  border-radius: 0.5rem;
  opacity: 0.7;
  margin-top: 2.4rem;

  svg {
    margin: 1rem;
  }

  input {
    border: none;
    color: #ecba2b;

    ::placeholder {
      color: #ecba2b;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  margin-top: 2.4rem;
  width: 35rem;
  height: 4.5rem;
  background: #ecba2b;
  border-radius: 0.5rem;
  box-shadow: 0 0.6rem 0.6rem #0000006e;
  border: 0.1rem solid #707070;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: #fff;
  transition: 0.8s;

  &:hover {
    background: ${darken(0.2, '#ECBA2B')};
  }

  svg {
    margin: 0 1rem;
  }
`;
