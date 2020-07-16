import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;


  img {
    width: 306px;
    height: 161px;
  }

  p {
    margin-top: 48px;
    color: #707070;
    font-size: 22px;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 33px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 5px;
  opacity: 0.7;
  margin-top: 24px;

  svg {
    margin: 10px;
  }

  input {
    border: none;
    color: #ECBA2B;

    ::placeholder {
      color: #ECBA2B;
    }
  }
`;

export const Button = styled.button.attrs(props => ({
  type: 'submit'
}))`
  display: flex;
  margin-top: 24px;
  width: 350px;
  height: 45px;
  background: #ECBA2B;
  border-radius: 5px;
  box-shadow: 0px 6px 6px #0000006E;
  border: 1px solid #707070;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #fff;
  transition: 0.8s;

  &:hover {
    background: ${darken(0.2, '#ECBA2B')};
  }

  svg {
    margin: 0 10px;
  }
`;

