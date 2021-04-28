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

// class Component {
//   constructor() {}

//   mount() {
//     if (!this.render) {
//       console.error('please provide render method');
//       return;
//     }

//     this.render();

//     if (this.componentDidMount) {
//       this.componentDidMount();
//     }
//   }

//   unMount() {
//     if (this.componentWillUnmount) {
//       this.componentWillUnmount();
//     }
//   }
// }

// class Footer extends Component {
//   render() {
//     return <h1>hello</h1>;
//   }

//   componentDidMount() {
//     document.querySelector('.title')
//     console.log('mounted');
//   }

//   componentWillUnmount() {
//     console.log('unmounted');
//   }
// }
