import { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import style from './MouseDecorator.module.css';

class MouseDecorator extends Component {
  static imgSrc = '';
  static getDerivedStateFromProps(nextProps, prevState) {
    const { imgSrc } = nextProps;

    // домешивает imgSrc в state
    if (prevState.imgSrc) {
      return {
        imgSrc: prevState.imgSrc,
      };
    }

    return {
      imgSrc,
    };
  }

  state = {
    x: 0,
    y: 0,
    imgSrc: '',
    visible: false,
  };

  mouseHandler = throttle(event => {
    const { clientX, clientY, target } = event;

    if (!target.dataset.decorate) {
      this.setState({
        visible: false,
      });
      return;
    }
    const imgSrc = target.dataset.icon;

    this.setState({
      x: clientX,
      y: clientY,
      visible: true,
      imgSrc,
    });
  }, 80);

  componentDidMount() {
    window.addEventListener('mousemove', this.mouseHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseHandler);
  }

  render() {
    const { x, y, imgSrc, visible } = this.state;

    return (
      visible && (
        <div
          className={style.mouseDecorator}
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
        >
          {!imgSrc && <span>🎁</span>}
          <img width="40" height="40" src={imgSrc} alt="" />
        </div>
      )
    );
  }
}

MouseDecorator.propTypes = {
  imgSrc: PropTypes.string,
};

export default MouseDecorator;
