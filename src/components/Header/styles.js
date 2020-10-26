import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .header-container {
    height: 34px;
    background: #515151;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .header-items {
      display: flex;
      width: 100px;
      margin-right: 20px;
      align-items: center;
      justify-content: space-between;
      svg {
        fill: #ecba2b;
      }
      span {
        font-size: 18px;
        color: #ecba2b;
      }
    }
  }

  .breacrumps-container {
    width: 100%;
    height: 34px;
    background: #fff;
    display: flex;
    align-items: center;

    .breacrumps-items {
      width: 200px;
      display: flex;
      align-items: center;
      margin: auto 30px;
      span {
        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
        color: #515151;
      }
    }
  }
`;
