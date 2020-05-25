import React from 'react';
import MixspaLink from '@mixspa/core/lib/link';
import { render, fireEvent } from '@testing-library/react'
import AppLink from './AppLink';

describe('AppLink', () => {
  beforeEach(() => {
    MixspaLink.emitLink = jest.fn();
  });

  it('should render link', () => {
    const { getByTestId } = render(<AppLink data-testid="test" to="http://www.test.com/test">Go</AppLink>);
    expect(getByTestId('test')).toHaveTextContent('Go');
    expect(getByTestId('test')).toHaveAttribute('href', 'http://www.test.com/test');
  });

  it('should go to test url when click event', () => {
    const { getByTestId } = render(<AppLink data-testid="test" to="http://www.test.com/test">Go</AppLink>);
    fireEvent.click(getByTestId('test'));
    expect(MixspaLink.emitLink).toHaveBeenCalledWith('http://www.test.com/test');
  });

  it('should stop go to url when link callback return false', () => {
    const { getByTestId } = render(<AppLink data-testid="test" to="http://www.test.com/test" onLink={ () => false }>Go</AppLink>);
    fireEvent.click(getByTestId('test'));
    expect(MixspaLink.emitLink).not.toHaveBeenCalled();
  });

  it('should go to url when link callback return true', () => {
    const { getByTestId } = render(<AppLink data-testid="test" to="http://www.test.com/test" onLink={ () => true }>Go</AppLink>);
    fireEvent.click(getByTestId('test'));
    expect(MixspaLink.emitLink).toHaveBeenCalledWith('http://www.test.com/test');
  });
});
