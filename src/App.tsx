import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
