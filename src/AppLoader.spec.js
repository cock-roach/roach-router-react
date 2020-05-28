import React from 'react';
import { render, act } from '@testing-library/react'
import MixspaContext from '@mixspa/core/lib/context';
import createApp from './createApp';
import AppLoader from './AppLoader';

describe('AppLoader', () => {
  const Loader = () => <span data-testid="test-loader">Loading Bar</span>;
  const ErrorMessage = () => <span data-testid="test-error">Load error</span>;

  let app = {id: 'test-id', tag: 'test-app'};
  beforeAll(() => {
    createApp('test-app', (props) => {
      return (<div data-testid="test-app">Test App { props['data-test'] }</div>);
    });
    MixspaContext.getApp = jest.fn().mockReturnValue(app);
  });

  describe('#load success', () => {
    let loadPromise;

    beforeEach(() => {
      loadPromise = new Promise((resolve) => resolve(app));
      app.load = () => loadPromise;
    });

    it('should render loading string', async () => {
      const { container } = render(<AppLoader appId="test-id" data-test="Hello"/>);
      expect(container).toHaveTextContent('Loading');
      await act(() => loadPromise);
    });

    it('should render loading callback', async () => {
      const { getByTestId } = render(<AppLoader appId="test-id" renderLoading={ () => <Loader /> } data-test="Hello"/>);
      expect(getByTestId('test-loader')).toHaveTextContent('Loading Bar');
      await act(() => loadPromise);
    });

    it('should render loaded app', async () => {
      const { getByTestId } = render(<AppLoader appId="test-id" data-test="Hello"/>);
      await act(() => loadPromise);
      expect(getByTestId('test-app')).toHaveTextContent('Test App Hello');
    });
  });

  describe('#load error', () => {
    let loadPromise
    let mockOnError;

    beforeEach(() => {
      mockOnError = jest.fn();
      loadPromise = new Promise((resolve, reject) => reject(new Error('load app error')));
      app.load = () => loadPromise;
    });

    it('should invoke error callback when load error', async () => {
      render(<AppLoader appId="test-id" onError={ mockOnError }/>);
      await act(async () => {
        await expect(loadPromise).rejects.toThrow('load app error');
        expect(mockOnError).toHaveBeenCalled();
      });
    });

    it('should render load error', async () => {
      const { container } = render(<AppLoader appId="test-id" data-test="Hello"/>);
      await act(async () => {
        await expect(loadPromise).rejects.toThrow('load app error');
      });
      expect(container).toHaveTextContent('Load error');
    });

    it('should render load error render callback', async () => {
      const { getByTestId } = render(<AppLoader appId="test-id" data-test="Hello" renderError={ () => <ErrorMessage /> } />);
      await act(async () => {
        await expect(loadPromise).rejects.toThrow('load app error');
      });
      expect(getByTestId('test-error')).toHaveTextContent('Load error');
    });
  });
});
