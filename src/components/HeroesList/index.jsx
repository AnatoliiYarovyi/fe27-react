import { Component } from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import List from '../UI/List';
import Container from '../UI/Container';

class HeroesList extends Component {
  state = {
    role: '',
  };

  filterHeroes = role => {
    this.setState(() => ({ role }));
  };

  render() {
    const { heroes } = this.props;
    const { role } = this.state;
    const uniqueRoles = [...new Set(heroes.flatMap(hero => hero.roles))];
    const currentHeroes = role
      ? heroes.filter(hero => hero.roles.includes(role))
      : heroes;

    return (
      <Container>
        <div className="">
          {uniqueRoles.map(role => (
            <button
              key={role}
              onClick={() => {
                this.filterHeroes(role);
              }}
            >
              {role}
            </button>
          ))}
        </div>
        <List col={5}>
          {currentHeroes.map(hero => (
            <Hero hero={hero} key={hero.id} />
          ))}
        </List>
      </Container>
    );
  }
}

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      attack_type: PropTypes.string,
      id: PropTypes.number,
      legs: PropTypes.number,
      localized_name: PropTypes.string,
      name: PropTypes.string,
      primary_attr: PropTypes.string,
      roles: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default HeroesList;
