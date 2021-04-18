import Header from './components/Header';
import Container from './components/UI/Container';
import SearchBar from './components/homepage/SearchBar';
import ApartmentsList from './components/homepage/ApartmentsList';
import apartments from './store/apartments.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <SearchBar />
        <ApartmentsList items={apartments} />
      </Container>
    </div>
  );
}

export default App;
