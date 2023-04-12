import { useEffect, useState } from 'react';

import GlobalContext from '../../context/globalContext';
import fetchApi from '../../fetchApi';
import { baseUrl } from '../../data';

const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;
  const [pokedexList, setPokedexList] = useState('');
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState('');
  const [pagination, setPagination] = useState(0);
  const [error, setError] = useState(false);

  if (pokedexList === '') {
    const getLocalPokedexList = JSON.parse(localStorage.getItem('pokedexList'));
    setPokedexList(getLocalPokedexList ? getLocalPokedexList : []);
  }

  useEffect(() => {
    localStorage.setItem('pokedexList', JSON.stringify(pokedexList));
  }, [pokedexList]);

  const fetchAllPokemons = fetchApi(`${baseUrl}pokemon/?offset=${pagination * 30}&limit=30`);
  const totalPages = fetchAllPokemons?.count / 30;
  const values = {
    pokedexList,
    setPokedexList,
    fetchAllPokemons,
    modal,
    setModal,
    select,
    setSelect,
    pagination,
    setPagination,
    totalPages,
    setError,
    error,
  };
  return <Provider value={values}>{props.children}</Provider>;
};

export default GlobalState;
