import { Component } from 'react';
import HeroesList from '../components/HeroesList';
import dotaApi from '../api/dota.api';

class Heroes extends Component {
  state = {
    heroes: [],
  };

  async componentDidMount() {
    try {
      const { data } = await dotaApi.fetchHeroes();
      this.setState(() => ({ heroes: data }));
    } catch (error) {
      console.error(error);
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
    const { heroes } = this.state;
    return <HeroesList onClick={this.clickHandler} heroes={heroes} />;
  }
}

export default Heroes;
