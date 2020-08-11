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
