import React from 'react';
import Mixspa from '@mixspa/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const handleClick = (next, event) => {
  Mixspa.emit('mixspa:url:changed', event.target.getAttribute('href'));
  next && next(event);
};

const EventLink = ({onClick, ...rest}) => (
  <Link onClick={e => handleClick(onClick, e)} {...rest}/>
);

EventLink.propTypes = {
  onClick: PropTypes.func
};

export default EventLink;
