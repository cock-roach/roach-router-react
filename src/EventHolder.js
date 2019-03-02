import React from 'react';
import PropTypes from 'prop-types';
import Mixspa from '@mixspa/core';
import { withRouter } from 'react-router';

class EventHolder extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    children: PropTypes.node
  };

  componentDidMount() {
    Mixspa.on('mixspa:url:changed', (url) => {
      this.props.history.push(url);
    });
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(EventHolder);
