import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  background: #3D3A3A;


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
      margin-top: 60px;
      color: #ECBA2B;
      background-color:#ECBA2B;
      width: 100%;
      height: 5px;
      border: none;
    }
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 294px;

  ul {
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    justify-items: center;

    li {
      list-style: none;
      padding: 0 36px;
      margin: 0 1px;
      width: 226px;
      height: 280px;
      transition: 0.5s;

      svg {
        margin-top: 44px;
        margin-bottom: 30px;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
        text-decoration: none;
        color: #ECBA2B;
      }

      &:hover {
        background: #ECBA2B;
        svg {
          fill: #3D3A3A;
        }
        a {
          color: #3D3A3A;
        }
      }
    }
  }
`;

