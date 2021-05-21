import React from 'react';
import AirQualityView from '../components/AirQuality';
import { connect } from 'react-redux';
import asyncActionCreator from '../store/asyncActions';
import { fetchCities } from '../store/slices/airQuality';
import { selectByCountry } from '../store/selectors/airQuality';

class AirQualityPage extends React.Component {
  state = {
    countryName: '',
  };
  async componentDidMount() {
    this.props.addCities();
  }

  handleSearch = event => {
    const { value } = event.target;
    this.setState({ countryName: value });
  };

  render() {
    const { loading, filterByName } = this.props;
    const { countryName } = this.state;
    const currentCities = filterByName(countryName);

    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <input type="search" onChange={this.handleSearch} />
        {loading ? 'Loading data' : <AirQualityView cities={currentCities} />}
      </div>
    );
  }
}

const MSTP = state => ({
  cities: state.airQuality.items,
  loading: state.airQuality.loading,
  filterByName: selectByCountry(state),
});

const MDTP = dispatch => ({
  // addCities: () => dispatch(asyncActionCreator()),
  addCities: () => dispatch(fetchCities()),
});

export default connect(MSTP, MDTP)(AirQualityPage);
