import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Page from './main_page'
import Login from './login_page'
import Signup from './signup_page'
import GameOffline from './GameOffline';
import GameOnline from './GameOnline';
import useToken from './useToken';


function App() {
  
  var accessOnlineGame;
  const { token, setToken } = useToken();

  if(!token) {
    accessOnlineGame = <Login setToken={setToken} />
  }
  else{
    // console.log(token);
    accessOnlineGame = <GameOnline />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/game">
            <GameOffline />
          </Route>
          <Route path="/game_online">
            {accessOnlineGame}
          </Route>
          <Route path="/login">
            <Login setToken={setToken}/>
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