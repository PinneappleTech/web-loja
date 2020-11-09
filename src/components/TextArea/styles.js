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
  textarea {
    padding: 0.5rem 0.8rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #707070;
    font-size: 1.6rem;
    &::placeholder {
      color: rgba(112, 112, 112, 0.4);
    }
  }

  ${props =>
    props.isErrored &&
    css`
      textarea {
        border: 0.1rem solid ${({ theme }) => theme.colors.dangerDark};
      }
    `}
  ${props =>
    props.isFocused &&
    css`
      textarea {
        color: ${({ theme }) => theme.colors.primary};
        border: 0.1rem solid ${({ theme }) => theme.colors.primaryLight};
      }
    `}
  ${props =>
    props.isFilled &&
    css`
      textarea {
        color: ${({ theme }) => theme.colors.primaryLight};
      }
    `}
`;
