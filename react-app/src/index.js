import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import './index.css';
import Game from './App';

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
    document.getElementById('root')
  );
  