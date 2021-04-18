import style from './Input.module.css';
console.log(style);

const Input = ({ type = 'text', value, className, placeHolder }) => {
  const classList = [style.input, className].join(' ');

  return (
    <input
      type={type}
      value={value}
      className={classList}
      placeholder={placeHolder}
    />
  );
};

export default Input;
