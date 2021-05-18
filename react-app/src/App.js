import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Page from './main_page'
import Login from './login_page'
import SignUp from './signup_page'
import GameOffline from './GameOffline';
import GameOnline from './GameOnline';
import useToken from './useToken';
import Leaderboard from './leader_board_page'
import Account from './profile_page'


function App() {
  
  var accessOnlineGame, loggedIn;
  var { token, setToken } = useToken();
  
  function updateToken(result) {
    if (result === "won")
    token.won++;
    else if (result === "draw")
    token.draw++;
    else if (result === "lost")
    token.lost++;
  }


  if(!token ) {
    loggedIn = false;
    accessOnlineGame = <Login setToken={setToken} />
    // accessProfile = <Account setToken={setToken} />

  }
  else{
    // console.log(token);
    loggedIn = true;
    accessOnlineGame = <GameOnline m_token={token} setToken={updateToken}/>
    // accessProfile = <
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/game">
            <GameOffline mode={"regular"}/>
          </Route>
          <Route path="/game_rapid">
            <GameOffline mode={"rapid"}/>
          </Route>
          <Route path="/game_bo3">
            <GameOffline mode={"bo3"}/>
          </Route>
          <Route path="/game_online">
            {accessOnlineGame}
          </Route>
          <Route path="/profile">
            <Account m_token={token}/>
          </Route>
          <Route path="/login">
            <Login setToken={setToken}/>
          </Route>
          <Route path="/signup">
            <SignUp setToken={setToken} />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard/>
          </Route>
          <Route path="/">
            <Page status={loggedIn}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;