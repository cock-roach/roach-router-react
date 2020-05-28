import React from 'react';
import AppLink from '../../src/AppLink';
import classNames from 'classnames/bind';
import styles from './App.scss';

let cx = classNames.bind(styles);

const App = () => (
  <div className={ cx('app') }>
    <div>I am App One</div>
    <AppLink to="/app-two">Go to App Two</AppLink>
  </div>
);

export default App;
