import styles from './List.module.css';
import PropTypes from 'prop-types';

const List = ({ children, col = 2 }) => {
  const classList = [styles.list, styles[`col${col}`]].join(' ');

  return <div className={classList}>{children}</div>;
};

List.propTypes = {
  col: PropTypes.oneOf([1, 2, 3, 4, 5]),
  children: PropTypes.node,
};

export default List;
