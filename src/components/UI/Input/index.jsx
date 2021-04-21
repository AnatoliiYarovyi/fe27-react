import style from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({ type = 'text', value, className, placeHolder, onInput }) => {
  const classList = [style.input, className].join(' ');
  // document.querySelector('input').addEventListener('input', () => onInput())
  return (
    <input
      type={type}
      value={value}
      className={classList}
      placeholder={placeHolder}
      onInput={onInput}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  onInput: PropTypes.func,
};

export default Input;
