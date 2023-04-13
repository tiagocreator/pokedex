import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import fetchApi from '../../fetchApi';
import { types, colors, baseUrl, stats } from '../../data';
import { goErrorPage } from '../../Router';
import GlobalContext from '../../context/globalContext';

import { ActionModal, ProgressBar, Header, Footer } from '../../components/index';

import { Title } from '../../GlobalStyles';

import {
  DetailStyle,
  Container,
  TypeImg,
  PokeballContainer,
  PokemonId,
  PokemonName,
  PokemonMoves,
  PokemonDetails,
  FrontImage,
  BackImage,
  StatsCard,
  StatsTitle,
  PokemonFullPhotoContainer,
  PokemonFullPhoto,
  PokemonMovesContainer,
  Move,
  ImgDetails,
  StatsContainer,
  StatsName,
  StatsValue,
  ContainerTotal,
} from '../styles/DetailsStyles';

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { setError, error } = useContext(GlobalContext);
  const [newPic, setNewPic] = useState('');

  const getPokeDetails = fetchApi(`${baseUrl}pokemon/${params.id}`, setError);
  if (error) {
    goErrorPage(navigate);
  }
  useEffect(() => {
    if (getPokeDetails?.sprites.other['official-artwork'].front_default === null) {
      const arrayUrl = getPokeDetails.species.url.split('/');
      setNewPic(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          arrayUrl[arrayUrl.length - 2]
        }.png`,
      );
    }
  }, [getPokeDetails]);
  return (
    <DetailStyle>
      <ActionModal />
      <Header page={'details'} />
      <div>
        <Title>Detalhes</Title>
      </div>
      {getPokeDetails && (
        <Container color={colors[getPokeDetails.types[0].type.name]}>
          <FrontImage>
            <ImgDetails src={getPokeDetails.sprites.front_default} />
          </FrontImage>
          <BackImage>
            <ImgDetails src={getPokeDetails.sprites.back_default} />
          </BackImage>
          <StatsCard>
            <StatsTitle>Base Stats</StatsTitle>
            {getPokeDetails.stats?.map((item, index) => {
              return (
                <StatsContainer key={index}>
                  <StatsName>{stats[index]}</StatsName>
                  <StatsValue>{item.base_stat}</StatsValue>
                  <ProgressBar item={item} />
                </StatsContainer>
              );
            })}
            <ContainerTotal>
              <StatsName>Total</StatsName>
              <StatsValue>
                {getPokeDetails.stats.reduce((total, item) => {
                  return total + item.base_stat;
                }, 0)}
              </StatsValue>
            </ContainerTotal>
          </StatsCard>
          <PokeballContainer>
            <PokemonDetails>
              <div>
                <PokemonId>{`#${getPokeDetails.id}`}</PokemonId>
                <PokemonName>
                  {getPokeDetails.name.includes('-')
                    ? getPokeDetails.species.name
                    : getPokeDetails.name}
                </PokemonName>
                {getPokeDetails.types?.map((item) => {
                  return <TypeImg key={item.type.name} src={types[item.type.name]} />;
                })}
              </div>
              <PokemonMoves>
                <StatsTitle>Moves:</StatsTitle>
                <PokemonMovesContainer>
                  {getPokeDetails.moves?.map((item, index) => {
                    return <Move key={index}>{item.move.name}</Move>;
                  })}
                </PokemonMovesContainer>
              </PokemonMoves>
            </PokemonDetails>
            <PokemonFullPhotoContainer>
              <PokemonFullPhoto
                src={
                  getPokeDetails.sprites.other['official-artwork'].front_default === null
                    ? newPic
                    : getPokeDetails.sprites.other['official-artwork'].front_default
                }
              />
            </PokemonFullPhotoContainer>
          </PokeballContainer>
        </Container>
      )}
      <Footer />
    </DetailStyle>
  );
};

export default Details;
