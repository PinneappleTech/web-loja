import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100vw;
  .main {
    max-width: 110rem;
    padding: 1.6rem 3rem;

    a {
      max-width: 18rem;
      max-height: 4.2rem;
      padding: 0.8rem;

      background: ${props => props.theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: ${props => props.theme.boxShadow};
      border-radius: ${props => props.theme.borderRadius};
      border: 0;
      transition: background 0.2s;

      > svg {
        margin-right: 1rem;
      }

      > span {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.backgroundLight};
      }

      &:hover {
        text-decoration: none;
        background: ${darken(0.08, '#ecba2b')};
        transform: translateX(1rem);
        transition: transform 0.2s;
      }
    }

    .box-search {
      width: 100%;
      border: 0.1px solid #515151;
      margin-top: 5rem;
      header {
        display: flex;
        max-height: 3.2rem;
        border-bottom: 0.1rem solid #515151;
        div {
          width: 3.1rem;
          height: 3.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 0.1rem solid #515151;
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;

          text-align: left;
          color: #515151;
          font-weight: bold;
          font-size: 1.6rem;
        }
      }

      .search {
        max-width: 96.1rem;
        height: 3.2rem;
        background: #fff;
        margin-left: 3.1rem;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        padding-left: 1rem;
        border-radius: 0.4rem;

        div {
          display: flex;
          align-items: center;
        }
        input {
          width: 80rem;
          border: none;
          color: #515151;
          &::placeholder {
            color: #515151;
          }
        }
        svg {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  thead {
    display: grid;
    grid-template-columns: repeat(8, 1fr);

    th {
      border: 0.1rem solid #000;
      text-align: center;
      padding: 0.5rem 0;
      font-size: 1.6rem;
      color: #515151;
      & + th {
        border-left: none;
      }
    }
  }
  tr {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    background: #fff;

    td {
      border: 0.1rem solid #000;
      text-align: center;
      padding: 0.5rem 0;
      font-size: 1.4rem;
      color: #515151;
      & + td {
        border-left: none;
      }
    }
  }
  .actions {
    div {
      display: flex;
      justify-content: space-around;
      > div {
        cursor: pointer;
        width: 2rem;
        height: 2.5rem;
        border: 0.1rem solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        > svg {
          size: 1rem;
        }
      }
    }
  }
  .due-date {
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.backgroundDark};
    font-weight: bold;
  }
  .pay {
    background: ${({ theme }) => theme.colors.successDark};
    color: ${({ theme }) => theme.colors.backgroundDark};
    font-weight: bold;
  }
  .status {
    color: ${({ theme }) => theme.colors.successDark};
  }
`;

export const NameClient = styled.div`
  padding: 0 3.6rem;
  background: ${props => props.theme.colors.backgroundDark};
  > span {
    text-transform: uppercase;
    color: ${props => props.theme.colors.background};
    font-size: ${props => props.theme.font.large};
  }
`;

export const FilterGroup = styled.div`
  padding: 0.8rem 3.6rem;

  > input {
    border: 0.1rem solid ${props => props.theme.colors.backgroundLight};
    margin-right: 0.8rem;
    padding: 0 0.8rem;
    border-radius: 0.3rem;
  }

  > button {
    width: 17.7rem;
    border: 0;
    background: ${props => props.theme.colors.primary};
    border-radius: 0.3rem;
    color: ${props => props.theme.colors.background};

    > svg {
      margin-right: 0.8rem;
    }
  }
`;

export const DebitaAdvice = styled.div`
  margin-top: 1rem;
  width: 44rem;
  height: 10rem;
  background: ${props => props.theme.colors.danger};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    text-align: center;
    color: #fff;
  }

  > p {
    text-align: center;
    color: #fff;
  }
`;
