import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  background: #3d3a3a;

  header {
    display: flex;
    flex: 1;
    width: 100vw;
    justify-content: center;

    > svg {
      width: 52.2rem;
      height: 27.5rem;
    }
  }
  hr {
    color: #ecba2b;
    background-color: #ecba2b;
    width: 100vw;
    height: 0.5rem;
    border: none;
    margin-bottom: 0;
  }
`;

export const NavBar = styled.nav`
  width: 100vw;
  height: 29rem;

  ul {
    margin: 0;
    height: 29rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    li {
      list-style: none;
      flex: 1;
      &:hover {
        background: #ecba2b;
      }

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4.4rem;
        > svg {
          max-width: 15.2rem;
          max-height: 14.7rem;
          width: 100%;
          height: 100%;
        }
        > span {
          margin-top: 1rem;
          font-size: 5rem;
          color: #ecba2b;
        }

        &:hover {
          text-decoration: none;
          > svg {
            .d {
              fill: #3d3a3a;
            }
          }
          span {
            color: #3d3a3a;
          }
        }
      }
    }
  }
`;
