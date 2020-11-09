import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.2rem;

  label {
    padding: 0 0.8rem;
    font-size: 1.2em;
    color: #707070;
    font-weight: 600;
  }
`;

export const SelectConatiner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  padding-left: 0.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #707070;
  font-size: 1.6rem;
  background: #fff;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    background: none;
    border: 0;
    flex: 1;
  }

  ${props =>
    props.placeholder &&
    css`
      select {
        color: #707070;
      }
    `}

    ${props =>
      props.isErrored &&
      css`
        border: 0.1rem solid ${({ theme }) => theme.colors.dangerDark};
      `}
  ${props =>
    props.isFocused &&
    css`
      border: 0.1rem solid ${({ theme }) => theme.colors.primaryLight};
      select {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
  ${props =>
    props.isFilled &&
    css`
      select {
        color: ${({ theme }) => theme.colors.primaryLight};
      }
    `}
`;
export const IconContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.dangerDark};
`;
