import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import GlobalContext from '../../context/globalContext';
import { goErrorPage, goToHomePage, goToHomePageId } from '../../Router';

import { ActionModal, Header, PokemonCard } from '../../components/index.js';

import { MainGeral, Title } from '../../GlobalStyles';
import { PaginationContainer, SelectedPage, PageNumber } from '../styles/HomeStyles.js';

const Home = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    fetchAllPokemons,
    setPokedexList,
    pokedexList,
    setPagination,
    pagination,
    totalPages,
    setModal,
    setSelect,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (pagination <= 0) {
      goToHomePage(navigate, pagination);
    }
    if (pagination > 0) {
      goToHomePageId(navigate, pagination + 1);
    }
  }, [pagination]);

  useEffect(() => {
    if (Number(params.page) <= totalPages + 1) {
      const page = Number(params.page) - 1;
      setPagination(page);
    }
    if (Number(params.page) > totalPages + 1) {
      goErrorPage(navigate);
    }
  }, [totalPages]);

  const nextPage = () => {
    setPagination(pagination + 1);
  };

  const previousPage = () => {
    setPagination(pagination - 1);
  };

  return (
    <>
      <ActionModal />
      <Header page={'home'} />
      <div>
        <Title>Todos os Pokémons</Title>
      </div>

      {fetchAllPokemons && (
        <>
          <MainGeral>
            {fetchAllPokemons.results?.map((item, index) => {
              return (
                <PokemonCard
                  key={index + 1}
                  poke={item}
                  setPokedexList={setPokedexList}
                  pokedexList={pokedexList}
                  setModal={setModal}
                  setSelect={setSelect}
                />
              );
            })}
          </MainGeral>
          <PaginationContainer>
            {pagination - 1 >= 0 && <button onClick={previousPage}>Anterior</button>}
            {pagination - 1 >= 0 && (
              <PageNumber onClick={() => setPagination(pagination - 1)}>{pagination}</PageNumber>
            )}
            <SelectedPage>{pagination + 1}</SelectedPage>
            {pagination + 1 <= totalPages && (
              <PageNumber onClick={() => setPagination(pagination + 1)}>
                {pagination + 2}
              </PageNumber>
            )}
            {pagination + 1 <= totalPages && <button onClick={nextPage}>Próxima</button>}
          </PaginationContainer>
        </>
      )}
    </>
  );
};

export default Home;
