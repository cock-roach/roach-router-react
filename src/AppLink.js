import React from 'react';
import PropTypes from 'prop-types';
import MixspaLink from '@mixspa/core/lib/link';

const handleClick = (onLink, e) => {
  let shouldCall = onLink ? onLink(e) : true;
  e.preventDefault();
  shouldCall && MixspaLink.emitLink(e.target.getAttribute('href'));
};

const AppLink = ({to, onLink, ...rest}) => (
  <a href={ to } onClick={ e => handleClick(onLink, e) } {...rest}/>
);

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  onLink: PropTypes.func
};

export default AppLink;
