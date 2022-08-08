import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Question = ({ answerDisplayed, question }) => {

  return (
    <div className={answerDisplayed ? 'questionContainer animate__animated animate__fadeIn' : 'hidden'}>
      <div className="questionContent"> You asked: {question}</div>
    </div>
  );
};

export default Question;

Question.propTypes = {
  answerDisplayed: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
};
