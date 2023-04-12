import { Router } from './Router';
import { GlobalState } from './components/index';

import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <GlobalStyle>
      <GlobalState>
        <Router />
      </GlobalState>
    </GlobalStyle>
  );
};

export default App;
