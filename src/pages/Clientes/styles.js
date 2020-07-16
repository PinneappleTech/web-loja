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
      font-size: 16px;
      font-weight: bold;
      color: #515151;
      transition: background 0.2s;

      svg {
        margin-right: 10px;
      }

      &:hover {
        background: ${darken(0.08, '#ecba2b')};
        transform: translateX(10px);
        transition: transform 0.2s;
      }
    }
  }
`;
