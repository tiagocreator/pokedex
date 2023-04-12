import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Details, Pokedex, Error404 } from './pages/index';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='page/:page/' element={<Home />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='pokedex' element={<Pokedex />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export const goToHomePage = (navigate) => {
  navigate('/page/1');
};

export const goToHomePageId = (navigate, id) => {
  navigate(`/page/${id}`);
};

export const goToDetailsPage = (navigate, id) => {
  navigate(`/details/${id}`);
};

export const goToPokedex = (navigate) => {
  navigate('/pokedex');
};

export const goErrorPage = (navigate) => {
  navigate('/notFound');
};
