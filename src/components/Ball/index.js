import PropTypes from 'prop-types';
import './style.scss';

const Ball = ({ answerDisplayed, toDisplay }) => {

  return (
    <main>
      <div className="ball">
        <div className="ball--white">
          <div className={!answerDisplayed ? 'eight' : 'eight--hidden'}>8</div>
          {answerDisplayed && (
            <div className="answer">{toDisplay}</div>) }
        </div>
      </div>
      <div className="shadow" />
    </main>
  );
};

export default Ball;

Ball.propTypes = {
  answerDisplayed: PropTypes.bool.isRequired,
  toDisplay: PropTypes.string.isRequired,
};
