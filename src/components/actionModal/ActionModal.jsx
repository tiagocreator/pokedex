import { useContext } from 'react';

import GlobalContext from '../../context/globalContext';

import { ActionModalStyle } from '../styles/ActionModalStyles';

const ActionModal = () => {
  const { modal, setModal, select } = useContext(GlobalContext);

  return (
    <>
      {modal && (
        <ActionModalStyle onClick={() => setModal(false)}>
          <div>
            {select === 'catch' && (
              <>
                <h1>Gotcha!</h1>
                <p>O Pokémon foi adicionado a sua Pokédex</p>
              </>
            )}
            {select === 'remove' && (
              <>
                <h1>Oh, no!</h1>
                <p>O Pokémon foi removido da sua Pokedéx</p>
              </>
            )}
          </div>
        </ActionModalStyle>
      )}
    </>
  );
};

export default ActionModal;
