import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HeroesList from '../components/HeroesList';
import dotaApi from '../api/dota.api';

class Heroes extends Component {
  state = {
    heroes: [],
  };

  async componentDidMount() {
    try {
      const { match, location, history } = this.props;
      const { data } = await dotaApi.fetchHeroes();
      this.setState(() => ({ heroes: data }));
      console.log(match);
      // history.replace('/error');
    } catch (error) {
      console.replace(error);
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

    return (
      <>
        <Switch>
          <Route
            path="/heroes/:id"
            render={({ match }) => {
              console.log(match);
              return <h1>Hello</h1>;
            }}
          />
        </Switch>
        <HeroesList onClick={this.clickHandler} heroes={heroes} />
      </>
    );
  }
}

export default Heroes;
