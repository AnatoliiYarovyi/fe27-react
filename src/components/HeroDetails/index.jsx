import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lightThemeAction } from '../../store/actions';

const HeroDetails = ({ name, imgUrl, details, theme, changeToLightTheme }) => {
  return (
    <div>
      <img src={imgUrl} alt="" />

      <h1>{name}</h1>
      <p onClick={changeToLightTheme}>{details}</p>
      <h2>Theme: {theme}</h2>
    </div>
  );
};

HeroDetails.propTypes = {
  details: PropTypes.string,
  name: PropTypes.string,
  imgUrl: PropTypes.string,
};

const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
  changeToLightTheme: () => dispatch(lightThemeAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetails);
