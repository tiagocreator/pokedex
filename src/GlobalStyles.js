import styled from 'styled-components';

export const GlobalStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: rgba(94, 94, 94, 1);
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline-end: 40px;
`;
export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  font-weight: 700;
  font-style: normal;
  line-height: 72px;
  margin: 60px 0 55px 40px;
  @media screen and (max-width: 910px) {
    margin-block-start: 40px;
    font-size: 32px;
  }
`;
export const MainGeral = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 460px);
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, 460px);
  }
`;
