import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white} 0% 0% no-repeat padding-box;
  border-radius: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.backgroundLight};
  padding: 1.6rem;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 0.8rem;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.dangerDark};
    `}
  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primaryLight};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primaryLight};
    `}
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${({ theme }) => theme.colors.primary};;
    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};;
    }
  }
  svg {
    margin-right: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
