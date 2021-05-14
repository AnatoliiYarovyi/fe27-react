import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Router from './router/Router';
import Header from './components/Header';
import withName from './HOC/withName';
import { Provider as ContextProvider } from './Context/context';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';

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

    return (
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ContextProvider value={{ theme: 'dark' }}>
            <Header />
            {isAuth !== null && !isAuth && <Redirect to="/unauthorized" />}
            <Router />
          </ContextProvider>
        </PersistGate>
      </ReduxProvider>
    );
  }
}

export default withName('King Kong')(App);
