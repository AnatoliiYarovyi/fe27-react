import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Router from './router/Router';
import Header from './components/Header';
import withName from './HOC/withName';
import MouseCords from './RenderProps/MouseCords';
import { Provider as ContextProvider } from './Context/context';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';

import './App.css';

class App extends Component {
  state = {
    isAuth: null,
  };

  componentDidMount() {
    Promise.resolve({
      auth: true,
      name: 'Alex',
    }).then(res => this.setState({ isAuth: res.auth }));
  }

  render() {
    const { isAuth } = this.state;
    const { name, logger } = this.props;

    return (
      <ReduxProvider store={store}>
        <ContextProvider value={{ theme: 'dark' }}>
          {/* <button onClick={logger}>Click me</button>
          {name} */}
          <Header />
          {/* <MouseCords>
            {({ x, y, index }) => (
              <h1>
                X axis: {x}, Y axis: {y}
                <br />
                Index is {index}
              </h1>
            )}
          </MouseCords> */}
          {isAuth !== null && !isAuth && <Redirect to="/unauthorized" />}
          <Router />
        </ContextProvider>
      </ReduxProvider>
    );
  }
}

export default withName('King Kong')(App);
