import React from 'react';
import PropTypes from 'prop-types';
import Mixspa from '@mixspa/core';
import { withRouter } from 'react-router';

class EventHolder extends React.Component {
  static defaultProps = {
    basename: ''
  };
  static propTypes = {
    history: PropTypes.object,
    basename: PropTypes.string,
    children: PropTypes.node
  };

  componentDidMount() {
    Mixspa.on('mixspa:url:changed', (url) => {
      if (url.startsWith(this.props.basename)) {
        this.props.history.push(url.substring(this.props.basename.length));
      }
    });
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(EventHolder);
