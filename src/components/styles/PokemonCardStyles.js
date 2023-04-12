import styled from 'styled-components';

import PokeBallBgImg3 from '../../assets/img/bg-pokebola-3.png';

export const PokemonCardStyle = styled.div`
  display: flex;
  width: 440px;
  height: 210px;
  background-color: ${(props) => props.color};
  background-image: url(${PokeBallBgImg3});
  border-radius: 12px;
  background-repeat: no-repeat;
  background-size: 250px;
  background-position: top right;
  margin: 0 10px 55px 10px;

  @media screen and (max-width: 480px) {
    margin: 0 10px 10px 10px;
    transform: scale(0.8);
  }
`;

export const CardSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  height: 100%;
  padding: 25px 0 20px 23px;

  p:nth-child(1) {
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #fff;
  }

  p:nth-child(2) {
    font-size: 32px;
    line-height: 39px;
    font-weight: 700;
    color: #fff;
    text-transform: capitalize;
  }

  div:nth-child(2) {
    display: flex;
    margin-block-start: 10px;
  }

  img {
    height: 33px;
    margin-inline-end: 5px;
  }

  span {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-decoration-line: underline;
  }
`;

export const CardSectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 45%;
  height: 100%;

  div {
    width: 100%;
    height: 75%;

    img {
      position: relative;
      top: -35%;
      width: 193px;
      transition: 0.7s;
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const GetPokemonBtn = styled.button`
  cursor: pointer;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  width: 146px;
  height: 38px;
  margin-block-end: 13px;
  margin-inline-end: 22px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const ReleasePokemonBtn = styled(GetPokemonBtn)`
  background-color: #ff6262;
  color: #fff;
`;
