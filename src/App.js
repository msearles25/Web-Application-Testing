import React from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0
    }
  }

  addStrike = () => {
    this.setState(state => {
      if(state.strikes >= 3) {
        return {strikes: 0}
      }
      return {...state, strikes: state.strikes + 1}
    })
  }

  addBall = () => {
    this.setState(state => {
      if(state.balls >= 4) {
        return {balls: 0}
      }
      return {...state, balls: state.balls + 1}
    })
  }

  foulBall = () => {
    this.setState(state => {
      if(state.strikes >= 2) {
        return {strikes: state.strikes}
      }
      return {...state, strikes: state.strikes + 1 }
    })
  }

  hitBall = () => {
    this.setState({
      strikes: 0, 
      balls: 0
    })
  }

  render() {
    return (
      <div className="container">
        <Display strikes={this.state.strikes} balls={this.state.balls}/>
        <Dashboard
          addStrike={this.addStrike}
          addBall={this.addBall}
          foulBall={this.foulBall}
          hitBall={this.hitBall}
          />

      </div>
    );
  }
}

export default App;
