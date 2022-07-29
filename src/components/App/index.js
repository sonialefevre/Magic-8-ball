// == Import
import { useState } from 'react';
import Header from '../Header';
import Question from '../Question';
import Ball from '../Ball';
import answers from '../../data/answers';
import './styles.css';

// == Composant
const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [answerDisplayed, setAnswerDisplayed] = useState(false);
  const [toDisplay, setToDisplay] = useState({});

  const displayResponse = () => {
    const randomInt = Math.floor(Math.random() * answers.length);
    console.log('randomInt >>>>', randomInt);
    setToDisplay(answers[randomInt]);
    setAnswerDisplayed(true);
    console.log(answerDisplayed);
    console.log('inputValue >>>', inputValue);
    setInputValue('');
  };

  return (
    <div className="app">
      <Header
        value={inputValue}
        onChangeInput={setInputValue}
        submitResponse={displayResponse}
      />
      {answerDisplayed && (
        <Question answerDisplayed={answerDisplayed} question={inputValue} />
      )}

      <Ball answerDisplayed={answerDisplayed} toDisplay={toDisplay.label} />
    </div>

  );
};

// == Export
export default App;
