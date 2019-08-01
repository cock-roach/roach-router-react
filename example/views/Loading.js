import React from 'react';
import classNames from 'classnames/bind';

import styles from './Loading.scss';

let cx = classNames.bind(styles);

const Loading = () => (
  <div className={ cx('loading') }>Loading ...</div>
);

export default Loading;
