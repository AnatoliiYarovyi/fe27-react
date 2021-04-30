import { Component } from 'react';
// import Homepage from './pages/Homepage';
import HeroesPage from './pages/HeroesPage';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    // return <Homepage />;
    return (
      <>
        <Header />
        <HeroesPage />
      </>
    );
  }
}

export default App;
