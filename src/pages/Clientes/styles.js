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

    button {
      max-width: 18rem;
      max-height: 4.2rem;
      padding: 0.8rem;
      width: 100%;
      height: 100%;
      background: #ecba2b;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0.2rem 0.2rem 0.3rem #00000073;
      border-radius: 0.3rem;
      border: 0;

      text-align: left;
      font-size: 1.6rem;
      font-weight: bold;
      color: #515151;
      transition: background 0.2s;

      svg {
        margin-right: 1rem;
      }

      &:hover {
        background: ${darken(0.08, '#ecba2b')};
        transform: translateX(1rem);
        transition: transform 0.2s;
      }
    }

    .box-search {
      width: 100%;
      height: 9rem;
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
    grid-template-columns: repeat(6, 1fr);

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
    grid-template-columns: repeat(6, 1fr);
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
`;
