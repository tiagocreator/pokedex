import { useContext } from 'react';

import GlobalContext from '../../context/globalContext';

import { ActionModal, Header, PokemonCard, Footer } from '../../components/index';

import { MainGeral, ContainerTitle, Title } from '../../GlobalStyles';
import { ContainerPokedex } from '../styles/PokedexStyles';

const Pokedex = () => {
  const { pokedexList, setPokedexList, setModal, setSelect } = useContext(GlobalContext);

  return (
    <ContainerPokedex>
      <ActionModal />
      <Header page={'pokedex'} />
      <ContainerTitle>
        <Title>Meus Pokémons</Title>
      </ContainerTitle>
      {pokedexList && (
        <MainGeral>
          {pokedexList?.map((item) => {
            return (
              <PokemonCard
                key={item}
                setModal={setModal}
                setSelect={setSelect}
                poke={{ name: item }}
                pokedexList={pokedexList}
                setPokedexList={setPokedexList}
              />
            );
          })}
        </MainGeral>
      )}
      <Footer />
    </ContainerPokedex>
  );
};

export default Pokedex;
