import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MixspaLink from '@mixspa/core/lib/link';

const AppContainer = ({baseUrl, children}) => {
  let history = useHistory();
  useEffect(() => {
    let listener = MixspaLink.onLink(url => {
      if (url.startsWith(baseUrl)) {
        history.push(url.substring(baseUrl.length));
      }
    });
    return () => MixspaLink.offLink(listener);
  });

  return children;
}

AppContainer.propTypes = {
  baseUrl: PropTypes.string,
  children: PropTypes.node
};

AppContainer.defaultProps = {
  baseUrl: ''
};

export default AppContainer;
