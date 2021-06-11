import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/UI/Container';
import SearchBar from '../components/homepage/SearchBar';
import ApartmentsList from '../components/homepage/ApartmentsList';
import apartmentsApi from '../api/apartments.api';
import withAuth from '../HOC/withAuth';
import { toggleBookingApartments } from '../store/apartments/apartments.slice';

const Homepage = () => {
  const [apartments, setApartments] = useState([]);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.users.token);

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

  const handleBooking = async id => {
    try {
      const body = {
        apartmentId: id,
        date: new Date(),
      };
      const { data } = await apartmentsApi.toggleApartmentsBooking(body, token);
      dispatch(toggleBookingApartments(data));
    } catch (error) {
      console.error(error);
    }
  };

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

export default withAuth(Homepage);
