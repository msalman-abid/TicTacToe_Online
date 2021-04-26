import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import Routes from './Routes';
// import LinkButton from './LinkButton'
import Button from '@material-ui/core/Button';
import tto from './tto.png';
import './main_page.css';


class Page extends React.Component
{
  render()
  {
    return (
      
        <div class="parent">
          {/* <img src={tto} alt={"Tic Tac Toe Image"}/> */}
          <h1>TIC TAC TOE ONLINE</h1>
            {/* <LinkButton class ="child btn" to='/game'>Play Offline</LinkButton> */}
            <Button variant="contained" color="default" size='large' href="/game">Play Offline</Button>
            <br/>
            <Button variant="contained" color="default" size='large' href="/game_online">Play Online</Button>
            <br/>
            <Button variant="contained" color="default" size='large' href="/login">Log In</Button>
            {/* <LinkButton class ="child btn" to='/login'>Log In</LinkButton> */}
        </div>
    );
  }
}

export default Page;