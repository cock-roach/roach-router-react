import React from 'react';
import PropTypes from 'prop-types';
import Mixspa from '@mixspa/core';
import { withRouter } from 'react-router';

class EventSlot extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  componentDidMount() {
    Mixspa.on('mixspa:url:changed', (url) => {
      this.props.history.push(url);
    });
  }

  render() {
    return null;
  }
}

export default withRouter(EventSlot);
