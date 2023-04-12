import { useContext } from 'react';

import GlobalContext from '../../context/globalContext';

import { Header } from '../../components/index';

import { Error404Style } from '../styles/Error404Styles';

const Error404 = () => {
  const { setError } = useContext(GlobalContext);
  setError(false);
  return (
    <div>
      <Header />
      <Error404Style>
        <p>Erro 404: Página não encontrada.</p>
      </Error404Style>
    </div>
  );
};

export default Error404;
