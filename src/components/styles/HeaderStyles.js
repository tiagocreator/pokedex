import styled from 'styled-components';

export const HeaderStyle = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  background: #fff;

  @media screen and (max-width: 910px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    @media screen and (max-width: 910px) {
      width: 300px;
    }

    @media screen and (max-width: 910px) {
      div:nth-child(1) {
        order: 2;
      }
      div:nth-child(2) {
        order: 1;
      }
      div:nth-child(3) {
        order: 3;
      }
    }
  }

  img {
    height: 113px;
    @media screen and (max-width: 910px) {
      height: 80px;
    }
  }

  span {
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-decoration-line: underline;
    color: #1a1a1a;
    @media screen and (max-width: 910px) {
      text-align: center;
      width: 300px;
      transform: scale(0.8);
      font-size: 20px;
    }
  }
`;

export const PokedexBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  background: #33a4f5;
  border-radius: 8px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #fff;
  @media screen and (max-width: 910px) {
    transform: scale(0.8);
  }
`;

export const GetPokemonBtn = styled.button`
  cursor: pointer;
  width: 226px;
  height: 57px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  background-color: #33a4f5;
  border: none;
  border-radius: 8px;
  @media screen and (max-width: 910px) {
    transform: scale(0.8);
    margin-block-start: 14px;
  }
`;

export const ReleasePokemonBtn = styled(GetPokemonBtn)`
  background-color: #ff6262;
`;
