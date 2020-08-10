import styled from 'styled-components';
import clienteAmarelo from '../../assets/clientes-amarelo.svg';
import clientePreto from '../../assets/clientes-preto.svg';
import caixaAmarelo from '../../assets/caixa.svg';
import caixaPreto from '../../assets/caixa-preto.svg';
import contasAmarelo from '../../assets/contas.svg';
import contasPreto from '../../assets/contas-preto.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  background: #3d3a3a;

  header {
    flex: 1;
    flex-direction: row;
    width: 100%;
    justify-content: center;

    img {
      margin-left: 35%;
      width: 400px;
      height: 275px;
    }
  }
  hr {
    color: #ecba2b;
    background-color: #ecba2b;
    width: 100%;
    height: 5px;
    border: none;
    margin-bottom: 0;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 294px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-items: center;

    li {
      list-style: none;
      padding: 0 37px;
      width: 226px;
      height: 298px;
      transition: 0.5s;

      svg {
        margin-top: 44px;
        margin-bottom: 30px;
        &:hover {
          fill: #3d3a3a;
        }
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
        text-decoration: none;
        color: #ecba2b;

        .image-cliente {
          width: 152px;
          height: 147px;
          margin-left: 25px;
          margin-bottom: 30px;
          background: transparent url(${clienteAmarelo}) 0% 0% no-repeat
            padding-box;
          opacity: 1;
        }
        .image-caixa {
          width: 200px;
          height: 150px;
          margin-left: 25px;
          margin-bottom: 30px;
          background: url(${caixaAmarelo}) no-repeat;
        }
        .image-contas {
          width: 200px;
          height: 150px;
          margin-left: 25px;
          margin-bottom: 30px;
          background: url(${contasAmarelo}) no-repeat;
        }
        .image-produtos {
          width: 200px;
          height: 150px;
          margin-left: 25px;
          margin-bottom: 30px;
          background: url(${clienteAmarelo}) no-repeat;
        }
        .image-vendas {
          width: 200px;
          height: 150px;
          margin-left: 25px;
          margin-bottom: 30px;
          background: url(${clienteAmarelo}) no-repeat;
        }
        .image-sair {
          width: 200px;
          height: 150px;
          margin-left: 25px;
          margin-bottom: 30px;
          background: url(${clienteAmarelo}) no-repeat;
        }
      }

      &:hover {
        background: #ecba2b;
        svg {
          fill: #3d3a3a;
        }
        a {
          color: #3d3a3a;
          .image-cliente {
            width: 152px;
            height: 147px;
            margin-left: 25px;
            margin-bottom: 30px;
            background: transparent url(${clientePreto}) 0% 0% no-repeat
              padding-box;
            opacity: 1;
          }
          .image-caixa {
            width: 200px;
            height: 150px;
            margin-left: 25px;
            margin-bottom: 30px;
            background: url(${caixaPreto}) no-repeat;
          }
          .image-contas {
            width: 200px;
            height: 150px;
            margin-left: 25px;
            margin-bottom: 30px;
            background: url(${contasPreto}) no-repeat;
          }
          .image-produtos {
            width: 200px;
            height: 150px;
            margin-left: 25px;
            margin-bottom: 30px;
            background: url(${clientePreto}) no-repeat;
          }
          .image-vendas {
            width: 200px;
            height: 150px;
            margin-left: 25px;
            margin-bottom: 30px;
            background: url(${clientePreto}) no-repeat;
          }
          .image-sair {
            width: 200px;
            height: 150px;
            margin-left: 25px;
            margin-bottom: 30px;
            background: url(${clientePreto}) no-repeat;
          }
        }
      }
    }
  }
`;
