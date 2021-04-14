import PropTypes from 'prop-types';

const User = ({ name, description, age }) => {
  return (
    <div className="user">
      <h2>
        {name}. Age: {age}
      </h2>
      <p className="description">{description}</p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  age: PropTypes.number,
};

export default User;
