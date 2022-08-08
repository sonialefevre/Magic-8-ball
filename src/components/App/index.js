// == Import
import { useState } from 'react';
import Header from '../Header';
import Question from '../Question';
import Ball from '../Ball';
import answers from '../../data/answers';
import './styles.css';

// == Composant
const App = () => {

  // Etat gérant la récupération de l'input user
  const [inputValue, setInputValue] = useState('');
  // Etat stockant la réponse pour l'afficher au submit
  const [question, setQuestion] = useState('');
  // Etat déterminant si la réponse doit s'afficher au lieu du 8
  const [answerDisplayed, setAnswerDisplayed] = useState(false);
  // Sélectionne la réponse à afficher selon le nombre aléatoire généré
  const [toDisplay, setToDisplay] = useState({});

  const makeResponse = () => {
    const randomInt = Math.floor(Math.random() * answers.length);
    console.log('randomInt >>>>', randomInt);
    setToDisplay(answers[randomInt]);
  };

  const displayResponse = () => {
    setAnswerDisplayed(true);
    console.log('answerDisplayed >>>', answerDisplayed);
    console.log('inputValue >>>', inputValue);
    setQuestion(inputValue);
  };

  const handleSubmit = () => {
    makeResponse();
    displayResponse();
    setInputValue('');
    console.log('inputValue won\'t reset whyyy >>>', inputValue);
  };

  return (
    <div className="app">
      <Header
        classname="container"
        inputValue={inputValue}
        onChangeInput={setInputValue}
        submitResponse={handleSubmit}
        answerDisplayed={answerDisplayed}
        setAnswerDisplayed={setAnswerDisplayed}
      />
      {answerDisplayed && (
        <Question
          className="container"
          answerDisplayed={answerDisplayed}
          question={question}
        />
      )}

      <Ball
        classname="container"
        answerDisplayed={answerDisplayed}
        toDisplay={toDisplay.label}
      />
    </div>

  );
};

// == Export
export default App;
