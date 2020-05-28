import React from 'react';
import AppLink from '../../src/AppLink';
import classNames from 'classnames/bind';
import styles from './App.scss';

let cx = classNames.bind(styles);

const App = () => (
  <div className={ cx('app') }>
    <div>I am App Two</div>
    <AppLink to="/app-one">Go to App One</AppLink>
  </div>
);

export default App;
