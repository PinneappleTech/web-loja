import styled from 'styled-components';

export const Container = styled.nav`
  background: #515151;
  max-width: 30rem;
  height: 100vh;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-bottom: 0.1rem solid #707070;
    > svg {
      max-width: 12.6rem;
      max-height: 6.7rem;
      width: 100%;
      height: 100%;
    }
  }

  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 2rem;
      border-bottom: 0.1rem solid #707070;
      transition: background 0.2s;

      li > div {
        display: flex;
        align-items: center;
        div > svg {
          max-width: 12.6rem;
          max-height: 6.7rem;
          width: 100%;
          height: 100%;
        }
      }
      .link {
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
      }
      a {
        text-decoration: none;
        margin-left: 2rem;
        font-size: 1.8rem;
        color: #ecba2b;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #2b2b2b;
        border: 0;
        height: 3.2rem;
        width: 3.4rem;
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
