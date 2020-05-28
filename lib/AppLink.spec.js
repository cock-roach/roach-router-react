"use strict";

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("@mixspa/core/lib/link"));

var _react2 = require("@testing-library/react");

var _AppLink = _interopRequireDefault(require("./AppLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AppLink', function () {
  beforeEach(function () {
    _link.default.emitLink = jest.fn();
  });
  it('should render link', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLink.default, {
      "data-testid": "test",
      to: "http://www.test.com/test"
    }, "Go")),
        getByTestId = _render.getByTestId;

    expect(getByTestId('test')).toHaveTextContent('Go');
    expect(getByTestId('test')).toHaveAttribute('href', 'http://www.test.com/test');
  });
  it('should go to test url when click event', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLink.default, {
      "data-testid": "test",
      to: "http://www.test.com/test"
    }, "Go")),
        getByTestId = _render2.getByTestId;

    _react2.fireEvent.click(getByTestId('test'));

    expect(_link.default.emitLink).toHaveBeenCalledWith('http://www.test.com/test');
  });
  it('should stop go to url when link callback return false', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLink.default, {
      "data-testid": "test",
      to: "http://www.test.com/test",
      onLink: function onLink() {
        return false;
      }
    }, "Go")),
        getByTestId = _render3.getByTestId;

    _react2.fireEvent.click(getByTestId('test'));

    expect(_link.default.emitLink).not.toHaveBeenCalled();
  });
  it('should go to url when link callback return true', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLink.default, {
      "data-testid": "test",
      to: "http://www.test.com/test",
      onLink: function onLink() {
        return true;
      }
    }, "Go")),
        getByTestId = _render4.getByTestId;

    _react2.fireEvent.click(getByTestId('test'));

    expect(_link.default.emitLink).toHaveBeenCalledWith('http://www.test.com/test');
  });
});