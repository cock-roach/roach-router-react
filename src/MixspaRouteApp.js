import React from 'react';
import PropTypes from 'prop-types';
import MixspaEvent from '@mixspa/events';
import { withRouter } from 'react-router';

class MixspaRouteApp extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    children: PropTypes.object
  };

  componentDidMount() {
    MixspaEvent.on('mixspa:url:changed', (url) => {
      this.props.history.push(url);
    });
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(MixspaRouteApp);
