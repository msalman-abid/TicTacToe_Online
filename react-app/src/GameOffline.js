import ReactDOM from 'react-dom';
import './Game.css'
import {Button, Box, Typography, Grid, Container} from '@material-ui/core';
import Confetti from 'react-confetti';
import React, { Component } from 'react'


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
      gameCount: 1,
      Xscore: 0,
      Oscore: 0,
      timer: 3,
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
      this.props.setWinner(true);
    }
    
    // Best of Three Implementation
    if (this.props.mode == "bo3"){
      
      if (calculateWinner(squares)) {
        let winner = calculateWinner(squares);
        
        if(winner == 'X'){
          this.setState({
            Xscore : this.state.Xscore+=1
          })
        }
        else if(winner == 'O'){
          this.setState({
            Oscore : this.state.Oscore +=1
          })
        }
        if(this.state.gameCount != 3){
          this.state.gameCount += 1;
          
          this.setState({squares: Array(9).fill(null),
            xIsNext: true,
            winner: false});
            this.props.setWinner(false)
          }
          else if (this.state.Xscore != this.state.Oscore){
            this.props.setWinner(true);
          }
        }
        else if(checkDraw(squares)){
          if(this.state.gameCount != 3){
            this.state.gameCount += 1;
            
            this.setState({squares: Array(9).fill(null),
              xIsNext: true,
              winner: false});
              this.props.setWinner(false)
            }
            else if(this.state.Xscore == this.state.Oscore){
          this.props.setWinner(false);
        }
      }
    }
    
    // Rapid Fire Implementation
    else if(this.props.mode == "rapid"){
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        timer: 3,
      })
    }
  } 
  
  renderTime() {
    if (calculateWinner(this.state.squares) || checkDraw(this.state.squares)) {
      return;
    }
    if(this.state.timer >=0){
      return (
        <div>
          <h3>Time Remaining: {this.state.timer}</h3>
        </div>
      )
    }
    else{
      let squares = this.state.squares.slice();
      let val = this.state.xIsNext ? 'X' : 'O';

      let free = Array();
      for (let index = 0; index < squares.length; index++) {
        if(squares[index] == null){
          free.push(index);
        }
      }
      let i = free[Math.floor(Math.random() * free.length)];
      squares[i] = val;
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        timer: 3,
      })
    }
  }

  componentDidMount () {
    this.myInterval = setInterval(()=> {
      this.setState(prevState => ({
        timer: prevState.timer - 1
      }))
    }, 1000)
  }
  
  componentWillUnmount(){
    clearInterval(this.myInterval)
  }
  
  renderSquare(i) {
    return (<Square 
      value={this.state.squares[i]} 
      onClick={()=> this.handleClick(i)}
      />);
    }
    
    
    render() {
      let winner = calculateWinner(this.state.squares);
      let status, draw;
      
      if (winner) {
        if(this.props.mode == "bo3"){
          winner = (this.state.Xscore > this.state.Oscore) ? 'X' : 'O';
          status = 'Winner: ' + winner;
          if(this.state.Xscore == this.state.Oscore){
            status = 'Draw';
            draw= true;
            winner = null;
          }
        }
        else{
          status = 'Winner: ' + winner;
        }
      }
      
      else if(checkDraw(this.state.squares))
      {
        if(this.props.mode == "bo3" && this.state.gameCount != 3){ 
          status = 'Player Turn: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        else{
          status = 'Draw';
          draw= true;
        }
      }
      else {
        status = 'Player Turn: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      
      let status_class = winner? "status_winner":draw?"status_draw":"status";
      
      if(this.props.mod =="rapid"){
        if(this.state.timer <= 3){
          
        }
        
      }
        
      return ( 
        <Grid container spacing={10} justify='center' direction='column' alignItems='center'>
          <Grid item>
          <Typography variant='h5' align='center' className={status_class}>
            {status}
            {this.renderTime()}
          </Typography>
          </Grid>

          <Grid item>
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
          </Grid>

          <Grid item>
          <Button variant='outlined' size='large'  
          onClick={() => {this.setState({squares: Array(9).fill(null),
            xIsNext: true,
            winner: false,
            gameCount: 1,
            Xscore: 0,
            Oscore: 0
          }); 
          this.props.setWinner(false);}}
          >
            Reset Game
          </Button>
          </Grid>

      </Grid>
    );
  }
}

class GameOffline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    apiResponse: "", 
    gameWinner: false};
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

  boardSetWinner=(winner)=>{
    this.setState({gameWinner:winner});
  }

  
  render() {
    return (
      <>
          {this.renderConfetti()}

        <Box>
            
            <Container maxWidth='lg'
            style={{
              position: 'absolute', 
              left: '50%', 
              top: '50%',
              transform: 'translate(-50%, -50%)'}}
              >
              <Board setWinner={this.boardSetWinner} mode={this.props.mode}/>  
            </Container>
              <Button variant='outlined' size='large' href="/">Abandon</Button>
              
        </Box>    
      </>
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