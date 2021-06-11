import { Component } from 'react';
import Router from './router/Router';
import Header from './components/Header';
import apartmentsApi from './api/apartments.api';
import { setBookedApartments } from './store/apartments/apartments.slice';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const { token, setBookedApartments } = this.props;

    try {
      const { data } = await apartmentsApi.fetchBookedApartments(token);
      setBookedApartments(data);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

const mapSateToProps = state => ({
  token: state.users.token,
});

const mapDispatchToProps = dispatch => ({
  setBookedApartments: bookedApartments =>
    dispatch(setBookedApartments(bookedApartments)),
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
