import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Page from './main_page'
import Login from './login_page'
import SignUp from './signup_page'
import GameOffline from './GameOffline';
import GameOnline from './GameOnline';
import useToken from './useToken';
import Profile from './profile_page'
import Leaderboard from './leader_board_page'
import LogedinMain from './loggedin_main_page'



function App() {
  
  var accessOnlineGame;
  const { token, setToken } = useToken();

  if(!token) {
    accessOnlineGame = <Login setToken={setToken} />
  }
  else{
    accessOnlineGame = <GameOnline />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/logged_main">
            <LogedinMain />
          </Route>
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
            <SignUp />
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