import PropTypes from 'prop-types';
import Form from '../Form';
import './style.scss';

const Header = ({ inputValue, onChangeInput, submitResponse }) => {

  return (
    <header className="header">
      <Form inputValue={inputValue} submitResponse={submitResponse} onChangeInput={onChangeInput} />
    </header>
  );

};

export default Header;

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
};
