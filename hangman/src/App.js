import React, {Component} from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import hangman1 from './images/hangman1.jpg';
import hangman2 from './images/hangman2.jpg';
import hangman3 from './images/hangman3.jpg';
import hangman4 from './images/hangman4.jpg';
import hangman5 from './images/hangman5.jpg';
import hangman6 from './images/hangman6.jpg';
import hangman7 from './images/hangman7.jpg';
import hangman8 from './images/hangman8.jpg';
import Word from './Word';
import Gallows from './Gallows';
import axios from 'axios';


class App extends Component {
    state = {
        wordSoFar: [],
        guesses: [],
        mistakes: 0,
        finalWord: '',
        letter: '',
        gallows: [
            {
                stage: 0,
                image: hangman1
            },
            {
                stage: 1,
                image: hangman2
            },
            {
                stage: 2,
                image: hangman3
            },
            {
                stage: 3,
                image: hangman4
            },
            {
                stage: 4,
                image: hangman5
            },
            {
                stage: 5,
                image: hangman6
            },
            {
                stage: 6,
                image: hangman7
            },
            {
                stage: 7,
                image: hangman8
            },
        ]
    }

    componentDidMount() {

        axios.get('http://localhost:5000/guess')
            .then(response => {

                console.log('response: ', response)
                const data = response.data
                this.setState({
                    wordSoFar:data.wordSoFar,
                    mistakes: data.mistakes,
                    finalWord:data.finalWord,
                })

            }).catch(error => {

                console.log('error message: ', error)

            });
    }

  render() {
    return (
      <div className="app">
        <Word state={this.state} reMounter={() =>{this.componentDidMount()}}/>
        <Gallows state={this.state}/>
      </div>
    );
  }
}

export default App;
