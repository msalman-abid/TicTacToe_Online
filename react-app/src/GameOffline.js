import React from 'react';
import ReactDOM from 'react-dom';
import './Game.css';
// import LinkButton from './LinkButton'
import Button from '@material-ui/core/Button';
import Confetti from 'react-confetti'
// import useWindowSize from 'react-use-window-size'



function Square(props) {
  var color1= "orange";
  if (props.value === 'X')
  {
    color1="lightgreen";
  }
  return (
      <button className="square" onClick={props.onClick} style={{color:color1}}>
        {props.value}
      </button>
    );
  }

  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        winner: false,
      };
    }
    
    handleClick(i) {
      let squares = this.state.squares.slice();
      let val = this.state.xIsNext ? 'X' : 'O';

      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = val;
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      })
      if (calculateWinner(squares)) {
        this.props.setWinner();
      }

    }

    renderSquare(i) {
      return (<Square 
      value={this.state.squares[i]} 
      onClick={()=> this.handleClick(i)}
      />);
    }


  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status, draw;
      if (winner) {
        status = 'Winner: ' + winner;
      }

      else if(checkDraw(this.state.squares))
      {
        status = 'Draw';
        draw= true;
      } 
      else {
        status = 'Player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      let status_class = winner? "status_winner":draw?"status_draw":"status";
      return ( 
        <div>
          <div className={status_class}>
            {status}
          </div>
          <div class="row border-b">
            <div class="col border-r">
              {this.renderSquare(0)}
            </div>
            <div class="col border-r">
              {this.renderSquare(1)}
            </div>
            <div class="col">
              {this.renderSquare(2)}
            </div>
          </div>

          <div class="row border-b">
            <div class="col border-r">
              {this.renderSquare(3)}
            </div>
            <div class="col border-r">
              {this.renderSquare(4)}
            </div>
            <div class="col">
              {this.renderSquare(5)}
            </div>
          </div>

          <div class="row">
            <div class="col border-r">
              {this.renderSquare(6)}
            </div>
            <div class="col border-r">
              {this.renderSquare(7)}
            </div>
            <div class="col">
              {this.renderSquare(8)}
            </div>
          </div>
        
        </div>
      );
    }
  }
  
  class GameOffline extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
      apiResponse: "", 
      gameWinner: false };
 
  }
  
  callAPI() {
      fetch("http://localhost:9000/game/clear")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: "Board Reset!" }));
  }

  renderConfetti(){
      if (this.state.gameWinner){
        return (<Confetti/>)
      }
  }

  componentWillMount() {
      this.callAPI();
  }

    boardSetWinner=()=>{
      this.setState({gameWinner:true});
    }
    
    render() {
      return (
        <div>
          {this.renderConfetti()}
          <Button href="/">Abandon</Button>

          <div className="game">
            <Board setWinner={this.boardSetWinner}/>
          </div>

          {/* <div className="game">

            <p className="App-intro">"Test: " + {this.state.apiResponse}</p>
            <ol>{/* TODO </ol></div> */}
          
        </div>
      );
    }
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function checkDraw(squares) {
    for (let i = 0; i < squares.length; i++) {
      if(squares[i] == null){
        return false;
      }
    }
    return true; 
  }
  function clearBoard()
  {
    let temp;
    fetch('http://localhost:9000/game');
  }

export default GameOffline;