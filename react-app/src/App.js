import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Game from './Game'
import Page from './main_page'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;