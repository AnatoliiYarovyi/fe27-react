// import PropTypes from 'prop-types';
import style from './Checkbox.module.css';
import shortid from 'shortid';

const Checkbox = ({ onChange, name, children}) => {
  const id = shortid.generate();

  return (
    <div className={style.checkboxWrapper}>
      <input id={id} name={name} className={style.checkbox} type="checkbox" onChange={onChange}/>
      <label htmlFor={id} className={style.label}>{children}</label>
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string
};

export default Checkbox;