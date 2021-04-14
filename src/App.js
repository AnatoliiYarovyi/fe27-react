import Header from './components/Header';
import User from './components/User';
import Container from './components/UI/Container';
import './App.css';

const Meals = ({ type }) => {
  if (type === 'vegetables') {
    return <div className="vegetables">vegetables</div>;
  }

  if (type === 'fruits') {
    return <div className="fruits">fruits</div>;
  }

  return <div>Unknown</div>;
};

function App() {
  const randomVal = Math.random();

  return (
    <div className="App">
      <Header />
      <Container>
        {randomVal > 0.5 ? (
          <User name="John" description="sadasd" age={18} />
        ) : (
          'Not found'
        )}
        <Meals type="fruits" />
      </Container>
    </div>
  );
}

export default App;
