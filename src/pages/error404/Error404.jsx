import { useContext } from 'react';

import GlobalContext from '../../context/globalContext';

import { Header, Footer } from '../../components/index';

import { Error404Style } from '../styles/Error404Styles';

const Error404 = () => {
  const { setError } = useContext(GlobalContext);
  setError(false);
  return (
    <div>
      <Header />
      <Error404Style>
        <h1>Erro 404: Página não encontrada.</h1>
      </Error404Style>
      <Footer />
    </div>
  );
};

export default Error404;
