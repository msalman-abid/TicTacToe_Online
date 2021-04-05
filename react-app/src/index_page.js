import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Routes from './Routes';

import './index_page.css';


class Page extends React.Component
{
  render()
  {
    return (
        <div class="parent">
            <button class="child btn">Play Offline</button>

            <button class="child btn">Log In</button>
        </div>
    );
  }
}

export default Page;