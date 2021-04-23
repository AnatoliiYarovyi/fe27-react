import style from './Input.module.css';
// import PropTypes from 'prop-types';


const Input = ({
  type = 'text',
  value,
  className,
  placeHolder,
  name,
  onChange,
  ...restProps
}) => {
  const classList = [style.input, className].join(' ');

  return (
    <input
      {...restProps}
      type={type}
      value={value}
      name={name}
      className={classList}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  onInput: PropTypes.func,
};

export default Input;
