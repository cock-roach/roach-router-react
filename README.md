# Node Jest React Component stencil
This is a stencil for react component base on node and jest.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/react.svg)](https://npmjs.org/package/@mixspa/react)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/react.svg)](https://npmjs.org/package/@mixspa/react)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-react.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-react)

[![NPM](https://nodei.co/npm/@mixspa/react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/react/)


## Features:

* Support Publish your package to git & npm with ci.
* Support CircleCi for pipeline.
* Support ES7 & ES6 syntax.
* Support ESlint to check the code.
* Support Jest to test your code.
* Support Yarn audit to do security check for dependencies.

## Development:

### Setup

Clone this stencil and replace `@mixspa/react` with your package name.

```
$> git clone git@github.com:mixspa/mixspa-react.git
```

### Install dependencies

```
$> yarn install
```

### Compile code

```
$> yarn babel
# or run babel in watch mode
$> yarn babel:watch
```

### Generate distribution code

```
$> yarn build
```

### Linting

```
$> yarn lint
```

### Testing

```
$> yarn test
# or run the test in watch mode
$> yarn test:watch
```

### Security check

```
$> yarn audit
```

### Setup CI

* Update the circleci config
* Setup the ci into circleci site.


### Start in local

```
$> yarn start
```

## License

mixspa-mixspa-react is released under the [MIT license](https://github.com/mixspa/mixspa-mixspa-react/blob/master/LICENSE).
