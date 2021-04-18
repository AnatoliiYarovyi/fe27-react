import Button from '../../UI/Button';
import Input from '../../UI/Input';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Input className={styles.input} />
      <Button className={styles.button}>Search</Button>
    </div>
  );
};

export default SearchBar;
