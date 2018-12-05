import React from 'react';
import PropTypes from 'prop-types';
import style from './HelloWorld.scss';

class HelloWorld extends React.Component {
  static propTypes = {
    message: PropTypes.string
  };

  constructor(pros) {
    super(pros);
  }

  render() {
    return (
      <div className={ style.hello }>
        Hello { this.props.message }
      </div>
    );
  }
}

export default HelloWorld;
