import style from './Button.module.css';

const Button = ({
  className,
  children,
  type = 'button',
  disabled,
  onClick,
  ...restProps
}) => {
  const classList = [style.button, className].join(' ');

  return (
    <button
      {...restProps}
      className={classList}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
