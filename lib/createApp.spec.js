"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _createApp = _interopRequireDefault(require("./createApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('createApp', function () {
  beforeEach(function () {
    (0, _createApp.default)('app-test', function (props) {
      return /*#__PURE__*/_react.default.createElement("div", {
        "data-testid": "test"
      }, "Test App ", props['data-test']);
    });
  });
  it('should render app', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement("app-test", {
      "data-test": "Attribute"
    }));
    expect(_react2.screen.getByTestId('test')).toHaveTextContent('Test App Attribute');
  });
});