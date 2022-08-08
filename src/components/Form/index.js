import PropTypes from 'prop-types';
import './style.scss';

const Form = ({ inputValue, onChangeInput, submitResponse }) => {

  const handleChange = (event) => {
    onChangeInput(event.target.value);
    console.log('Your question was >>>', event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitResponse();
    onChangeInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="questionInput" value={inputValue} type="text" onChange={handleChange} placeholder="Will this website bug?" />
      <button className="questionSubmit" type="submit">Ask your question</button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  submitResponse: PropTypes.string.isRequired,
};
