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
    <form className="animate__animated animate__slideInDown" onSubmit={handleSubmit}>
      <input className="questionInput" value={inputValue} type="text" onChange={handleChange} placeholder="Will this website bug?" />
      <button className="questionSubmit pushable" type="submit">
        <span className="shadow" />
        <span className="edge" />
        <span className="front">
          Ask your question
        </span>
      </button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  submitResponse: PropTypes.string.isRequired,
};
