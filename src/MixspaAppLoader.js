import React from 'react';
import PropTypes from 'prop-types';
import MixspaLoader from '@mixspa/loader';

const MixspaLoading = () => <div>Loading...</div>;

class MixspaAppLoader extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    loading: PropTypes.node
  };

  static defaultProps = {
    className: '',
    loading: MixspaLoading
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    MixspaLoader.loadApp(this.props.name).then(appInfo => {
      this.setState({
        isLoading: false,
        appInfo: appInfo
      });
    });
  }

  render() {
    const { name, className, loading, ...rest } = this.props;
    const { isLoading, appInfo } = this.state;
    return (
      <div className = { className || name }>
        { isLoading? <loading /> : <appInfo.tag {...rest}/>}
      </div>
    );
  }
}

export default MixspaAppLoader;
