import PropTypes from 'prop-types';
import style from './Checkbox.module.css';
import cx from 'classnames';
import shortid from 'shortid';

const Checkbox = ({ onChange, name, children, className, checked }) => {
  const id = shortid.generate();

  return (
    <div className={cx(style.checkboxWrapper, className)}>
      <input
        id={id}
        name={name}
        checked={checked}
        className={style.checkbox}
        type="checkbox"
        onChange={onChange}
      />
      <label htmlFor={id} className={style.label}>
        {children}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Checkbox;
