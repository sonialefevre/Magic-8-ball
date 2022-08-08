import PropTypes from 'prop-types';
import Form from '../Form';
import Reload from '../Reload';
import './style.scss';

const Header = ({
  answerDisplayed,
  setAnswerDisplayed,
  inputValue,
  onChangeInput,
  submitResponse }) => {

  return (
    <header className="header">
      { !answerDisplayed
      && (
      <Form
        inputValue={inputValue}
        submitResponse={submitResponse}
        onChangeInput={onChangeInput}
      />
      )}

      {answerDisplayed
      && <Reload setAnswerDisplayed={setAnswerDisplayed} />}

    </header>
  );

};

export default Header;

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
  answerDisplayed: PropTypes.bool.isRequired,
  setAnswerDisplayed: PropTypes.func.isRequired,
};
