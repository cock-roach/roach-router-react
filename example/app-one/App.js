import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';

let cx = classNames.bind(styles);

const App = () => (
  <div className={ cx('app') }>
    <span>I am App One</span>
  </div>
);

export default App;
