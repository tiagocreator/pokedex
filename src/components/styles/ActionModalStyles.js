import styled from 'styled-components';

export const ActionModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.62);
  user-select: none;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 451px;
    height: 222px;
    background: #fff;
    border-radius: 12px;

    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 72px;
    }

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
