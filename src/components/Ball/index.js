import PropTypes from 'prop-types';
import './style.scss';
import 'animate.css';

const Ball = ({ answerDisplayed, toDisplay }) => {

  return (
    <main className="ballContainer">
      <div className="ball animate__animated animate__wobble">
        <div className="ball--white ">
          <div className={!answerDisplayed ? 'eight animate__animated animate__bounceIn' : 'eight--hidden animate__animated__bounceOut'}>8</div>
          {answerDisplayed && (
            <div className="answer animate__animated animate__rubberBand ">{toDisplay}</div>) }
        </div>
      </div>
      <div className="shadow animate__animated animate__wobble" />
    </main>
  );
};

export default Ball;

Ball.propTypes = {
  answerDisplayed: PropTypes.bool.isRequired,
  toDisplay: PropTypes.string.isRequired,
};
