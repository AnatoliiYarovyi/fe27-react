import PropTypes from 'prop-types';
import style from './Modal.module.css';

const Modal = ({ open, onClose, children }) => {
  const handleClose = event => {
    const { target, currentTarget } = event;

    if (target === currentTarget) {
      onClose && onClose(false);
    }
  };

  const classList = [style.modal, open ? style.open : ''].join(' ');

  return (
    <section className={classList} onMouseDown={handleClose}>
      <div className={style.modalInner}>
        {children}
        <button className={style.xButton} onClick={handleClose}>
          💣
        </button>
      </div>
    </section>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
