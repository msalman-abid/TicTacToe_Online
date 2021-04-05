import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
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
      // if(calculateWinner(squares) || squares[i]) {
      //   return;
      // }

        let curr_board = this;
    //   let squares ;
      let val = this.state.xIsNext ? 'X' : 'O';

      fetch('http://localhost:9000/game', {
      method: 'PUT',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      idx: i,
      symbol: val
      })

      }).then((res) => {
        return res.json();
      }).then( (res) => {
          if(calculateWinner(squares)) {
              return;
            }
            squares = res.data

        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        })
      } );

    }

    renderSquare(i) {
      return (<Square 
      value={this.state.squares[i]} 
      onClick={()=> this.handleClick(i)}
      />);
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      console.log(winner);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div>
          <div className="status">
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
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }
  
  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
      this.callAPI();
  }
    
    render() {
      return (
        <div>

          <div className="btn">
            Abandon   
          </div>

          <div className="game">
            <Board />
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

  function clearBoard()
  {
    let temp;
    fetch('http://localhost:9000/game');
  }

export default Game;