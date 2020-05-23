import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import MixspaLink from '@mixspa/core/lib/link';
import { render } from '@testing-library/react'
import AppContainer from './AppContainer';

describe('AppContainer', () => {
  let App;

  beforeEach(() => {
    const history = createMemoryHistory();
    App = (
      <Router history={ history }>
        <AppContainer baseUrl="http://www.test.com">
          <Route exact path="/"><div data-testid="home">Home Page</div></Route>
          <Route path="/test"><div data-testid="test">Test Page</div></Route>
        </AppContainer>
      </Router>
    );
  });

  it('should render home page by default', () => {
    const { getByTestId, queryByTestId } = render(App);
    expect(queryByTestId('test')).toBeNull()
    expect(getByTestId('home')).toHaveTextContent('Home Page');
  });

  it('should render test page when receive url change event', () => {
    const { getByTestId, queryByTestId } = render(App);
    MixspaLink.emitLink("http://www.test.com/test");
    expect(queryByTestId('home')).toBeNull()
    expect(getByTestId('test')).toHaveTextContent('Test Page');
  });

  it('should do not render new page when receive other url change event', () => {
    const { getByTestId, queryByTestId } = render(App);
    MixspaLink.emitLink("http://www.other.com/test");
    expect(queryByTestId('test')).toBeNull()
    expect(getByTestId('home')).toHaveTextContent('Home Page');
  });
});
