'use strict'
export default class SpotItEngine {
  constructor(){
    this.card1 = null;
    this.card2 = null;
    this.isGameOver = false;
    this.resetTwoCards();
  }

  resetTwoCards = () => {
  //remove backticks for normal single quotes if there's an issue
      this.card1 = ['igloo', 'dragon', 'art', 'lightning', 'knight', 'man', 'dog', 'padlock'];
      this.card2 = ['padlock', 'lips', 'anchor', 'music-note', 'flower', 'exclamation-point', 'car', 'key'];
      this.card1.sort(() => Math.random()< .5 ? -1 : 1);
      this.card2.sort(() => Math.random()< .5 ? -1 : 1);
      this.guessesLeft = 3; 

  }

  getState = () => {
    return {
      card1: this.card1,
      card2: this.card2,
      guessesLeft: this.guessesLeft,
      isGameOver: this.isGameOver,
    }
  }

  isMatch = (symbol) => {
    if(this.isGameOver){
      return;
    }

    if(this.guessesLeft <= 1) {
      this.isGameOver = true;
    }
    this.guessesLeft--;

    const isInCard1 = this.card1.includes(symbol);
    const isInCard2 = this.card2.includes(symbol);
    const isMatch = isInCard1 && isInCard2;
    // right now just switcing the two cards I have
    // TODO: switch out diffrent set of cards when matched.
    if (isMatch) {
      let cards =[this.card1, this.card2]
      this.resetTwoCards();
    }
    return isMatch
  }
}