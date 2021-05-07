import React, { Component } from 'react';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import dotaApi from '../api/dota.api';
import heroDetailsList from '../components/HeroDetails/herosDetailsList.json';
import HeroDetails from '../components/HeroDetails';
import generateImagePath from '../helpers/generateImagePath';

class HeroPage extends Component {
  state = {
    hero: null,
  };

  async componentDidMount() {
    const { match } = this.props;
    const {
      params: { id },
    } = match;

    try {
      const hero = await dotaApi.fetchHeroById(id);
      this.setState(() => ({ hero }));
    } catch (error) {
      console.error(error);
    }
  }

  backToPrevPage = () => {
    const { history, location } = this.props;
    const { state } = location;

    if (!state?.from) return;

    history.push(state.from);
  };

  render() {
    const { hero } = this.state;
    const { location } = this.props;
    const { state } = location;
    const showBackButton = state?.from;

    if (!hero) {
      return null;
    }

    const heroName = hero.name.replace('npc_dota_hero_', '');
    const imgUrl = generateImagePath(heroName);

    return (
      <Container>
        {showBackButton && (
          <Button onClick={this.backToPrevPage}>👈 Back</Button>
        )}
        <HeroDetails
          name={hero.localized_name}
          imgUrl={imgUrl}
          details={heroDetailsList[heroName]}
        />
      </Container>
    );
  }
}

export default HeroPage;
