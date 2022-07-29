import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Question = ({ answerDisplayed, question }) => {

  return (
    <div className={answerDisplayed ? 'question__container' : 'hidden'}>
      <div className="question__content"> You asked: {question}</div>
      {console.log('Displayed question >>>', question)}
    </div>
  );
};

export default Question;

Question.propTypes = {
  answerDisplayed: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
};
