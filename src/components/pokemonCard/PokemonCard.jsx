import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import fetchApi from '../../fetchApi';
import { baseUrl } from '../../data';
import { goToDetailsPage } from '../../Router';
import { types, colors } from '../../data';

import {
  PokemonCardStyle,
  CardSectionOne,
  CardSectionTwo,
  GetPokemonBtn,
  ReleasePokemonBtn,
} from '../styles/PokemonCardStyles';

const PokemonCard = ({ poke, setPokedexList, pokedexList, setModal, setSelect }) => {
  const navigate = useNavigate();
  const [newPic, setNewPic] = useState('');
  const fetchPokemon = fetchApi(`${baseUrl}pokemon/${poke.name}`);

  const releasePokemon = (pokemon) => {
    const newArray = pokedexList.filter((item) => {
      if (item !== pokemon) {
        return item;
      }
    });
    setPokedexList(newArray);
    setModal(true);
    setSelect('remove');
  };

  useEffect(() => {
    if (fetchPokemon?.sprites.other['official-artwork'].front_default === null) {
      const arrayUrl = fetchPokemon.species.url.split('/');
      setNewPic(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          arrayUrl[arrayUrl.length - 2]
        }.png`,
      );
    }
  }, [fetchPokemon]);

  return (
    <>
      {fetchPokemon && (
        <PokemonCardStyle color={colors[fetchPokemon.types[0].type.name]}>
          <CardSectionOne>
            <div>
              <p>{`#${fetchPokemon.id}`}</p>
              <p>
                {fetchPokemon.name.includes('-') ? fetchPokemon.species.name : fetchPokemon.name}
              </p>
              <div>
                {fetchPokemon.types?.map((item) => {
                  return <img key={item.type.name} src={types[item.type.name]} alt='' />;
                })}
              </div>
            </div>
            <div>
              <span onClick={() => goToDetailsPage(navigate, fetchPokemon.name)}>Detalhes</span>
            </div>
          </CardSectionOne>

          <CardSectionTwo>
            <div>
              <img
                src={
                  fetchPokemon.sprites.other['official-artwork'].front_default === null
                    ? newPic
                    : fetchPokemon.sprites.other['official-artwork'].front_default
                }
              />
            </div>
            {pokedexList.includes(fetchPokemon.name) || (
              <GetPokemonBtn
                onClick={() => {
                  setPokedexList([...pokedexList, fetchPokemon.name]);
                  setModal(true);
                  setSelect('catch');
                }}>
                Capturar!
              </GetPokemonBtn>
            )}
            {pokedexList.includes(fetchPokemon.name) && (
              <ReleasePokemonBtn onClick={() => releasePokemon(fetchPokemon.name)}>
                Excluir
              </ReleasePokemonBtn>
            )}
          </CardSectionTwo>
        </PokemonCardStyle>
      )}
    </>
  );
};

export default PokemonCard;
