'use strict';

import React, {Component, Fragment} from 'react';
import SpotItEngine from './spot-it-engine.js';


export default class SpotIt extends Component {
  constructor(props) {
    super(props);
    this.engine = new SpotItEngine();
    this.state = this.engine.getState();
  }

  handelClick = (symbol) => {
    this.engine.isMatch(symbol);
    this.setState(this.engine.getState());
  }

  render= () => {
    return <Fragment>
      <div>
        Guesses Left: {this.state.guessesLeft}
        </div> 
      <div>
        {this.state.card1.map((symbol,i) => {
          return <span key={i} onClick={() => this.handelClick(symbol)}>{symbol} </span>
        })}
      </div>
      <div>  
      {this.state.card2.map((symbol, i) => {
           return <span key={i} onClick={() => this.handelClick(symbol)}>{symbol} </span>
        })}</div>
      
      </Fragment>
  }
}