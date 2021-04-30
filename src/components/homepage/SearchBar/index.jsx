import { useRef } from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const inputHandler = event => {
    onSearch(event.target.value);
  };

  const clickHandler = event => {
    console.log(inputRef.current.value);
  };

  return (
    <div ref={ref} className={styles.searchBar}>
      <Input className={styles.input} onInput={inputHandler} />
      <Button
        className={styles.button}
        onClick={clickHandler}
        data-decorate="true"
        data-icon="./loupe.svg"
      >
        Search
      </Button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
