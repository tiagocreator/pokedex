import styled from 'styled-components';

export const DetailStyle = styled.div`
  background-position: top center;
  background-size: 1235px 1170px;
  background-repeat: no-repeat;
  top: 50px;
`;

export const Container = styled.div`
  width: 1389px;
  height: 663px;
  background-color: ${(props) => props.color};
  border-radius: 37px;
  margin: 56px auto 200px auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  @media screen and (min-width: 1180px) and (max-width: 1440px) {
    transform: scale(0.8);
    width: 1200px;
  }
  @media screen and (max-width: 1179px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 680px;
    height: 860px;
    padding: 20px;
  }
  @media screen and (max-width: 690px) {
    width: 96vw;
    margin-block-start: 100px;
    height: auto;
    display: flex;
    gap: 20px;
    flex-direction: column-reverse;
  }
`;

export const FrontImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1/1/2/2;
  margin: 24px 34px 23px 44px;
  background: #fff;
  border-radius: 8px;
  @media screen and (max-width: 1179px) {
    grid-area: 3/1/4/2;
    width: 300px;
    margin: 0 auto;
  }
  transition: 0.7s;
`;
export const BackImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 2/1/3/2;
  margin: 23px 34px 26px 44px;
  background: #fff;
  border-radius: 8px;
  border: 2px solid #fff;
  @media screen and (max-width: 1179px) {
    grid-area: 3/2/4/3;
    width: 300px;
    margin: 0 auto;
  }
`;

export const ImgDetails = styled.img`
  height: 250px;
  transition: 0.7s;
  :hover {
    transform: scale(1.1);
  }
`;

export const StatsCard = styled.div`
  grid-area: 1/2/3/3;
  margin-block: 24px 26px;
  padding: 18px;
  background-color: #fff;
  border-radius: 12px;
  font-weight: 800;
  @media screen and (max-width: 1179px) {
    grid-area: 1/2/3/3;
    height: 350px;
    width: 300px;
    margin: 172px auto 0 auto;
    @media screen and (max-width: 690px) {
      margin: 0 auto;
    }
  }
`;

export const PokeballContainer = styled.div`
  grid-area: 1/3/3/5;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-size: cover;
  background-position: right;
  display: grid;
  @media screen and (max-width: 1179px) {
    grid-area: 1/1/3/3;
    background-position: center;
    @media screen and (max-width: 690px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const PokemonDetails = styled.div`
  grid-area: 1/1/3/2;
  margin: 24px 0 26px 68px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  font-weight: 800;
  @media screen and (max-width: 1179px) {
    margin: 0 auto;
  }
`;
export const PokemonMoves = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: 800;
  grid-area: 2/1/5/2;
  @media screen and (max-width: 1179px) {
    height: 350px;
    width: 300px;
    border-radius: 12px;
    margin-block-start: 36px;
  }
`;

export const PokemonName = styled.p`
  font-size: 48px;
  line-height: 58px;
  color: #fff;
  font-weight: 700px;
  font-style: bold;
  text-transform: capitalize;
`;

export const PokemonId = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  font-weight: 700;
`;

export const TypeImg = styled.img`
  height: 33px;
  margin-block-start: 10px;
  margin-inline-end: 16px;
`;

export const StatsTitle = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 29.05px;
  margin-block-end: 15px;
`;

export const PokemonFullPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 690px) {
    grid-area: 1/1/2/2;
  }
`;

export const PokemonFullPhoto = styled.img`
  position: relative;
  top: -40%;
  width: 270px;
  height: 270px;
  @media screen and (max-width: 690px) {
    width: 170px;
    height: 170px;
    left: 80px;
    top: -130px;
  }
  transition: 0.7s;
  :hover {
    transform: scale(1.1);
  }
`;

export const Move = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 10px;
  width: fit-content;
  background-color: #ececec;
  border: dashed 1px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  margin-block-end: 18px;
  text-transform: capitalize;
`;

export const PokemonMovesContainer = styled.div`
  margin-block-start: 20px;
  flex-grow: 1;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  border-top: 0.01px solid rgba(0, 0, 0, 0.1);
`;

export const ContainerTotal = styled(StatsContainer)`
  border-bottom: 0.01px solid rgba(0, 0, 0, 0.1);
`;

export const StatsName = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  min-width: 72px;
  height: 33px;
  font-size: 16px;
  color: #737373;
`;

export const StatsValue = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 16px;
  min-width: 47px;
  height: 33px;
  color: #404040;
`;
