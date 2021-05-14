import { useState, useEffect, Component } from 'react';
import { Consumer } from '../Context/context';

// class Header extends Component {
//   state = {
//     x: 0,
//     y: 0,
//     index: 0
//   };

//   incrementIndex = () => this.setState(({ index }) => ({ index: index + 1}))

//   render() {
//     return <div onClick={this.incrementIndex}>{this.children({ index: this.state.index })}</div>;
//   }
// }
const MouseCords = ({ children }) => {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);
  const incrementIndex = () => setIndex(index + 1);

  useEffect(() => {
    const handleMouseMove = event => {
      const { clientX, clientY } = event;
      setCords({
        x: clientX,
        y: clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Consumer>
      {value => {
        return (
          <div onClick={incrementIndex}>
            Theme is: {value.theme}
            {children({ ...cords })}
          </div>
        );
      }}
    </Consumer>
  );
};

export default MouseCords;
