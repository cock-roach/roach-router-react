import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Loading from './Loading';
import AppLoader from '../../src/AppLoader';
import classNames from 'classnames/bind';
import styles from './Content.scss';

let cx = classNames.bind(styles);

const Content = () => (
  <div className={ cx('content') }>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/app-one"><AppLoader appId="react-app-one"><Loading/></AppLoader></Route>
      <Route path="/app-two"><AppLoader appId="react-app-two"><Loading/></AppLoader></Route>
    </Switch>
  </div>
);

export default Content;
