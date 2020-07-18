"use strict";

var _react = _interopRequireDefault(require("react"));

var _history = require("history");

var _reactRouterDom = require("react-router-dom");

var _link = _interopRequireDefault(require("@mixspa/core/lib/link"));

var _react2 = require("@testing-library/react");

var _AppContainer = _interopRequireDefault(require("./AppContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AppContainer', function () {
  var App;
  beforeEach(function () {
    var history = (0, _history.createMemoryHistory)();
    App = /*#__PURE__*/_react.default.createElement(_reactRouterDom.Router, {
      history: history
    }, /*#__PURE__*/_react.default.createElement(_AppContainer.default, {
      baseUrl: "http://www.test.com"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/"
    }, /*#__PURE__*/_react.default.createElement("div", {
      "data-testid": "home"
    }, "Home Page")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/test"
    }, /*#__PURE__*/_react.default.createElement("div", {
      "data-testid": "test"
    }, "Test Page"))));
  });
  it('should render home page by default', function () {
    var _render = (0, _react2.render)(App),
        getByTestId = _render.getByTestId,
        queryByTestId = _render.queryByTestId;

    expect(queryByTestId('test')).toBeNull();
    expect(getByTestId('home')).toHaveTextContent('Home Page');
  });
  it('should render test page when receive url change event', function () {
    var _render2 = (0, _react2.render)(App),
        getByTestId = _render2.getByTestId,
        queryByTestId = _render2.queryByTestId;

    _link.default.emitLink("http://www.test.com/test");

    expect(queryByTestId('home')).toBeNull();
    expect(getByTestId('test')).toHaveTextContent('Test Page');
  });
  it('should do not render new page when receive other url change event', function () {
    var _render3 = (0, _react2.render)(App),
        getByTestId = _render3.getByTestId,
        queryByTestId = _render3.queryByTestId;

    _link.default.emitLink("http://www.other.com/test");

    expect(queryByTestId('test')).toBeNull();
    expect(getByTestId('home')).toHaveTextContent('Home Page');
  });
});