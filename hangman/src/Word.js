import React from 'react';
import Gallows from './Gallows';

const Word = (props) => {
  console.log('Word props: ', props)
  return (
    <div className="Word">
      <h1 className="heading__title">Let's Play Hangman</h1>
      <div className="guess-container">
        <textarea placeholder="?" className="guess__input" name="guess" id="" cols="1" rows="1"/>
        <div className="guess__button">Guess</div>
        <div className="currentStateOfWord">{props.state.wordsSoFar}</div>
      </div>
      <Gallows state={props.state} />
    </div>
  )
}

export default Word;