import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import Routes from './Routes';
import LinkButton from './LinkButton'

import './main_page.css';


class Page extends React.Component
{
  render()
  {
    return (
        <div class="parent">
            <LinkButton class ="child btn" to='/game'>Play Offline</LinkButton>

            <button class="child btn">Log In</button>
        </div>
    );
  }
}

export default Page;