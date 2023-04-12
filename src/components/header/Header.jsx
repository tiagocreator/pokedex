import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { goToHomePage, goToPokedex } from '../../Router';
import GlobalContext from '../../context/globalContext';

import { PokedexBtn, HeaderStyle, ReleasePokemonBtn, GetPokemonBtn } from '../styles/HeaderStyles';

import Logo from '../../assets/logo.png';

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
        {page !== 'home' && <span onClick={() => goToHomePage(navigate)}>Todos os Pokémons</span>}
      </div>
      <div>
        <img src={Logo} alt='logo' />
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
            Liberar Pokémon
          </ReleasePokemonBtn>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
