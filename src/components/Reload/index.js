import PropTypes from 'prop-types';
import './style.scss';

const Reload = ({ setAnswerDisplayed }) => {

  const handleSubmitReload = () => {
    console.log('New question is added');
    setAnswerDisplayed(false);
  };

  return (
    <form>
      <button className="questionSubmit" type="submit" onSubmit={handleSubmitReload}>Ask again!</button>
    </form>
  );
};

export default Reload;

Reload.propTypes = {
  setAnswerDisplayed: PropTypes.func.isRequired,
};
