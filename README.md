# mixspa-react
Mixspa-React wrapper some Component to make use Mixspa simple.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/react.svg)](https://npmjs.org/package/@mixspa/react)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/react.svg)](https://npmjs.org/package/@mixspa/react)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-react.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-react)

[![NPM](https://nodei.co/npm/@mixspa/react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/react/)

## How to use?

There are three wrapper Components.

### MixspaAppLoader: for load app.

Using it like this:

```js
import MixspaLoader from '@mixspa/loader';
import { MixspaLink } from '@mixspa/react';

MixspaLoader.addAppInfo({
  tag: 'app-demo',
  name: 'AppDemo',
  assets: ['https://www.app-demo.com/app.js', 'https://www.app-demo.com/app.css']
});

const Loading = () => <div>Loading...</div>

const MixspaContent = () => (
  <div>
    <MixspaAppLoader name="AppDemo" loading={ Loading }/>
  </div>
);
export default MixspaContent;
```

### MixspaLink: for link to another mixspa with event.

Using it like this:

```js
import { MixspaLink } from '@mixspa/react';

const NavBar = () => (
  <div>
    <MixspaLink to="/menu-a"/>
    <MixspaLink to="/menu-b"/>
  </div>
);
export default NavBar;
```

### MixspaRouteApp: for handle url event from other mixspa.

Using it like this:

```js
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import { MixspaRouteApp } from '@mixspa/react';

ReactDOM.render(
  <BrowserRouter>
    <MixspaRouteApp>
      <Switch>
        <Route path="/test-a"/>
        <Route path="/test-b"/>
      </Switch>
    </MixspaRouteApp>
  </BrowserRouter>,
  document.getElementById('app')
);
```

## License

mixspa-mixspa-react is released under the [MIT license](https://github.com/mixspa/mixspa-react/blob/master/LICENSE).
