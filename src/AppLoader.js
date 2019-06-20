import React from 'react';
import PropTypes from 'prop-types';
import Mixspa from '@mixspa/core';

class AppLoader extends React.Component {
  static propTypes = {
    appId: PropTypes.string.isRequired,
    className: PropTypes.string,
    onError: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    className: '',
    onError: () => {}
  };

  state = { };

  static getDerivedStateFromProps(props, state) {
    return {
      isLoading: !!(props.appId) && props.appId != state.prevAppId
    };
  }

  componentDidMount() {
    this.loadApp(this.props.appId, this.props.onError);
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.loadApp(this.props.appId, this.props.onError);
    }
  }

  loadApp(appId, onError) {
    Mixspa.load(appId).then(appInfo => {
      this.setState({
        isLoading: false,
        appInfo: appInfo,
        prevAppId: appId
      });
    }).catch(error => onError(error, appId));
  }

  render() {
    const { appId, className, children, ...rest } = this.props;
    const { isLoading, appInfo } = this.state;
    return (
      <div className = { className || appId.toLowerCase() }>
        { isLoading ? children : <appInfo.tag {...rest}/> }
      </div>
    );
  }
}

export default AppLoader;
