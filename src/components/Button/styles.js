import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  display: flex;
  margin-top: 1.6rem;
  width: 35rem;
  height: 4.5rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: 0 0.6rem 0.6rem #0000006e;
  border: 0.1rem solid ${({ theme }) => theme.colors.backgroundDark};
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.8s;

  &:hover {
    background: ${darken(0.2, '#ECBA2B')};
  }
`;
