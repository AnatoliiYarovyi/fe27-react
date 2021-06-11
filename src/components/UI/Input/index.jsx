import { forwardRef } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = forwardRef(
  (
    {
      type = 'text',
      value,
      className,
      placeHolder,
      name,
      onChange,
      error,
      ...restProps
    },
    ref,
  ) => {
    const classList = [styles.label, className].join(' ');

    return (
      <label className={classList}>
        <input
          ref={ref}
          {...restProps}
          type={type}
          value={value}
          name={name}
          className={styles.input}
          placeholder={placeHolder}
          onChange={onChange}
        />
        {error && (
          <span className={styles.error} title={error}>
            {error}
          </span>
        )}
      </label>
    );
  },
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  onInput: PropTypes.func,
};

export default Input;
