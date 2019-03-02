import React from 'react';
import PropTypes from 'prop-types';
import Mixspa from '@mixspa/core';

class AppLoader extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onError: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    className: '',
    onError: () => {}
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const { name, onError } = this.props;
    Mixspa.load(name).then(appInfo => {
      this.setState({
        isLoading: false,
        appInfo: appInfo
      });
    }).catch(error => onError(error, name));
  }

  render() {
    const { name, className, children, ...rest } = this.props;
    const { isLoading, appInfo } = this.state;
    return (
      <div className = { className || name.toLowerCase() }>
        { isLoading ? children : <appInfo.tag {...rest}/> }
      </div>
    );
  }
}

export default AppLoader;
