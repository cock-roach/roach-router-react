import React from 'react';
import PropTypes from 'prop-types';
import Mixspa from '@mixspa/core';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Nav from './views/Nav';
import Content from './views/Content';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Mixspa.onLink(url => {
      console.log('linked to: ' + url);
      this.props.history.push(url);
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Content />
      </div>
    );
  }
}

export default withRouter(App);
