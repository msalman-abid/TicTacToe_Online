import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import './index.css';
import Game from './App';
import Page from '/index_page'

// class Square extends React.Component {
  
//   render() {
//       return (
//         <button 
//           className="square" 
//           onClick={() => { this.props.onClick()}}//mb err
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }
  
  
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    // <Page />, uncomment to render index page with 2 buttons
    document.getElementById('root')
  );
  