import styled from 'styled-components';

export const Container = styled.nav`
  background: #515151;
  width: 240px;
  height: 100vh;

  header {
    padding: 8px;
    border-bottom: 1px solid #707070;
  }

  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 20px;
      border-bottom: 1px solid #707070;
      transition: background 0.2s;
      .link {
        display: flex;
        align-items: center;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        margin-left: 20px;
        font-size: 21px;
        color: #ecba2b;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #2b2b2b;
        border: 0;
        height: 38px;
        width: 36px;
        transition: background 0.2s;
        

        &:hover {
          background: #ecba2b;

          svg {
            fill: #2b2b2b;
          }
        }
      }

      &:hover {
        background: #2b2b2b;
      }
    }
  }
`;
