import PropTypes from 'prop-types';
import './style.scss';

const Reload = ({ setAnswerDisplayed }) => {

  const handleSubmitReload = () => {
    console.log('New question is added');
    setAnswerDisplayed(false);
  };

  return (
    <form>
      <button className="questionSubmit pushable" type="submit" onSubmit={handleSubmitReload}>
        <span className="shadow" />
        <span className="edge" />
        <span className="front">
          Ask again!
        </span>
      </button>
    </form>
  );
};

export default Reload;

Reload.propTypes = {
  setAnswerDisplayed: PropTypes.func.isRequired,
};
