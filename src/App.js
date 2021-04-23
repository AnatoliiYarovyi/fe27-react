import { Component } from 'react';
import Header from './components/Header';
import Container from './components/UI/Container';
import SearchBar from './components/homepage/SearchBar';
import ApartmentsList from './components/homepage/ApartmentsList';
import apartments from './store/apartments.json';

import './App.css';

class App extends Component {
  state = {
    query: '',
    apartments: apartments,
  };

  // в таком случае нужно байндить контекст
  // searchHandler(query) {
  //   console.log(this.state.query);
  // }

  searchHandler = query => {
    this.setState(() => {
      return { query };
    });

    // используй колбек для обновления состояния
    // this.setState(
    //   prevState => {
    //     return { query: prevState.query + query };
    //   },
    //   () => {
    //     console.log(this.state.query);
    //   },
    // );

    // не мутируем стейт напрямую
    // this.state.query = query;
  };

  deleteById = id => {
    this.setState(prevState => {
      return {
        apartments: prevState.apartments.filter(
          apartment => apartment.id !== id,
        ),
      };
    });
  };

  getCurrentApartments = () => {
    const { query, apartments } = this.state;
    const regExp = new RegExp(query, 'gi'); // /${query}/gi - создает регулятное выржение

    if (query) {
      return apartments.filter(apartment => regExp.test(apartment.title));
    }

    return apartments;
  };

  render() {
    const currentApartment = this.getCurrentApartments();

    return (
      <div className="App">
        <Header />

        <Container>
          <SearchBar onSearch={this.searchHandler} />
          <ApartmentsList items={currentApartment} onDelete={this.deleteById} />
        </Container>
      </div>
    );
  }
}

export default App;
