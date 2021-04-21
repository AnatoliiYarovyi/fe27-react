import Button from '../../UI/Button';
import Input from '../../UI/Input';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const inputHandler = event => {
    onSearch(event.target.value);
  };

  const clickHandler = event => {
    console.log(event);
  };

  return (
    <div className={styles.searchBar}>
      <Input className={styles.input} onInput={inputHandler} />
      <Button className={styles.button} onClick={clickHandler}>
        Search
      </Button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
