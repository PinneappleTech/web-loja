import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100vw;

  .main {
    margin: 1.4rem 0.8rem;
    border: 1px solid #515151;
    border-radius: 0.3rem 0 0 0;

    > header {
      display: flex;
      align-items: center;
      height: 2.5rem;
      border-bottom: 1px solid #515151;
      > div {
        padding: 0.8rem;
        height: 100%;
        border-right: 1px solid #515151;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > span {
        margin-left: 0.8rem;
        font-size: 1.2rem;
        color: #515151;
      }
    }

    > form {
      margin: 1.6rem;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .form-left {
        margin-top: 1.6rem;
        > input {
          border: 0;
          width: 96.5%;
          height: 3.2rem;
          border-radius: 0.4rem;
          padding-left: 0.8rem;
          margin-bottom: 0.8rem;
        }

        .input-group {
          display: flex;
          flex: 1;
          margin-bottom: 0.8rem;
          input,
          select {
            border: 0;
            margin-right: 1.6rem;
            width: 30%;
            height: 3.2rem;
            border-radius: 0.4rem;
            padding: 0.8rem 0.3rem;
          }
          .sexo {
            width: 10%;
          }
          .cep {
            width: 13.6rem;
          }
          .number {
            width: 12%;
          }
          .uf {
            width: 4rem;
          }
          .endereco {
            width: 80%;
          }
          .cidade {
            width: 55%;
          }
          .sexo,
          .cep,
          .number,
          .uf,
          .endereco,
          .cidade {
            padding: 0.8rem 0.3rem;
          }
        }
      }
      .form-right {
        padding-left: 2.4rem;
        > .container-header {
          margin-top: 1.6rem;
          border: 0.1rem solid #515151;
          border-radius: 0.5rem;
          > header {
            background: #515151;
            > span {
              font-size: 2rem;
              color: #ecba2b;
              margin-left: 1.6rem;
            }
          }
        }

        > .container-footer {
          fieldset {
            width: 100%;
            legend {
              font-size: 1.6rem;
              line-height: 2.1rem;
              text-align: left;
              color: #515151;
            }
            > input {
              border: 0;
              width: 100%;
              height: 3.2rem;
              border-radius: 0.4rem;
              padding-left: 0.8rem;
              margin-bottom: 0.8rem;
            }
            > textarea {
              width: 100%;
              border: 0;
              border-radius: 0.4rem;
            }
            > .input-group {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0.8rem;
            }
            .input-group input {
              border: 0;
              height: 3.2rem;
              border-radius: 0.4rem;
              padding-left: 0.8rem;
              width: 30%;
            }
            & + fieldset {
              margin-top: 0.8rem;
            }
          }
        }
      }
    }
    .checkbox-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.6rem;
      margin-top: 1.6rem;
    }
    .checkbox-input {
      display: flex;
      input {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.8rem;
      }
      label {
        font-size: 1.4rem;
        color: #515151;
        font-weight: 600;
      }
    }

    .status-limite {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1.6rem 1.6rem 1.6rem;
    }
    .status {
      display: flex;
      align-items: center;

      span {
        font-size: 1.4rem;
        color: #515151;
        font-weight: 600;
      }
      > div {
        width: 2rem;
        height: 2rem;
        background: #515151;
        border-radius: 50%;
        margin-left: 0.8rem;
      }
      .success {
        background: #28a745;
      }
    }
    .limite-input {
      label {
        font-size: 1.4rem;
        color: #515151;
        font-weight: 600;
        margin-right: 0.8rem;
      }

      input {
        border: 0;
      }
    }
  }
`;

export const Footer = styled.footer`
  max-width: 100vw;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  button {
    width: 18rem;
    height: 4.2rem;
    background: #ecba2b;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0.2rem 0.2rem 0.3rem #00000073;
    border-radius: 0.3rem;
    border: 0;
    margin-right: 0.8rem;

    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    & + button {
      margin-left: 1.6rem;
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
