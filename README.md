# mixspa-react
Mixspa-React is a wrapper for mixspa-core.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/react.svg)](https://npmjs.org/package/@mixspa/react)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/react.svg)](https://npmjs.org/package/@mixspa/react)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-react.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-react)

[![NPM](https://nodei.co/npm/@mixspa/react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/react/)

## What it come from?

Pleas reference here: [mixspa-core](https://github.com/mixspa/mixspa-core)

## Apis for this library

### createApp: create a mixspa app.

```js
import { createApp } from '@mixspa/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createApp(
  'app-tag',
  (props) => (
    <BrowserRouter baseName={ props.baseName }>
      <App />
    </BrowserRouter>
  )
);
```

### AppLink: This link will send a event to event bus.

```js
import { AppLink } from '@mixspa/react';

const NavBar = () => (
  <div>
    <AppLink to="/menu-a"/>
    <AppLink to="/menu-b"/>
  </div>
);
```

### AppLoader: load a mixspa app.

```js
import { AppLoader } from '@mixspa/react';

const Loading = () => <div>Loading...</div>

const Content = () => (
  <div>
    <AppLoader appId="appId" renderLoading={ () => <Loading /> }/>
  </div>
);
```

### AppContainer: Receive event and handle url change event.

```js
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import { AppContainer } from '@mixspa/react';

ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <Switch>
        <Route path="/test-a"/>
        <Route path="/test-b"/>
      </Switch>
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('app')
);
```

## License

mixspa-react is released under the [MIT license](https://github.com/mixspa/mixspa-react/blob/master/LICENSE).
