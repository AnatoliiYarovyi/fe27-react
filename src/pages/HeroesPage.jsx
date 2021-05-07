import { Component } from 'react';
import HeroesList from '../components/HeroesList';
import Loader from '../components/Loader';
import dotaApi from '../api/dota.api';

class Heroes extends Component {
  state = {
    heroes: [],
    isDataLoaded: false,
  };

  async componentDidMount() {
    try {
      const { data } = await dotaApi.fetchHeroes();
      this.setState(() => ({ heroes: data }));
    } catch (error) {
      console.replace(error);
    } finally {
      this.setState(() => ({ isDataLoaded: true }));
    }
  }

  clickHandler = async () => {
    try {
      const { data } = await dotaApi.fetchHeroes();
      this.setState(() => ({ heroes: data }));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { heroes, isDataLoaded } = this.state;

    return (
      <div style={{ position: 'relative', minHeight: '80vh' }}>
        <Loader loading={!isDataLoaded} />
        <HeroesList onClick={this.clickHandler} heroes={heroes} />
      </div>
    );
  }
}

export default Heroes;
