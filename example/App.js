import React from 'react';
import HelloWorld from '../src';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HelloWorld message="World"/>
      </div>
    );
  }
}
