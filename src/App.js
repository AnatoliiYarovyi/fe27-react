import { Component } from 'react';
import shortid from 'shortid';
import Header from './components/Header';
import Container from './components/UI/Container';
import SearchBar from './components/homepage/SearchBar';
import ApartmentsList from './components/homepage/ApartmentsList';
import MouseDecorator from './components/MouseDecorator';
import apartments from './store/apartments.json';
import Button from './components/UI/Button';
import Modal from './components/Modal';
import ApartmentsForm from './components/homepage/ApartmentsForm';

import './App.css';

class App extends Component {
  state = {
    query: '',
    apartments: apartments,
    open: false,
  };

  searchHandler = query => {
    this.setState(() => {
      return { query };
    });
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

  handleSubmitApartmentForm = ({
    descr,
    title,
    rating,
    imgUrl,
    closeOnSubmit,
  }) => {
    const apartment = {
      id: shortid.generate(),
      rating: Number(rating),
      imgUrl,
      title,
      descr,
    };

    this.setState(prevState => ({
      apartments: [apartment, ...prevState.apartments],
    }));

    if (closeOnSubmit) {
      this.handleToggleModal(false);
    }
  };

  getCurrentApartments = () => {
    const { query, apartments } = this.state;
    const regExp = new RegExp(query, 'gi'); // /${query}/gi - создает регулятное выржение

    if (query) {
      return apartments.filter(apartment => regExp.test(apartment.title));
    }

    return apartments;
  };

  handleToggleModal = isOpen => {
    this.setState(prevState => ({ open: !!isOpen ?? !prevState.open }));
  };

  render() {
    const currentApartment = this.getCurrentApartments();
    const { open } = this.state;

    return (
      <div className="App">
        <Header />
        {/* {open && <MouseDecorator imgSrc="./mask.svg" />} */}
        <MouseDecorator imgSrc="./mask.svg" />
        <Container>
          <SearchBar onSearch={this.searchHandler} />
          <Button onClick={this.handleToggleModal}>Add apartment</Button>
          <ApartmentsList items={currentApartment} onDelete={this.deleteById} />
        </Container>
        <Modal open={open} onClose={this.handleToggleModal}>
          <ApartmentsForm onSubmit={this.handleSubmitApartmentForm} />
        </Modal>
      </div>
    );
  }
}

export default App;
