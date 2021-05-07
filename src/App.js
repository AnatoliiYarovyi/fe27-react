import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Router from './router/Router';
import Header from './components/Header';

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
      <>
        <Header />
        {isAuth !== null && !isAuth && <Redirect to="/unauthorized" />}
        <Router />
      </>
    );
  }
}

export default App;
