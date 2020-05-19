import React from 'react';
import PropTypes from 'prop-types';
import MixspaLink from '@mixspa/core/lib/link';

const handleClick = (e, next) => {
  next && next(e);
  e.preventDefault();
  MixspaLink.emitLink(e.target.getAttribute('href'));
};

const AppLink = ({base, to, onClick, ...rest}) => (
  <a href={ base + to } onClick={ e => handleClick(e, onClick) } {...rest}/>
);

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  base: PropTypes.string,
  onClick: PropTypes.func
};

AppLink.defaultProps = {
  base: ''
};

export default AppLink;
