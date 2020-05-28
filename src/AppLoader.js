import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import MixspaContext from '@mixspa/core/lib/context';

const AppLoader = ({appId, onError, renderLoading, renderError, ...rest}) => {
  const [appInfo, setAppInfo] = useState({});
  const [{ isLoading, isSuccess }, setLoadResult] = useState({ isLoading: true, isSuccess: false });

  useEffect(() => {
    setLoadResult({ isLoading: true, isSuccess: false });
    let app = MixspaContext.getApp(appId);
    app.load().then(appInfo => {
      setAppInfo(appInfo);
      setLoadResult({ isLoading: false, isSuccess: true });
    }).catch(e => {
      onError && onError(e, appId);
      setLoadResult({ isLoading: false, isSuccess: false });
    });
  }, [appId]);

  return (
    <div id={ appId }>
      { isLoading ? renderLoading() : (isSuccess ? <appInfo.tag {...rest}/> : renderError()) }
    </div>
  );
}

AppLoader.propTypes = {
  appId: PropTypes.string.isRequired,
  onError: PropTypes.func,
  renderError: PropTypes.func,
  renderLoading: PropTypes.func
};

AppLoader.defaultProps = {
  renderError: () => "Load error",
  renderLoading: () => "Loading..."
};

export default AppLoader;
