import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLink from '../src/AppLink';
import AppLoader from '../src/AppLoader';
import classNames from 'classnames/bind';
import styles from './app.scss';

let cx = classNames.bind(styles);

const Loading = () => <div className={ cx('loading') }>Loading ...</div>;

const App = () => (
  <div>
    <div className={ cx('nav') }>
      <AppLink className={ cx('link') } to="/">Home</AppLink> |
      <AppLink className={ cx('link') } to="/app-one">App One</AppLink> |
      <AppLink className={ cx('link') } to="/app-two">App Two</AppLink>
    </div>
    <div className={ cx('content') }>
      <Switch>
        <Route exact path="/">
          <div className={ cx('home') }>Home Page</div>
        </Route>
        <Route path="/app-one">
          <AppLoader appId="react-app-one" renderLoading={ () => <Loading /> } />
        </Route>
        <Route path="/app-two">
          <AppLoader appId="react-app-two" renderLoading={ () => <Loading /> } />
        </Route>
      </Switch>
    </div>
  </div>
);

export default App;
