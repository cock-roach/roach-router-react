"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _HelloWorld = _interopRequireDefault(require("./HelloWorld"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('HelloWorld', function () {
  var helloWorld;
  describe('#render', function () {
    beforeEach(function () {
      helloWorld = (0, _enzyme.mount)(_react.default.createElement(_HelloWorld.default, {
        message: "World"
      }));
    });
    it('should render a hello world message', function () {
      expect(helloWorld.text()).toBe('Hello World');
    });
  });
});