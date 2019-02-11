import React from 'react';
import MixspaEvent from '@mixspa/events';
import { Link } from 'react-router-dom';

const handleClick = (next, event) => {
  MixspaEvent.emit('mixspa:url:changed', event.target.getAttribute('href'));
  next && next(event);
};

const MixspaLink = ({onClick, ...rest}) => (
  <Link onClick={e => handleClick(onClick, e)} {...rest}/>
);

export default MixspaLink;
