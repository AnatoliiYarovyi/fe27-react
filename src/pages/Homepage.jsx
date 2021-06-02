import { useState, useEffect } from 'react';
import Container from '../components/UI/Container';
import SearchBar from '../components/homepage/SearchBar';
import ApartmentsList from '../components/homepage/ApartmentsList';
import apartmentsApi from '../api/apartments.api';

const Homepage = () => {
  const [apartments, setApartments] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const { data } = await apartmentsApi.fetchApartments();
        setApartments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApartments();
  }, []);

  const searchHandler = query => {
    setQuery(query);
  };

  const getCurrentApartments = () => {
    const regExp = new RegExp(query, 'gi'); // /${query}/gi - создает регулятное выржение

    if (query) {
      return apartments.filter(apartment => regExp.test(apartment.title));
    }

    return apartments;
  };

  const handleBooking = () => {};

  const currentApartment = getCurrentApartments();

  return (
    <div className="App">
      <Container>
        <SearchBar onSearch={searchHandler} />
        <ApartmentsList
          items={currentApartment}
          onBookApartment={handleBooking}
        />
      </Container>
    </div>
  );
};

export default Homepage;
