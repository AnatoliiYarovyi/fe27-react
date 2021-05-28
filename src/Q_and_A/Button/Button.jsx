import React, { Children } from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return <button>{children}</button>;
};

Button.propTypes = {};

export default Button;
