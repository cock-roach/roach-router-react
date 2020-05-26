import React from 'react';
import { render, screen } from '@testing-library/react'
import createApp from './createApp';

describe('createApp', () => {
  beforeEach(() => {
    createApp('app-test', (props) => {
      return (<div data-testid="test">Test App { props['data-test'] }</div>);
    });
  });

  it('should render app', () => {
    render(<app-test data-test="Attribute"/>);
    expect(screen.getByTestId('test')).toHaveTextContent('Test App Attribute');
  });
});
