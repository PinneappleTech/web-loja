import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  .main {
    max-width: 1100px;
    padding: 16px 30px;

    .top-bar-status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .operator {
        span {
          font-size: 20px;
          font-weight: 600;
          color: #515151;
        }
      }

      .status-box {
        span {
          font-size: 16px;
          color: #515151;
        }

        button {
          width: 96px;
          height: 24px;
          background: #17a2b8;
          border: 0;
          border-radius: 5px;
          margin-left: 8px;

          color: #fff;
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

export const TableSale = styled.div`
  height: 100%;
  border: 1px solid #707070;

  header {
    border-bottom: 1px solid #707070;
    padding-left: 25px;
  }
`;

export const TopForm = styled.div`
  padding: 1.6rem;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
  .bottom {
    display: flex;
    align-items: center;
  }

  .input-text {
    display: flex;
    > label {
      font-size: 1.6rem;
      color: #707070;
    }
    > input {
      width: 26.2rem;
      height: 3rem;
      border: 0;

      margin-left: 0.8rem;
    }
    button {
      width: 2.4rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;
      background: #515151;
      border: 0;
      border-radius: 0 0.5rem 0.5rem 0;
      outline: 0;

      > svg {
        stroke: #ecba2b;
      }
    }
  }

  .select-input {
    display: flex;
    align-items: center;

    label {
      font-size: 1.6rem;
      color: #707070;
    }
    select {
      width: 15rem;
      height: 3rem;
      margin-left: 0.8rem;
      border: 0;
      margin-right: 2.4rem;
    }
  }

  .number-sale {
    span {
      font-size: 1.6rem;
      font-weight: 500;
      color: #707070;
    }
    strong {
      font-size: 1.8rem;
      color: #707070;
    }
  }

  .data-input {
    > span {
      font-size: 1.6rem;
      color: #707070;
    }
  }
`;
export const FooterForm = styled.div`
  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .item,
  .qtde,
  .cod,
  .price {
    label {
      font-size: 1.6rem;
      color: #707070;
    }
    input {
      margin-left: 0.8rem;
      width: 7.6rem;
      border: 0;
    }
  }
  .categ {
    label {
      font-size: 1.6rem;
      color: #707070;
    }
    input {
      margin-left: 0.8rem;
      width: 23rem;
      border: 0;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  thead {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

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
    grid-template-columns: repeat(7, 1fr);
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
`;
