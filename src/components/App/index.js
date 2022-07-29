// == Import
import { useState } from 'react';
import Header from '../Header';
import Form from '../Form';
import Ball from '../Ball';
import answers from '../../data/answers';
import './styles.css';

// == Composant
const App = () => {

  const [inputValue, setInputValue] = useState('');

  const displayResponse = () => {
    const randomInt = Math.floor(Math.random() * answers.length);
    console.log('randomInt >>>>', randomInt);
    console.log(answers[randomInt]);
    setInputValue('');
    console.log('inputValue >>>', inputValue);
  };

  return (
    <div className="app">
      <Header
        value={inputValue}
        onChangeInput={setInputValue}
        submitResponse={displayResponse}
      />
      <Ball />
    </div>

  );
};

// == Export
export default App;
