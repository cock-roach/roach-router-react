import React from 'react';
import Mixspa from '@mixspa/core';
import PropTypes from 'prop-types';

const handleClick = e => {
  event.preventDefault();
  Mixspa.emitLink(e.target.getAttribute('href'));
};

const AppLink = ({base, to, ...rest}) => (
  <a href={ base + to } onClick={ handleClick } {...rest}/>
);

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  base: PropTypes.string
};

AppLink.defaultProps = {
  base: ''
};

export default AppLink;
