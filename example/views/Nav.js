import React from 'react';
import AppLink from '../../src/AppLink';
import classNames from 'classnames/bind';
import styles from './Nav.scss';

let cx = classNames.bind(styles);

const Nav = () => (
  <div className={ cx('nav') }>
    <AppLink className={ cx('link') } to="/">Home</AppLink> |
    <AppLink className={ cx('link') } to="/app-one">App One</AppLink> | 
    <AppLink className={ cx('link') } to="/app-two">App Two</AppLink>
  </div>
);

export default Nav;
