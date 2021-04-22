import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import socketClient  from "socket.io-client";

import Page from './main_page'
import Login from './login_page'
import Signup from './signup_page'
import GameOffline from './GameOffline';
import GameOnline from './GameOnline';

function App() {
  // const socket = socketClient("http://localhost:9000");


  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/game">
            <GameOffline />
          </Route>
          <Route path="/game_online">
            <GameOnline />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
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