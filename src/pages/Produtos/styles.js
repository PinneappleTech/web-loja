import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  .main {
    max-width: 1100px;
    padding: 17px 30px;

    .buttons-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        width: 180px;
        height: 42px;
        background: #ecba2b;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px 3px #00000073;
        border-radius: 3px;
        border: 0;

        text-align: left;
        font-size: 12px;
        font-weight: bold;
        color: #515151;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.08, '#ecba2b')};
          transform: translateX(10px);
          transition: transform 0.2s;
        }
      }
    }

    button {
      width: 180px;
      height: 42px;
      background: #ecba2b;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 2px 2px 3px #00000073;
      border-radius: 3px;
      border: 0;

      text-align: left;
      font-size: 12px;
      font-weight: bold;
      color: #515151;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#ecba2b')};
        transform: translateX(10px);
        transition: transform 0.2s;
      }
    }

    .box-search {
      width: 100%;
      height: 90px;
      border: 1px solid #515151;
      margin-top: 50px;
      header {
        display: flex;
        max-height: 32px;
        border-bottom: 1px solid #515151;
        div {
          width: 31px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #515151;
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 10px;

          text-align: left;
          color: #515151;
          font-weight: bold;
          font-size: 16px;
        }
      }

      .search {
        max-width: 961px;
        height: 32px;
        background: #fff;
        margin-left: 31px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        border-radius: 4px;

        input {
          width: 800px;
          border: none;
          color: #515151;
          &::placeholder {
            color: #515151;
          }
        }
        svg {
          margin-right: 5px;
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
      font-size: 1.2rem;
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
      font-size: 1.2rem;
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
      button {
        width: 31px;
        height: 31px;
        background: #eee;

        svg {
          margin-left: 8px;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  max-width: 1100px;
  padding: 17px 30px;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  button {
    width: 180px;
    height: 42px;
    background: #ecba2b;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 3px #00000073;
    border-radius: 3px;
    border: 0;

    text-align: left;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    & + button {
      margin-left: 16px;
    }

    &:hover {
      transition: transform 0.2s;
    }
  }
  .cancel {
    background: #ed1223;

    &:hover {
      background: ${darken(0.08, '#ed1223')};
    }
  }
  .submit {
    background: #28a745;

    &:hover {
      background: ${darken(0.08, '#28a745')};
    }
  }
`;
