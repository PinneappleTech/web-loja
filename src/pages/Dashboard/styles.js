import styled from 'styled-components';

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
    justify-items: flex-start;
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
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
        text-decoration: none;
        color: #ecba2b;
      }

      &:hover {
        background: #ecba2b;
        svg {
          fill: #3d3a3a;
        }
        a {
          color: #3d3a3a;
        }
      }
    }
  }
`;
