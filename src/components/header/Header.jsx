import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { goToHomePage, goToPokedex } from '../../Router';
import GlobalContext from '../../context/globalContext';

import {
  PokedexBtn,
  HeaderStyle,
  ReleasePokemonBtn,
  GetPokemonBtn,
  LogoImage,
  LeftArrow,
} from '../styles/HeaderStyles';

import Logo from '../../assets/logo.png';
import LeftArrowImg from '../../assets/img/left-arrow.png';

const Header = ({ page }) => {
  const { setPokedexList, pokedexList, setModal, setSelect } = useContext(GlobalContext);
  const navigate = useNavigate();
  const Params = useParams();

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

  return (
    <HeaderStyle>
      <div>
        {page !== 'home' && (
          <span onClick={() => goToHomePage(navigate)}>
            <LeftArrow src={LeftArrowImg} alt=''></LeftArrow>
            Todos os Pokémons
          </span>
        )}
      </div>
      <div>
        <LogoImage src={Logo} alt='logo'></LogoImage>
      </div>
      <div>
        {page === 'home' && <PokedexBtn onClick={() => goToPokedex(navigate)}>Pokedéx</PokedexBtn>}
        {page === 'details' &&
          (pokedexList.includes(Params.id.toLowerCase()) || (
            <GetPokemonBtn
              onClick={() => {
                setPokedexList([...pokedexList, Params.id.toLowerCase()]);
                setModal(true);
                setSelect('catch');
              }}>
              Capturar Pokémon!
            </GetPokemonBtn>
          ))}
        {page === 'details' && pokedexList.includes(Params.id.toLowerCase()) && (
          <ReleasePokemonBtn onClick={() => releasePokemon(Params.id.toLowerCase())}>
            Excluir da Pokédex
          </ReleasePokemonBtn>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
